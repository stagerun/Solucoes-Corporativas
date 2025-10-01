export type Locale = "pt" | "en" | "es"

export const locales: Locale[] = ["pt", "en", "es"]

export const defaultLocale: Locale = "pt"

export const localeNames: Record<Locale, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
}

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split("/")
  const locale = segments[1] as Locale
  return locales.includes(locale) ? locale : defaultLocale
}
