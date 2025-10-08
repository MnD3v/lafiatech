import React from 'react';

interface SEOSchemaProps {
  type: 'organization' | 'website' | 'webpage' | 'service' | 'article' | 'breadcrumb' | 'faq';
  data: Record<string, unknown> | Array<unknown>;
}

export const SEOSchema: React.FC<SEOSchemaProps> = ({ type, data }) => {
  const generateSchema = () => {
    const baseUrl = 'https://www.lafia.tech';
    
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "LafiaTech",
          "description": "LafiaTech est une boîte de création de logiciels et solutions digitales au Togo. Nous développons des applications web, mobiles et des solutions logicielles sur mesure pour transformer vos idées en réalité numérique.",
          "url": baseUrl,
          "logo": `${baseUrl}/logo.png`,
          "image": "https://i.ibb.co/bRq1S0Zx/Frame-6.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Dongoyo",
            "addressLocality": "Kara",
            "addressCountry": "TG"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+228-98784589",
            "contactType": "customer service",
            "email": "em.djatika@gmail.com"
          },
          "sameAs": [
            "https://web.facebook.com/emanuel.djatika.7",
            "https://www.linkedin.com/in/emanuel-djatika-283390276/",
            "https://github.com/em-djatika"
          ],
          "foundingDate": "2024",
          "numberOfEmployees": "1-10",
          "areaServed": {
            "@type": "Country",
            "name": "Togo"
          }
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "LafiaTech",
          "description": "Site officiel de LafiaTech - Création de logiciels et solutions digitales au Togo",
          "url": baseUrl,
          "publisher": {
            "@type": "Organization",
            "name": "LafiaTech"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        };

      case 'webpage':
        const webpageData = data as Record<string, unknown>;
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": webpageData.title,
          "description": webpageData.description,
          "url": webpageData.url,
          "isPartOf": {
            "@type": "WebSite",
            "name": "LafiaTech",
            "url": baseUrl
          },
          "publisher": {
            "@type": "Organization",
            "name": "LafiaTech"
          },
          "datePublished": webpageData.datePublished,
          "dateModified": webpageData.dateModified || webpageData.datePublished,
          "inLanguage": "fr-FR"
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
            "url": baseUrl
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
              "url": `${baseUrl}/logo.png`
            }
          },
          "datePublished": articleData.datePublished,
          "dateModified": articleData.dateModified || articleData.datePublished,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": articleData.url
          },
          "inLanguage": "fr-FR"
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": (data as Array<{name: string, url: string}>).map((item, index: number) => ({
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
          "mainEntity": (data as Array<{question: string, answer: string}>).map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        };

      default:
        return {};
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateSchema())
      }}
    />
  );
};

export default SEOSchema;
