"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  alt: string;
  caption?: string;
}

export default function ImageModal({ isOpen, onClose, imageUrl, alt, caption }: ImageModalProps) {
  // Fermer avec la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Empêcher le scroll du body quand le modal est ouvert
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          aria-label="Fermer l'image"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Contenu du modal */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-[90vw] max-h-[90vh] mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image */}
          <div className="relative">
            <img
              src={imageUrl}
              alt={alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              loading="eager"
            />
            
            {/* Caption */}
            {caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
                <p className="text-center text-sm">{caption}</p>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white/70 text-sm text-center">
            <p>Cliquez en dehors ou appuyez sur Échap pour fermer</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
