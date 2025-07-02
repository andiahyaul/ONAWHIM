"use client"

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  duration?: number;
  onComplete?: () => void;
}

export function LoadingScreen({ 
  duration = 2500,
  onComplete 
}: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, duration / 50);

    const timeout = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-white dark:bg-black"
        >
          <div className="text-center space-y-8">
            {/* Brand Logo/Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 rounded-full flex items-center justify-center shadow-2xl">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-2xl font-bold text-white dark:text-black"
                >
                  Onawhim
                </motion.span>
              </div>
              
              {/* Pulsing ring */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0.3, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full border-2 border-neutral-900/20 dark:border-neutral-100/20"
              />
            </motion.div>
            
            {/* Brand Name */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-2"
            >
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent">
                Onawhim._
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                
              </p>
            </motion.div>
            
            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="w-64 mx-auto"
            >
              <div className="h-1 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-2">
                {Math.round(progress)}%
              </p>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neutral-400 dark:bg-neutral-600 rounded-full animate-pulse" />
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-neutral-300 dark:bg-neutral-700 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-neutral-350 dark:bg-neutral-650 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}