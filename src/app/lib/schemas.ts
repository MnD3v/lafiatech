export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LafiaTech",
  "description": "LafiaTech est une boîte de création de logiciels et solutions digitales au Togo. Nous développons des applications web, mobiles et des solutions logicielles sur mesure pour transformer vos idées en réalité numérique.",
  "url": "https://www.lafia.tech",
  "logo": "https://www.lafia.tech/logo.png",
  "image": "https://www.lafia.tech/eglix-landing.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dongoyo",
    "addressLocality": "Kara",
    "addressRegion": "Kara",
    "addressCountry": "TG",
    "postalCode": "Kara"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+228-98784589",
    "contactType": "customer service",
    "email": "em.djatika@gmail.com",
    "availableLanguage": ["French", "English"]
  },
  "sameAs": [
    "https://web.facebook.com/emanuel.djatika.7",
    "https://www.linkedin.com/in/emanuel-djatika-283390276/",
    "https://github.com/em-djatika"
  ],
  "service": [
    {
      "@type": "Service",
      "name": "Création de Logiciels",
      "description": "Développement de logiciels sur mesure et solutions logicielles personnalisées",
      "provider": {
        "@type": "Organization",
        "name": "LafiaTech"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Togo"
      }
    },
    {
      "@type": "Service",
      "name": "Solutions Digitales",
      "description": "Conception et développement de solutions digitales innovantes",
      "provider": {
        "@type": "Organization",
        "name": "LafiaTech"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Togo"
      }
    },
    {
      "@type": "Service", 
      "name": "Développement Web",
      "description": "Création de sites web modernes et applications web",
      "provider": {
        "@type": "Organization",
        "name": "LafiaTech"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Togo"
      }
    },
    {
      "@type": "Service",
      "name": "Développement Mobile",
      "description": "Applications mobiles iOS et Android",
      "provider": {
        "@type": "Organization",
        "name": "LafiaTech"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Togo"
      }
    }
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Togo"
  },
  "foundingDate": "2024",
  "numberOfEmployees": "1-10",
  "priceRange": "$$",
  "paymentAccepted": "Cash, Bank Transfer",
  "currenciesAccepted": "XOF, EUR, USD",
  "openingHours": "Mo-Fr 08:00-18:00",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services LafiaTech",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Création de Logiciels",
          "description": "Développement de logiciels sur mesure"
        },
        "priceRange": "$$",
        "availability": "InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Solutions Digitales",
          "description": "Conception de solutions digitales innovantes"
        },
        "priceRange": "$$",
        "availability": "InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Développement Web",
          "description": "Création de sites web modernes"
        },
        "priceRange": "$$",
        "availability": "InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Développement Mobile",
          "description": "Applications mobiles iOS et Android"
        },
        "priceRange": "$$",
        "availability": "InStock"
      }
    ]
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "LafiaTech",
  "description": "Site web officiel de LafiaTech - Création de Logiciels & Solutions Digitales au Togo",
  "url": "https://www.lafia.tech",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.lafia.tech/blog?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "LafiaTech",
    "url": "https://www.lafia.tech"
  }
};

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const articleSchema = (article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  author: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "url": article.url,
  "datePublished": article.datePublished,
  "dateModified": article.dateModified,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "LafiaTech",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.lafia.tech/logo.png"
    }
  },
  "image": article.image || "https://www.lafia.tech/eglix-landing.png",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  }
});
