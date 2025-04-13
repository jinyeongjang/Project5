import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LuListPlus } from 'react-icons/lu';
import { IoIosClose } from 'react-icons/io';
import { motion } from 'framer-motion';
import CategoryFilter from './CategoryFilter';

const KioskSidebar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    scrollToTop();
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const menuItems = [
    {
      title: 'OKPOS 키오스크',
      path: '/kiosk/okposInfo',
      description: '강력한 성능은 기본!',
      subDescription: '더 슬림해진 고성능 키오스크',
      image: '/images/kiosk/okpos/okposK2-1.jpg',
      category: 'kiosk',
    },
    {
      title: '아임유 T6',
      path: '/kiosk/iamuInfo',
      description: '혁신적인 디자인과',
      subDescription: '직관적인 사용자 경험',
      image: '/images/kiosk/iamu/iamu.png',
      category: 'kiosk',
    },
    {
      title: '포스뱅크 빅포스',
      path: '/kiosk/posbankInfo',
      description: '최신 고성능 프로세서를',
      subDescription: '탑재한 키오스크',
      image: '/images/kiosk/posbank/posbankbigpos.png',
      category: 'kiosk',
    },
    {
      title: 'KIS 안드로이드 키오스크 15.6인치',
      path: '/kiosk/kisandroidInfo15.6inchInfo',
      description: '안드로이드 기반',
      subDescription: '스마트 키오스크',
      image: '/images/kiosk/kisandroidkiosk/apos15.6inch1.png',
      category: 'kiosk',
    },
    {
      title: 'KIS 안드로이드 키오스크 21.5인치',
      path: '/kiosk/kisandroidInfo21.5inchInfo',
      description: '안드로이드 기반',
      subDescription: '스마트 키오스크',
      image: '/images/kiosk/kisandroidkiosk/apos21.5inch2.png',
      category: 'kiosk',
    },
    {
      title: 'E200K',
      path: '/kiosk/kioskE200Info',
      description: '강력한 성능은 기본!',
      subDescription: '더 슬림해진 고성능 키오스크',
      image: '/images/kiosk/E200/E200.png',
      category: 'kiosk',
    },
    {
      title: 'KIS 안드로이드 미니포스',
      path: '/kiosk/kisandroidminiposInfo',
      description: '안드로이드 기반',
      subDescription: '스마트 키오스크',
      image: '/images/kiosk/androidminipos/minipos_main.png',
      category: 'kiosk',
    },
    {
      title: 'T6B',
      path: '/kiosk/kioskbarrierfreeT6BInfo',
      description: '사양은 착하게 가격은 더 착하게',
      subDescription: '아임유 베리어프리 키오스크',
      image: '/images/barrierfree_kiosk/T6B/barrierfree_T6B.png',
      category: 'barrierfree',
    },
    {
      title: '3/24 출시-MAZIC',
      path: '/kiosk/KioskbarrierfreemazicInfo',
      description: '사양은 착하게 가격은 더 착하게',
      subDescription: '오케이포스 베리어프리 키오스크',
      image: '/images/barrierfree_kiosk/MAZIC/mazic.png',
      category: 'barrierfree',
    },
  ];

  const filteredMenuItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return menuItems;
    }
    return menuItems.filter((item) => item.category === selectedCategory || !item.category);
  }, [selectedCategory]);

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed left-4 top-[63px] z-10 hidden h-[50px] w-[calc(100%-2rem)] rounded-xl bg-gradient-to-r from-sky-700 to-blue-600 px-4 py-2 text-white shadow-xl transition-all duration-300 hover:from-sky-800 hover:to-blue-700 active:bg-sky-800 xs:z-30 xs:block">
        <div className="flex items-center justify-center gap-2">
          <LuListPlus className="text-2xl" />
          <span>키오스크 제품군 선택하기</span>
        </div>
      </button>

      <div
        className={`fixed top-[120px] h-[calc(100vh-120px)] w-[300px] rounded-xl border-r border-gray-200 bg-white px-4 py-4 shadow-lg transition-all duration-300 ease-in-out xs:fixed xs:left-0 xs:top-[120px] xs:z-[40] xs:mt-[20px] xs:h-[calc(100vh-120px)] xs:w-full ${
          isMenuOpen ? 'xs:translate-x-0' : 'xs:-translate-x-full'
        }`}>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="ml-4 text-left text-lg font-bold text-sky-700">키오스크 시스템 ::</h3>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="hidden rounded-full bg-gray-200 p-1 text-gray-600 hover:bg-gray-300 xs:block">
            <IoIosClose size={24} />
          </button>
        </div>

        <div className="mb-6 rounded-xl bg-gray-50 p-3 shadow-sm">
          <CategoryFilter onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />
        </div>

        <nav className="h-[calc(100vh-280px)] overflow-y-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500">
          <div className="grid grid-cols-1 gap-3 pb-[150px]">
            {filteredMenuItems.map((item) => (
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
                        className={`text-left text-[13px] ${location.pathname === item.path ? 'text-white' : 'text-gray-600'}`}>
                        {item.description}
                      </p>
                      <p
                        className={`text-left text-[13px] ${location.pathname === item.path ? 'text-white/80' : 'text-gray-500'}`}>
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

export default KioskSidebar;
