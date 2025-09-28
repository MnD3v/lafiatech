import React from 'react';
import Link from 'next/link';
import { StructuredData } from './StructuredData';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOBreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const SEOBreadcrumb: React.FC<SEOBreadcrumbProps> = ({ 
  items, 
  className = 'flex items-center space-x-2 text-sm text-gray-600' 
}) => {
  return (
    <>
      <StructuredData type="breadcrumb" data={items} />
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex items-center space-x-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-4 h-4 mx-2 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {index === items.length - 1 ? (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default SEOBreadcrumb;
