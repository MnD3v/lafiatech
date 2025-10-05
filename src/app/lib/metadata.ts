import { Metadata } from "next";

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  image = "https://www.lafia.tech/eglix-landing.png",
  url,
  type = "website",
}: {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url: string;
  type?: string;
}): Metadata {
  const fullTitle = `${title} | LafiaTech`;
  
  return {
    title: fullTitle,
    description,
    keywords: [
      ...keywords,
      "LafiaTech",
      "création logiciel Togo",
      "solutions digitales Togo",
      "développement web Togo",
      "développement mobile Togo",
      "Kara Togo",
      "Dongoyo",
    ],
    authors: [{ name: "LafiaTech", url: "https://www.lafia.tech" }],
    creator: "LafiaTech",
    publisher: "LafiaTech",
    metadataBase: new URL("https://www.lafia.tech"),
    alternates: {
      canonical: url,
      languages: {
        "fr-FR": url,
      },
    },
    openGraph: {
      type: type as any,
      locale: "fr_FR",
      url: url,
      siteName: "LafiaTech",
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
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
    other: {
      "geo.region": "TG",
      "geo.country": "Togo",
      "geo.placename": "Kara, Togo",
      "DC.title": fullTitle,
      "DC.creator": "LafiaTech",
      "DC.subject": keywords.join(", "),
      "DC.description": description,
      "DC.publisher": "LafiaTech",
      "DC.contributor": "LafiaTech",
      "DC.date": new Date().getFullYear().toString(),
      "DC.type": type,
      "DC.format": "text/html",
      "DC.identifier": url,
      "DC.source": url,
      "DC.language": "fr",
      "DC.relation": url,
      "DC.coverage": "Togo",
      "DC.rights": "Copyright LafiaTech",
    },
  };
}
