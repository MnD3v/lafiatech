import { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    default: "LafiaTech - Création de Logiciels & Solutions Digitales au Togo",
    template: "%s | LafiaTech"
  },
  description: "LafiaTech est une boîte de création de logiciels et solutions digitales au Togo. Nous développons des applications web, mobiles et des solutions logicielles sur mesure pour transformer vos idées en réalité numérique.",
  keywords: [
    "création logiciel Togo",
    "solutions digitales Togo",
    "développement logiciel Togo",
    "boîte création logiciel Togo",
    "développement web Togo",
    "développement mobile Togo", 
    "solutions numériques Togo",
    "création application Togo",
    "logiciel sur mesure Togo",
    "LafiaTech",
    "Kara Togo",
    "Dongoyo",
    "agence développement logiciel"
  ],
  authors: [{ name: "LafiaTech", url: "https://www.lafia.tech" }],
  creator: "LafiaTech",
  publisher: "LafiaTech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.lafia.tech"),
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.lafia.tech",
    siteName: "LafiaTech",
    title: "LafiaTech - Création de Logiciels & Solutions Digitales au Togo",
    description: "Boîte de création de logiciels et solutions digitales au Togo. Développement d'applications web, mobiles et solutions logicielles sur mesure.",
    images: [
      {
        url: "https://i.ibb.co/bRq1S0Zx/Frame-6.png",
        width: 1200,
        height: 630,
        alt: "LafiaTech - Création de Logiciels & Solutions Digitales au Togo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LafiaTech - Création de Logiciels & Solutions Digitales au Togo",
    description: "Boîte de création de logiciels et solutions digitales au Togo. Développement d'applications web, mobiles et solutions logicielles sur mesure.",
    images: ["https://i.ibb.co/bRq1S0Zx/Frame-6.png"],
    creator: "@lafiatech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // À remplacer par le vrai code
  },
  category: "technology",
};
