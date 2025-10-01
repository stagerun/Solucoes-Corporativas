import * as React from 'react'

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
      const onChange = () => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      }
      mql.addEventListener('change', onChange)
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      return () => mql.removeEventListener('change', onChange)
    }
  }, [])

  // Retorna false durante SSR para evitar hidratação
  if (!mounted) {
    return false
  }

  return isMobile
}
