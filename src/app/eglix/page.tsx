"use client"
import { motion } from 'framer-motion'
import React from 'react'
import FixedAppBar from '../compents/fixed_app_bar'

const EglixPage = () => {
    // Données structurées JSON-LD pour le SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Eglix",
        "description": "Application de gestion d'église moderne développée au Togo par LafiaTech",
        "url": "https://eglix.lafia.tech",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web Browser",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "XOF",
            "availability": "https://schema.org/InStock"
        },
        "author": {
            "@type": "Organization",
            "name": "LafiaTech",
            "url": "https://lafiatech.com",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "TG",
                "addressRegion": "Togo"
            }
        },
        "publisher": {
            "@type": "Organization",
            "name": "LafiaTech",
            "url": "https://lafiatech.com"
        },
        "datePublished": "2024",
        "dateModified": "2024",
        "inLanguage": "fr",
        "audience": {
            "@type": "Audience",
            "audienceType": "Églises et organisations religieuses"
        },
        "featureList": [
            "Gestion des membres avec profils détaillés",
            "Gestion financière (dîmes, offrandes, dons)",
            "Journal d'activités spirituelles et matérielles",
            "Rapports avancés et analyses statistiques",
            "Sécurité avancée avec authentification sécurisée"
        ],
        "screenshot": "https://lafiatech.com/eglix-landing.png",
        "softwareVersion": "1.0",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "50"
        }
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Données structurées JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            
            <FixedAppBar fixed={true}></FixedAppBar>
            
            {/* Hero Section */}
            <header className="px-4 sm:px-8 lg:px-24 py-24">
                <div className="text-center max-w-8xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center justify-center mb-12"
                    >
                        <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-8 py-4 shadow-lg">
                            {/* Left decorative element */}
                            <svg className="w-8 h-8 text-[#FF2600]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>

                            {/* Text content */}
                            <div className="text-center">
                                <div className="text-gray-900 font-semibold text-xs sm:text-sm">
                                    Solution Complète de
                                </div>
                                <div className="text-gray-900 font-bold text-xs sm:text-sm">
                                    <span className="text-[#FF2600]">Gestion d'Église</span>
                                </div>
                            </div>

                            {/* Right decorative element */}
                            <svg className="w-8 h-8 text-[#FF2600]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-8 leading-tight heading-primary text-center"
                    >
                        EGLIX
                        <br />
                        <span className="text-[#FF2600]">Application de Gestion d'Église au Togo</span>
                    </motion.h1>

                    {/* Descriptive Text */}
                    <motion.p
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-black mb-6 text-center">
                        Solution complète de gestion d'église moderne développée au Togo par LafiaTech.
                    </motion.p>

                    {/* Goal Text */}
                    <motion.p
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-sm sm:text-base md:text-lg text-black mb-8 text-center">
                        Gérez facilement vos membres, finances, activités et rapports avec une interface intuitive.
                        <span className="text-[#FF2600] font-medium"> Prêt à utiliser au Togo.</span>
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-8 px-4">
                        <motion.a
                            href="https://eglix.lafia.tech"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="group relative inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-black to-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base hover:from-[#FF2600] hover:to-[#FF4500] transition-all duration-300 overflow-hidden"
                        >
                            <div className="w-6 h-6 bg-[#FF2600] rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                                <svg className="w-3 h-3 text-white group-hover:text-[#FF2600] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <span>Accéder au Site</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </motion.a>
                        <motion.button
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.4 }}
                            className="flex items-center justify-center space-x-2 border border-gray-200 text-gray-700 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-medium text-xs sm:text-sm md:text-base hover:bg-gray-50 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            <span>VOIR LA DÉMO</span>
                        </motion.button>
                    </motion.div>

                        {/* Trust Indicator */}
                        <motion.p
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.6 }}
                            className="text-[#FF2600] text-center text-xs sm:text-sm">
                            <span className="font-black">+ de 50</span>
                            <span className="font-semibold text-black"> églises togolaises nous font confiance.</span>
                        </motion.p>
                </div>
            </header>

            {/* Application Preview */}
            <section className="px-4 sm:px-8 lg:px-24 py-16" aria-label="Aperçu de l'application Eglix">
                <div className="max-w-8xl mx-auto">
                    <motion.div
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
                            Interface <span className="text-[#FF2600]">Moderne</span> pour Églises du Togo
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-black max-w-3xl mx-auto">
                            Découvrez l'interface intuitive et professionnelle d'Eglix, spécialement conçue pour les églises togolaises
                        </p>
                    </motion.div>

                        <motion.div
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            transition={{ duration: 0.8, delay: 2.0 }}
                            className="flex justify-center"
                        >
                            <div className="relative max-w-6xl w-full">
                                <img
                                    src="/eglix-landing.png"
                                    alt="Eglix - Interface de gestion d'église moderne au Togo développée par LafiaTech"
                                    title="Eglix - Application de gestion d'église au Togo"
                                    className="w-full h-auto rounded-2xl shadow-lg border border-gray-100 bg-white"
                                    loading="eager"
                                    width="1200"
                                    height="630"
                                />
                            </div>
                        </motion.div>
                </div>
            </section>

            {/* Features Overview */}
            <section className="px-4 sm:px-8 lg:px-24 py-20" aria-label="Fonctionnalités principales d'Eglix">
                <div className="max-w-8xl mx-auto">
                    <motion.div
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
                            Fonctionnalités <span className="text-[#FF2600]">Principales</span> pour Églises Togolaises
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-black max-w-3xl mx-auto">
                            Une solution complète développée au Togo qui couvre tous les aspects de la gestion d'église moderne
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Gestion des Membres */}
                        <motion.div
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 bg-[#FF2600] rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Gestion des Membres</h3>
                            <div className="mb-4">
                                <p className="text-gray-700 font-medium mb-2">Comment ça marche :</p>
                                <p className="text-gray-600 text-sm">
                                    Création et gestion des membres, obtenez des statistiques claires des membres selon les âges, les sexes, les statuts de baptême, les groupes d'âge et les catégories spirituelles. Suivez l'évolution spirituelle de chaque membre avec un historique complet.
                                </p>
                            </div>
                            <ul className="text-gray-600 space-y-3">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Profils détaillés avec photos et informations complètes</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Système de remarques dynamiques et annotations</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Suivi spirituel et démographique avec graphiques</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Recherche et filtres avancés par critères multiples</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Gestion Financière */}
                        <motion.div
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 bg-[#FF2600] rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Gestion Financière</h3>
                            <div className="mb-4">
                                <p className="text-gray-700 font-medium mb-2">Comment ça marche :</p>
                                <p className="text-gray-600 text-sm">
                                    Enregistrement automatique des dîmes, offrandes et dons avec catégorisation intelligente. Génération de rapports financiers détaillés avec analyses de tendances, projections budgétaires et suivi des objectifs financiers de l'église.
                                </p>
                            </div>
                            <ul className="text-gray-600 space-y-3">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Dîmes et offrandes avec calcul automatique des pourcentages</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Dons et dépenses avec catégorisation par projet</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Rapports financiers détaillés avec graphiques interactifs</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Suivi des budgets par projet avec alertes automatiques</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Journal d'Activités */}
                        <motion.div
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 bg-[#FF2600] rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Journal d'Activités</h3>
                            <div className="mb-4">
                                <p className="text-gray-700 font-medium mb-2">Comment ça marche :</p>
                                <p className="text-gray-600 text-sm">
                                    Traçabilité complète des événements spirituels importants : mariages, naissances, baptêmes, confirmations, funérailles. Enregistrement chronologique avec photos et documents officiels stockés dans le cloud pour conserver toutes les traces de la vie spirituelle de l'église.
                                </p>
                            </div>
                            <ul className="text-gray-600 space-y-3">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Mariages, baptêmes, naissances avec horodatage précis</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Photos et documents officiels stockés dans le cloud</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Catégorisation automatique par type d'événement spirituel</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Recherche et filtres par famille, date et événement</span>
                                </li>
                            </ul>
                        </motion.div>


                        {/* Rapports Avancés */}
                        <motion.div
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 bg-[#FF2600] rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Rapports Avancés</h3>
                            <div className="mb-4">
                                <p className="text-gray-700 font-medium mb-2">Comment ça marche :</p>
                                <p className="text-gray-600 text-sm">
                                    Génération automatique de KPIs sophistiqués avec analyses statistiques en temps réel. Projections prédictives basées sur l'historique et exports personnalisés en CSV, Excel et PDF pour une prise de décision éclairée.
                                </p>
                            </div>
                            <ul className="text-gray-600 space-y-3">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>KPIs sophistiqués avec métriques personnalisables</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Analyses statistiques avec graphiques interactifs</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Projections prédictives basées sur l'IA</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Exports CSV/Excel/PDF avec formats personnalisés</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Sécurité */}
                        <motion.div
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 bg-[#FF2600] rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11.5H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sécurité Avancée</h3>
                            <div className="mb-4">
                                <p className="text-gray-700 font-medium mb-2">Comment ça marche :</p>
                                <p className="text-gray-600 text-sm">
                                    Authentification multi-facteurs avec gestion granulaire des rôles et permissions. Protection avancée contre les attaques avec chiffrement des données et surveillance continue de la sécurité pour garantir la confidentialité des informations de l'église.
                                </p>
                            </div>
                            <ul className="text-gray-600 space-y-3">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Authentification sécurisée avec 2FA et OTP</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Rôles et permissions granulaires par fonction</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Protection contre les attaques avec chiffrement AES-256</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Système de sécurité avancé avec surveillance 24/7</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Technical Stack */}
            <section className="px-4 sm:px-8 lg:px-24 py-20" aria-label="Technologies utilisées par LafiaTech">
                <div className="max-w-8xl mx-auto">
                    <motion.div
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
                            Technologies <span className="text-[#FF2600]">Utilisées</span> par LafiaTech
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-black max-w-3xl mx-auto">
                            Construit avec les outils les plus modernes et fiables par notre équipe au Togo
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-center"
                        >
                            <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-orange-600">L</span>
                            </div>
                            <h3 className="font-bold text-gray-900">Framework Web</h3>
                            <p className="text-sm text-gray-600">Serveur sécurisé</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-center"
                        >
                            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-blue-600">SQL</span>
                            </div>
                            <h3 className="font-bold text-gray-900">PostgreSQL</h3>
                            <p className="text-sm text-gray-600">Base de données</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="text-center"
                        >
                            <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-purple-600">F</span>
                            </div>
                            <h3 className="font-bold text-gray-900">Stockage Cloud</h3>
                            <p className="text-sm text-gray-600">Images et fichiers</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                            className="text-center"
                        >
                            <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-green-600">B5</span>
                            </div>
                            <h3 className="font-bold text-gray-900">Interface Moderne</h3>
                            <p className="text-sm text-gray-600">Design responsive</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 sm:px-8 lg:px-24 py-20" aria-label="Appel à l'action pour Eglix">
                <div className="max-w-8xl mx-auto text-center">
                    <motion.div
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
                                Prêt à Moderniser Votre <span className="text-[#FF2600]">Église au Togo ?</span>
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-black mb-8 max-w-3xl mx-auto">
                                Rejoignez des centaines d'églises togolaises qui font confiance à Eglix pour leur gestion quotidienne
                            </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="https://eglix.lafia.tech"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ filter: "blur(20px)", opacity: 0 }}
                                animate={{ filter: "blur(0px)", opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="group relative inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-black to-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base hover:from-[#FF2600] hover:to-[#FF4500] transition-all duration-300 overflow-hidden"
                            >
                                <div className="w-6 h-6 bg-[#FF2600] rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                                    <svg className="w-3 h-3 text-white group-hover:text-[#FF2600] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <span>Accéder au Site</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </motion.a>
                            <motion.button
                                initial={{ filter: "blur(20px)", opacity: 0 }}
                                animate={{ filter: "blur(0px)", opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="flex items-center justify-center space-x-2 border border-gray-200 text-gray-700 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-medium text-xs sm:text-sm md:text-base hover:bg-gray-50 transition-colors">
                                <span>CONTACTER L'ÉQUIPE</span>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    )
}

export default EglixPage
