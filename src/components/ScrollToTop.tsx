import React from 'react';
import { IoArrowUpOutline } from 'react-icons/io5';

const ScrollToTop: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-[80px] right-3 z-50 rounded-full bg-orange-500 p-3 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-orange-700 active:scale-95 xs:bottom-[80px] xs:right-3 xs:p-3"
      aria-label="Scroll to top">
      <IoArrowUpOutline className="h-6 w-6 xs:h-6 xs:w-6" />
    </button>
  );
};

export default ScrollToTop;
