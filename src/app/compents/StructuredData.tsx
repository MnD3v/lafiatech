import React from 'react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface StructuredDataProps {
  type: 'breadcrumb' | 'faq' | 'article' | 'service';
  data: Record<string, unknown> | Array<unknown>;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const generateStructuredData = () => {
    switch (type) {
      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": (data as BreadcrumbItem[]).map((item: BreadcrumbItem, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": (data as FAQItem[]).map((item: FAQItem) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        };

      case 'article':
        const articleData = data as Record<string, unknown>;
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": articleData.title,
          "description": articleData.description,
          "image": articleData.image,
          "author": {
            "@type": "Organization",
            "name": "LafiaTech"
          },
          "publisher": {
            "@type": "Organization",
            "name": "LafiaTech",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.lafia.tech/logo.png"
            }
          },
          "datePublished": articleData.datePublished,
          "dateModified": articleData.dateModified || articleData.datePublished,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": articleData.url
          }
        };

      case 'service':
        const serviceData = data as Record<string, unknown>;
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": serviceData.name,
          "description": serviceData.description,
          "provider": {
            "@type": "Organization",
            "name": "LafiaTech",
            "url": "https://www.lafia.tech"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Togo"
          },
          "serviceType": serviceData.serviceType,
          "offers": {
            "@type": "Offer",
            "priceCurrency": "XOF",
            "availability": "https://schema.org/InStock"
          }
        };

      default:
        return {};
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateStructuredData())
      }}
    />
  );
};

export default StructuredData;
