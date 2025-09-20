import { motion } from 'framer-motion'
import React from 'react'

const Applications = () => {
    return (
        <motion.div
            initial={{ filter: "blur(20px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="px-4 sm:px-8 lg:px-24 py-16 bg-gray-50"
            id="applications"
        >
            <div className="max-w-8xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4"
                    >
                        Nos applications déjà prêtes à l'<span className="text-[#FF2600]">utilisation</span>
                    </motion.h2>
                    <motion.p
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto"
                    >
                        Découvrez nos solutions pré-développées, prêtes à être déployées immédiatement pour votre entreprise.
                    </motion.p>
                </div>

                {/* Applications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {/* Application 1 - Gestion Commerciale */}
                    <motion.div
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-[#FF2600] rounded-xl flex items-center justify-center mr-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Gestion Commerciale</h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-6">
                            Solution complète de gestion des ventes, stocks et clients avec interface intuitive et rapports détaillés.
                        </p>
                        <ul className="text-gray-600 space-y-2 mb-6">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm">Gestion des ventes et commandes</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm">Suivi des stocks en temps réel</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm">Base de données clients</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm">Rapports financiers automatiques</span>
                            </li>
                        </ul>
                        <div className="flex items-center justify-between">
                            <span className="text-[#FF2600] font-semibold text-sm">Prêt à utiliser</span>
                            <button className="text-[#FF2600] hover:text-[#FF4500] transition-colors text-sm font-medium">
                                Découvrir →
                            </button>
                        </div>
                    </motion.div>

                    {/* Application 2 - Gestion RH */}
                    <motion.div
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-[#FF2600] rounded-xl flex items-center justify-center mr-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Gestion RH</h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-6">
                            Gestion complète des employés, congés, paies et bulletins de salaire avec automatisation des processus.
                        </p>
                        <ul className="text-gray-600 space-y-2 mb-6">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm">Dossiers employés complets</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm">Gestion des congés et absences</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm">Calcul automatique des paies</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm">Génération des bulletins</span>
                            </li>
                        </ul>
                        <div className="flex items-center justify-between">
                            <span className="text-[#FF2600] font-semibold text-sm">Prêt à utiliser</span>
                            <button className="text-[#FF2600] hover:text-[#FF4500] transition-colors text-sm font-medium">
                                Découvrir →
                            </button>
                        </div>
                    </motion.div>

                    {/* Application 3 - Gestion d'Église */}
                    <motion.div
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-[#FF2600] rounded-xl flex items-center justify-center mr-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Gestion d'Église</h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-6">
                            Solution complète pour la gestion des membres, dons, événements et activités paroissiales au Togo.
                        </p>
                        <ul className="text-gray-600 space-y-2 mb-6">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm">Gestion des membres et familles</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm">Suivi des dîmes et offrandes</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm">Planning des événements</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#FF2600] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm">Rapports et statistiques</span>
                            </li>
                        </ul>
                        <div className="flex items-center justify-between">
                            <span className="text-[#FF2600] font-semibold text-sm">Prêt à utiliser</span>
                            <a href="/eglix" className="text-[#FF2600] hover:text-[#FF4500] transition-colors text-sm font-medium">
                                Découvrir →
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ filter: "blur(20px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="text-center"
                >
                    <p className="text-gray-600 text-sm sm:text-base mb-6">
                        Besoin d'une solution personnalisée ? Nous développons aussi sur mesure.
                    </p>
                    <motion.button
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                        className="bg-[#FF2600] hover:bg-[#FF4500] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                    >
                        Voir toutes nos solutions
                    </motion.button>
                </motion.div>

            </div>
        </motion.div>
    )
}

export default Applications
