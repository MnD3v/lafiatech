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

                {/* Applications List */}
                <div className="flex flex-wrap justify-center gap-6 mb-16">
                    {/* Application 1 - Gestion Commerciale */}
                    <motion.div
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <svg className="w-4 h-4 text-[#FF2600]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-xs sm:text-sm font-medium">Gestion Commerciale</span>
                    </motion.div>

                    {/* Application 2 - Gestion RH */}
                    <motion.div
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <svg className="w-4 h-4 text-[#FF2600]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-xs sm:text-sm font-medium">Gestion RH</span>
                    </motion.div>

                    {/* Application 3 - Gestion d'Église */}
                    <motion.div
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <svg className="w-4 h-4 text-[#FF2600]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-xs sm:text-sm font-medium">Gestion d'Église</span>
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
