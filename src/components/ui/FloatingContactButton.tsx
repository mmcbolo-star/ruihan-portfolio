'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function FloatingContactButton() {
  const { scrollY } = useScroll();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      {/* 联系我按钮 - 固定在右下角 */}
      <motion.a
        href="#contact"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-creative-purple via-creative-pink to-primary-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
      >
        <FaEnvelope className="text-lg" />
        <span className="text-sm">联系我 / Contact</span>
      </motion.a>

      {/* 返回顶部按钮 - 滚动超过500px后显示 */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
            title="返回顶部 / Back to Top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
