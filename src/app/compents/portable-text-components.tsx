"use client";

import { PortableTextComponents } from "@portabletext/react";
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../sanity/client';

export const portableTextComponents: PortableTextComponents = {
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) {
                return null;
            }

            // Utiliser l'URL builder de Sanity pour une meilleure gestion des images
            const builder = imageUrlBuilder(client);
            const imageUrl = builder.image(value.asset).width(800).height(600).fit('max').auto('format').url();

            return (
                <figure className="my-8">
                    <img
                        src={imageUrl}
                        alt={value.alt || 'Image du blog'}
                        className="w-full h-auto rounded-lg shadow-lg"
                        loading="lazy"
                        onError={(e) => {
                            console.error('Erreur de chargement de l\'image:', imageUrl);
                            console.error('Référence de l\'asset:', value.asset);
                            e.currentTarget.style.display = 'none';
                        }}
                    />
                    {value.caption && (
                        <figcaption className="text-center text-sm text-black mt-2 italic">
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            );
        },
    },
    block: {
        h1: ({ children }) => <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-black font-dm-sans">{children}</h1>,
        h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-black font-dm-sans">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl md:text-2xl font-bold mt-8 mb-3 text-black font-dm-sans">{children}</h3>,
        normal: ({ children }) => <p className="mb-6 leading-relaxed text-black font-dm-sans tracking-wide text-base md:text-lg">{children}</p>,
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-green-500 pl-6 py-4 my-8 italic text-black bg-gray-800/50 rounded-r-lg font-dm-sans text-base md:text-lg">
                {children}
            </blockquote>
        ),
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold text-black font-dm-sans">{children}</strong>,
        em: ({ children }) => <em className="italic text-black font-dm-sans">{children}</em>,
        link: ({ value, children }) => (
            <a
                href={value?.href}
                target={value?.blank ? '_blank' : '_self'}
                rel={value?.blank ? 'noopener noreferrer' : undefined}
                className="text-green-400 hover:text-green-300 underline transition-colors font-dm-sans"
            >
                {children}
            </a>
        ),
    },
    list: {
        bullet: ({ children }) => <ul className="list-disc list-inside mb-6 space-y-2 text-black font-dm-sans text-base md:text-lg pl-4">{children}</ul>,
        number: ({ children }) => <ol className="list-decimal list-inside mb-6 space-y-2 text-black font-dm-sans text-base md:text-lg pl-4">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }) => <li className="mb-2">{children}</li>,
        number: ({ children }) => <li className="mb-2">{children}</li>,
    },
}; 