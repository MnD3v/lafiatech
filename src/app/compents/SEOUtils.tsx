import React from 'react';

// Utility functions for SEO
export const generateMetaTitle = (title: string, siteName: string = 'LafiaTech'): string => {
  return title.includes(siteName) ? title : `${title} | ${siteName}`;
};

export const generateMetaDescription = (description: string, maxLength: number = 160): string => {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength - 3) + '...';
};

export const generateKeywords = (baseKeywords: string[], additionalKeywords: string[] = []): string[] => {
  const allKeywords = [...baseKeywords, ...additionalKeywords];
  return Array.from(new Set(allKeywords)); // Remove duplicates
};

export const generateCanonicalUrl = (path: string, baseUrl: string = 'https://www.lafia.tech'): string => {
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

export const generateOpenGraphImage = (imagePath: string, baseUrl: string = 'https://www.lafia.tech'): string => {
  return imagePath.startsWith('http') ? imagePath : `${baseUrl}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}`;
};

// SEO-friendly text formatting
export const formatTextForSEO = (text: string): string => {
  return text
    .trim()
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .replace(/[^\w\s\-.,!?]/g, '') // Remove special characters except basic punctuation
    .toLowerCase();
};

// Generate structured data for different content types
export const generateArticleSchema = (article: {
  title: string;
  description: string;
  image: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "author": {
      "@type": "Organization",
      "name": article.author || "LafiaTech"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LafiaTech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.lafia.tech/logo.png"
      }
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    }
  };
};

export const generateServiceSchema = (service: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "LafiaTech",
      "url": "https://www.lafia.tech"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Togo"
    },
    "serviceType": service.serviceType,
    "url": service.url
  };
};

// SEO-friendly URL generation
export const generateSEOFriendlyUrl = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
};

// Generate breadcrumb data
export const generateBreadcrumbData = (path: string, baseUrl: string = 'https://www.lafia.tech') => {
  const segments = path.split('/').filter(segment => segment);
  const breadcrumbs = [
    { name: 'Accueil', url: baseUrl }
  ];

  let currentPath = '';
  segments.forEach(segment => {
    currentPath += `/${segment}`;
    const name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    breadcrumbs.push({
      name,
      url: `${baseUrl}${currentPath}`
    });
  });

  return breadcrumbs;
};

// Validate SEO data
export const validateSEOData = (data: {
  title?: string;
  description?: string;
  keywords?: string[];
}) => {
  const errors: string[] = [];

  if (data.title && data.title.length > 60) {
    errors.push('Le titre est trop long (max 60 caractères)');
  }

  if (data.description && data.description.length > 160) {
    errors.push('La description est trop longue (max 160 caractères)');
  }

  if (data.keywords && data.keywords.length > 10) {
    errors.push('Trop de mots-clés (max 10 recommandés)');
  }

  return errors;
};

const seoUtils = {
  generateMetaTitle,
  generateMetaDescription,
  generateKeywords,
  generateCanonicalUrl,
  generateOpenGraphImage,
  formatTextForSEO,
  generateArticleSchema,
  generateServiceSchema,
  generateSEOFriendlyUrl,
  generateBreadcrumbData,
  validateSEOData
};

export default seoUtils;
