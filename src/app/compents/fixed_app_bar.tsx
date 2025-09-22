"use client"
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

const FixedAppBar = ({ fixed }: { fixed?: boolean }) => {
    const [showAppBar, setShow] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 180) {
                setShow(true)
            } else {
                setShow(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // Gérer le scroll automatique quand on arrive sur la page avec un hash
    useEffect(() => {
        if (pathname === '/' && window.location.hash) {
            const hash = window.location.hash.substring(1) // Enlever le #
            setTimeout(() => {
                const element = document.getElementById(hash)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                }
            }, 100) // Petit délai pour s'assurer que la page est chargée
        }
    }, [pathname])

    const handleNavigation = (sectionId: string) => {
        setIsMobileMenuOpen(false) // Fermer le menu mobile
        if (pathname === '/') {
            // Si on est sur la page principale, scroll vers la section
            const element = document.getElementById(sectionId)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            // Si on n'est pas sur la page principale, rediriger vers la page principale avec la section
            router.push(`/#${sectionId}`)
        }
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <>
        <motion.div 
            className="fixed w-full bg-white shadow-sm border-b border-gray-100 z-50"
            initial={{ y: -200 }}
            animate={{ y: fixed == true ? 0 : showAppBar ? 0 : -200 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img 
                            src="/logo.png" 
                            alt="LafiaTech" 
                            className="h-8 w-auto"
                        />
                    </div>
                    
                    {/* Navigation Links - Hidden on mobile, visible on desktop */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <button onClick={() => handleNavigation('services')} className="text-gray-700 hover:text-[#FF2600] transition-colors font-medium">Services</button>
                        <button onClick={() => handleNavigation('garantis')} className="text-gray-700 hover:text-[#FF2600] transition-colors font-medium">Garanties</button>
                        <button onClick={() => handleNavigation('tarif')} className="text-gray-700 hover:text-[#FF2600] transition-colors font-medium">Tarifs</button>
                        <button onClick={() => handleNavigation('formation')} className="text-gray-700 hover:text-[#FF2600] transition-colors font-medium">Formations</button>
                        <button onClick={() => handleNavigation('applications')} className="text-gray-700 hover:text-[#FF2600] transition-colors font-medium">Applications</button>
                        <button onClick={() => handleNavigation('blog')} className="text-gray-700 hover:text-[#FF2600] transition-colors font-medium">Blog</button>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center space-x-3">
                        {/* Language Selector */}
                        <button className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                            <span className="text-sm">🇫🇷</span>
                            <span className="text-sm font-medium text-gray-700">FR</span>
                            <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        
                        {/* PRENDRE UN RENDEZ VOUS Button */}
                        <button className="hidden sm:block relative px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                            PRENDRE UN RENDEZ VOUS
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                        </button>
                        
                        {/* Mobile Menu Button */}
                        <button 
                            onClick={toggleMobileMenu}
                            className="lg:hidden p-2 text-gray-700 hover:text-[#FF2600] transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
            />
        )}

        {/* Mobile Menu Sidebar */}
        <motion.div
            initial={{ x: "100%" }}
            animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 lg:hidden"
        >
            <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-end p-6 border-b border-gray-200">
                    <button 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 text-gray-700 hover:text-[#FF2600] transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 px-6 py-8">
                    <nav className="space-y-6">
                        <button 
                            onClick={() => handleNavigation('services')} 
                            className="block w-full text-left text-lg font-medium text-gray-700 hover:text-[#FF2600] transition-colors py-2"
                        >
                            Services
                        </button>
                        <button 
                            onClick={() => handleNavigation('garantis')} 
                            className="block w-full text-left text-lg font-medium text-gray-700 hover:text-[#FF2600] transition-colors py-2"
                        >
                            Garanties
                        </button>
                        <button 
                            onClick={() => handleNavigation('tarif')} 
                            className="block w-full text-left text-lg font-medium text-gray-700 hover:text-[#FF2600] transition-colors py-2"
                        >
                            Tarifs
                        </button>
                        <button 
                            onClick={() => handleNavigation('formation')} 
                            className="block w-full text-left text-lg font-medium text-gray-700 hover:text-[#FF2600] transition-colors py-2"
                        >
                            Formations
                        </button>
                        <button 
                            onClick={() => handleNavigation('applications')} 
                            className="block w-full text-left text-lg font-medium text-gray-700 hover:text-[#FF2600] transition-colors py-2"
                        >
                            Applications
                        </button>
                        <button 
                            onClick={() => handleNavigation('blog')} 
                            className="block w-full text-left text-lg font-medium text-gray-700 hover:text-[#FF2600] transition-colors py-2"
                        >
                            Blog
                        </button>
                    </nav>
                </div>

                {/* Footer Actions */}
                <div className="p-6 border-t border-gray-200 space-y-4">
                    <button className="w-full px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                        PRENDRE UN RENDEZ VOUS
                    </button>
                    <div className="flex items-center justify-center space-x-2">
                        <span className="text-sm">🇫🇷</span>
                        <span className="text-sm font-medium text-gray-700">FR</span>
                    </div>
                </div>
            </div>
        </motion.div>
        </>
    )
}

export default FixedAppBar