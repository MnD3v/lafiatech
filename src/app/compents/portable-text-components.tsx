"use client";

import { PortableTextComponents } from "@portabletext/react";
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../sanity/client';
import { useState } from 'react';
import ImageModal from './ImageModal';

// Composant pour les images avec modal
function ImageComponent({ imageUrl, fullSizeImageUrl, alt, caption }: {
    imageUrl: string;
    fullSizeImageUrl: string;
    alt: string;
    caption?: string;
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <figure className="my-8 cursor-pointer group" onClick={() => setIsModalOpen(true)}>
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <img
                        src={imageUrl}
                        alt={alt}
                        className="w-full h-auto"
                        loading="lazy"
                        onError={(e) => {
                            console.error('Erreur de chargement de l\'image:', imageUrl);
                            e.currentTarget.style.display = 'none';
                        }}
                    />
                    {/* Overlay avec icône de zoom */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3">
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                        </div>
                    </div>
                </div>
                {caption && (
                    <figcaption className="text-center text-sm text-black mt-2 italic">
                        {caption}
                    </figcaption>
                )}
            </figure>

            <ImageModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                imageUrl={fullSizeImageUrl}
                alt={alt}
                caption={caption}
            />
        </>
    );
}

export const portableTextComponents: PortableTextComponents = {
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) {
                return null;
            }

            // Utiliser l'URL builder de Sanity pour une meilleure gestion des images
            const builder = imageUrlBuilder(client);
            const imageUrl = builder.image(value.asset).width(800).height(600).fit('max').auto('format').url();
            const fullSizeImageUrl = builder.image(value.asset).width(1200).height(800).fit('max').auto('format').url();

            return <ImageComponent 
                imageUrl={imageUrl} 
                fullSizeImageUrl={fullSizeImageUrl}
                alt={value.alt || 'Image du blog'}
                caption={value.caption}
            />;
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