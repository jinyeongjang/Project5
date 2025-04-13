import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LuListPlus } from 'react-icons/lu';
import { IoIosClose } from 'react-icons/io';
import { motion } from 'framer-motion';

const PosSidebar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    scrollToTop();
  };

  const menuItems = [
    {
      title: 'OK POS ZED-II',
      path: '/pos/okposInfo',
      image: '/images/pos/okpos-zed-II/ZED-II-2.png',
      description: '지금까지와 다른 성능과 디자인,',
      subDescription: '그리고 완벽한 퍼포먼스',
    },
    {
      title: 'POSBANK APEXA X',
      path: '/pos/posbankInfo',
      description: '강력한 성능과 편리함',
      subDescription: '최적화된 POS 시스템',
      image: '/images/pos/posbank/apexa.png',
    },
    {
      title: 'ARC POS ',
      path: '/pos/ArcPosInfo',
      description: '강력한 성능과 편리함',
      subDescription: '최적화된 POS 시스템',
      image: '/images/pos/arcpos/arcposdetail1.png',
    },
    {
      title: 'E250P ',
      path: '/pos/E250PInfo',
      description: '강력한 성능과 편리함',
      subDescription: '최적화된 POS 시스템',
      image: '/images/pos/E250P/E250P-1.png',
    },
  ];

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed left-4 top-[63px] z-10 hidden h-[50px] w-[calc(100%-2rem)] rounded-xl bg-gradient-to-r from-sky-700 to-blue-600 px-4 py-2 text-white shadow-xl transition-all duration-300 hover:from-sky-800 hover:to-blue-700 active:bg-sky-800 xs:z-30 xs:block">
        <div className="flex items-center justify-center gap-2">
          <LuListPlus className="text-2xl" />
          <span>POS 제품군 선택하기</span>
        </div>
      </button>
      <div
        className={`fixed top-[120px] h-[calc(100vh-120px)] w-[300px] rounded-xl border-r border-gray-200 bg-white px-4 py-4 shadow-lg transition-all duration-300 ease-in-out xs:fixed xs:left-0 xs:top-[120px] xs:z-[40] xs:mt-[20px] xs:h-[calc(100vh-120px)] xs:w-full ${
          isMenuOpen ? 'xs:translate-x-0' : 'xs:-translate-x-full'
        }`}>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="ml-4 text-left text-lg font-bold text-sky-700">POS 시스템 ::</h3>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="hidden rounded-full bg-gray-200 p-1 text-gray-600 hover:bg-gray-300 xs:block">
            <IoIosClose size={24} />
          </button>
        </div>

        <nav className="h-[calc(100vh-280px)] overflow-y-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500">
          <div className="grid grid-cols-1 gap-3 pb-[150px]">
            {menuItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="transform transition-all duration-200">
                <Link
                  to={item.path}
                  onClick={handleMenuItemClick}
                  className={`group block rounded-xl transition-all duration-200 ease-in-out hover:translate-x-1 ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-sky-600 to-blue-500 text-white shadow-md'
                      : 'hover:bg-gray-100 hover:shadow-md'
                  }`}>
                  <div className="px-4 py-3">
                    <div className="flex items-center text-left font-semibold">
                      {item.image && (
                        <div className="mr-3 overflow-hidden rounded-lg bg-white p-1 shadow-sm">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-12 w-12 object-contain text-left transition-transform duration-200 group-hover:scale-110"
                          />
                        </div>
                      )}
                      <span className={`${location.pathname === item.path ? '' : 'text-gray-800'}`}>{item.title}</span>
                    </div>
                    <div className="mt-2 space-y-1 pl-1">
                      <p
                        className={`text-left text-[13px] ${
                          location.pathname === item.path ? 'text-white' : 'text-gray-600'
                        }`}>
                        {item.description}
                      </p>
                      <p
                        className={`text-left text-[13px] ${
                          location.pathname === item.path ? 'text-white/80' : 'text-gray-500'
                        }`}>
                        {item.subDescription}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[35] hidden bg-black/50 xs:block" onClick={() => setIsMenuOpen(false)} />
      )}
    </>
  );
};

export default PosSidebar;
