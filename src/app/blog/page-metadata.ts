import { Metadata } from "next";

export const blogPageMetadata: Metadata = {
  title: "Blog - LafiaTech | Articles sur la Création de Logiciels & Solutions Digitales",
  description: "Découvrez nos articles sur la création de logiciels, solutions digitales et technologies émergentes. LafiaTech partage son expertise du développement logiciel au Togo.",
  keywords: [
    "blog création logiciel",
    "articles solutions digitales Togo",
    "blog LafiaTech",
    "tutoriels développement logiciel",
    "technologies logicielles",
    "création application",
    "développement logiciel Togo"
  ],
  openGraph: {
    title: "Blog - LafiaTech | Articles sur la Création de Logiciels & Solutions Digitales",
    description: "Découvrez nos articles sur la création de logiciels, solutions digitales et technologies émergentes.",
    url: "https://www.lafia.tech/blog",
    images: [
      {
        url: "https://i.ibb.co/bRq1S0Zx/Frame-6.png",
        width: 1200,
        height: 630,
        alt: "Blog LafiaTech - Articles Création de Logiciels & Solutions Digitales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - LafiaTech | Articles sur la Création de Logiciels & Solutions Digitales",
    description: "Découvrez nos articles sur la création de logiciels, solutions digitales et technologies émergentes.",
    images: ["https://i.ibb.co/bRq1S0Zx/Frame-6.png"],
  },
  alternates: {
    canonical: "https://www.lafia.tech/blog",
  },
};
