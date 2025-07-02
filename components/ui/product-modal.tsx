"use client"

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    imageSrc: string;
    title: string;
    description: string;
    category?: string;
  };
  allProducts?: Array<{
    imageSrc: string;
    title: string;
    description: string;
    category?: string;
  }>;
  currentIndex?: number;
  onNavigate?: (direction: 'prev' | 'next') => void;
}

export function ProductModal({ 
  isOpen, 
  onClose, 
  product, 
  allProducts, 
  currentIndex = 0, 
  onNavigate 
}: ProductModalProps) {
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft' && onNavigate) {
        onNavigate('prev');
      } else if (event.key === 'ArrowRight' && onNavigate) {
        onNavigate('next');
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onNavigate]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            {allProducts && allProducts.length > 1 && onNavigate && (
              <>
                <button
                  onClick={() => onNavigate('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                  aria-label="Previous product"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={() => onNavigate('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                  aria-label="Next product"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Image Side */}
              <div className="relative bg-neutral-100 dark:bg-neutral-800">
                <img
                  src={product.imageSrc}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  style={{ minHeight: '400px' }}
                />
                
                {/* Image Counter */}
                {allProducts && allProducts.length > 1 && (
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/50 text-white text-sm rounded-full">
                    {currentIndex + 1} / {allProducts.length}
                  </div>
                )}
              </div>

              {/* Content Side */}
              <div className="p-8 flex flex-col justify-center space-y-6">
                {product.category && (
                  <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    {product.category}
                  </span>
                )}
                
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  {product.title}
                </h2>
                
                <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    Product Features
                  </h4>
                  <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Premium quality materials</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Handcrafted with attention to detail</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Perfect for any occasion</span>
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button className="flex-1 bg-gradient-to-r from-neutral-900 to-neutral-700 hover:from-neutral-800 hover:to-neutral-600 dark:from-neutral-100 dark:to-neutral-300 dark:hover:from-neutral-200 dark:hover:to-neutral-400 text-white dark:text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                    Contact for Details
                  </button>
                  <button className="flex-1 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 font-semibold px-6 py-3 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}