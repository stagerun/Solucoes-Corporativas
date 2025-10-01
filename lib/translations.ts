import type { Locale } from "./i18n"

type TranslationKeys = {
  nav: {
    home: string
    about: string
    services: string
    team: string
    blog: string
    contact: string
  }
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  services: {
    title: string
    subtitle: string
  }
  testimonials: {
    title: string
    subtitle: string
  }
  cta: {
    title: string
    subtitle: string
    button: string
  }
  about: {
    title: string
    subtitle: string
    mission: string
    missionText: string
    vision: string
    visionText: string
    values: string
    valuesText: string
  }
  team: {
    title: string
    subtitle: string
  }
  footer: {
    company: string
    about: string
    services: string
    contact: string
    rights: string
  }
}

export const translations: Record<Locale, TranslationKeys> = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre Nós",
      services: "Serviços",
      team: "Equipe",
      blog: "Blog",
      contact: "Contato",
    },
    hero: {
      title: "Soluções Corporativas de Excelência",
      subtitle: "Transformamos desafios em oportunidades com tecnologia e inovação",
      cta: "Fale Conosco",
    },
    services: {
      title: "Nossos Serviços",
      subtitle: "Soluções completas para impulsionar seu negócio",
    },
    testimonials: {
      title: "O Que Dizem Nossos Clientes",
      subtitle: "Confiança construída através de resultados",
    },
    cta: {
      title: "Pronto para Transformar Seu Negócio?",
      subtitle: "Entre em contato conosco e descubra como podemos ajudar",
      button: "Começar Agora",
    },
    about: {
      title: "Sobre Nós",
      subtitle: "Conheça nossa história e valores",
      mission: "Nossa Missão",
      missionText:
        "Transformar desafios empresariais em oportunidades de crescimento através de soluções tecnológicas inovadoras e consultoria estratégica de excelência.",
      vision: "Nossa Visão",
      visionText:
        "Ser referência global em soluções corporativas, reconhecida pela qualidade, inovação e impacto positivo nos negócios de nossos clientes.",
      values: "Nossos Valores",
      valuesText:
        "Excelência, Inovação, Integridade, Compromisso com o Cliente, Trabalho em Equipe e Responsabilidade Social.",
    },
    team: {
      title: "Nossa Equipe",
      subtitle: "Profissionais experientes dedicados ao seu sucesso",
    },
    footer: {
      company: "Empresa",
      about: "Sobre",
      services: "Serviços",
      contact: "Contato",
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      team: "Team",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      title: "Excellence in Corporate Solutions",
      subtitle: "We transform challenges into opportunities with technology and innovation",
      cta: "Contact Us",
    },
    services: {
      title: "Our Services",
      subtitle: "Complete solutions to boost your business",
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Trust built through results",
    },
    cta: {
      title: "Ready to Transform Your Business?",
      subtitle: "Contact us and discover how we can help",
      button: "Get Started",
    },
    about: {
      title: "About Us",
      subtitle: "Learn about our history and values",
      mission: "Our Mission",
      missionText:
        "Transform business challenges into growth opportunities through innovative technological solutions and strategic consulting excellence.",
      vision: "Our Vision",
      visionText:
        "To be a global reference in corporate solutions, recognized for quality, innovation and positive impact on our clients' businesses.",
      values: "Our Values",
      valuesText: "Excellence, Innovation, Integrity, Customer Commitment, Teamwork and Social Responsibility.",
    },
    team: {
      title: "Our Team",
      subtitle: "Experienced professionals dedicated to your success",
    },
    footer: {
      company: "Company",
      about: "About",
      services: "Services",
      contact: "Contact",
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Nosotros",
      services: "Servicios",
      team: "Equipo",
      blog: "Blog",
      contact: "Contacto",
    },
    hero: {
      title: "Soluciones Corporativas de Excelencia",
      subtitle: "Transformamos desafíos en oportunidades con tecnología e innovación",
      cta: "Contáctenos",
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Soluciones completas para impulsar su negocio",
    },
    testimonials: {
      title: "Lo Que Dicen Nuestros Clientes",
      subtitle: "Confianza construida a través de resultados",
    },
    cta: {
      title: "¿Listo para Transformar Su Negocio?",
      subtitle: "Contáctenos y descubra cómo podemos ayudar",
      button: "Comenzar Ahora",
    },
    about: {
      title: "Sobre Nosotros",
      subtitle: "Conozca nuestra historia y valores",
      mission: "Nuestra Misión",
      missionText:
        "Transformar desafíos empresariales en oportunidades de crecimiento a través de soluciones tecnológicas innovadoras y consultoría estratégica de excelencia.",
      vision: "Nuestra Visión",
      visionText:
        "Ser referencia global en soluciones corporativas, reconocida por la calidad, innovación e impacto positivo en los negocios de nuestros clientes.",
      values: "Nuestros Valores",
      valuesText:
        "Excelencia, Innovación, Integridad, Compromiso con el Cliente, Trabajo en Equipo y Responsabilidad Social.",
    },
    team: {
      title: "Nuestro Equipo",
      subtitle: "Profesionales experimentados dedicados a su éxito",
    },
    footer: {
      company: "Empresa",
      about: "Acerca de",
      services: "Servicios",
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
    },
  },
}

export function getTranslations(locale: Locale): TranslationKeys {
  return translations[locale] || translations.pt
}
