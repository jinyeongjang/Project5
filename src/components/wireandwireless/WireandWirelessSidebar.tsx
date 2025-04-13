import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LuListPlus } from 'react-icons/lu';
import { FaTools } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import { motion } from 'framer-motion';
import CategoryFilter from './CategoryFilter';
import Modal from '../Modal';

const WireandWirelessSidebar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    scrollToTop();
  };

  const handleComingSoonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const menuItems = [
    {
      title: '[유선] 2인치 KIS-1030',
      path: '/wire/WireKIS1030Info',
      description: '안정적인 결제를 위한',
      subDescription: '유선 단말기',
      image: '/images/wire/2inch/KIS-1030/1030_main.png',
      isComingSoon: false,
      category: 'wire',
    },

    {
      title: '[유선] 2인치 KIS-2200',
      path: '/wire/WireKIS2200Info',
      description: '안정적인 결제를 위한',
      subDescription: '유선 단말기',
      image: '/images/wire/2inch/KIS-2200/2200_main1.png',
      isComingSoon: false,
      category: 'wire',
    },

    {
      title: '[유선] 2인치 KIS-2210Q',
      path: '/wire/WireKIS2210QInfo',
      description: '안정적인 결제를 위한',
      subDescription: '유선 단말기',
      image: '/images/wire/2inch/KIS-2210Q/2210Q_main1.png',
      isComingSoon: false,
      category: 'wire',
    },

    {
      title: '[유선] 3인치 KIS-1421P',
      path: '/wire/WireKIS1421PInfo',
      description: '안정적인 결제를 위한',
      subDescription: '유선 단말기',
      image: '/images/wire/3inch/KIS-1421P/1421P_main.png',
      isComingSoon: false,
      category: 'wire',
    },

    {
      title: '[유선] 3인치 KIS-2420',
      path: '/wire/WireKIS2420Info',
      description: '안정적인 결제를 위한',
      subDescription: '유선 단말기',
      image: '/images/wire/3inch/KIS-2420/2420_main1.png',
      isComingSoon: false,
      category: 'wire',
    },

    {
      title: '[유선] 3인치 NPC-1000',
      path: '/wire/WireNPC1000Info',
      description: '안정적인 결제를 위한',
      subDescription: '유선 단말기',
      image: '/images/wire/3inch/NPC-1000/1000_main1.png',
      isComingSoon: false,
      category: 'wire',
    },

    {
      title: '[유선] LC-7401S',
      path: '/wire/WireLC7401SInfo',
      description: '안정적인 결제를 위한',
      subDescription: '유선 단말기',
      image: '/images/wire/LC-7401S/7401_01.png',
      isComingSoon: false,
      category: 'wire',
    },
    {
      title: '[유선] LC-7403S',
      path: '/wire/WireLC7403SInfo',
      description: '안정적인 결제를 위한',
      subDescription: '유선 단말기',
      image: '/images/wire/LC-7403S/LC-7403S-1.png',
      isComingSoon: false,
      category: 'wire',
    },
    {
      title: '[유선] LC-7602SS',
      path: '/wire/WireLC7602SInfo',
      description: '안정적인 결제를 위한',
      subDescription: '유선 단말기',
      image: '/images/wire/LC-7602S/7602_01.png',
      isComingSoon: false,
      category: 'wire',
    },
    {
      title: '[무선] LC-7211S',
      path: '/wireless/WirelessLC7211SInfo',
      description: '이동이 자유로운',
      subDescription: '무선 단말기',
      image: '/images/wireless/LC-7211S/7211_01.png',
      isComingSoon: false,
      category: 'wireless',
    },
    {
      title: '[무선] LC-7311S',
      path: '/wireless/WirelessLC7311SInfo',
      description: '이동이 자유로운',
      subDescription: '무선 단말기',
      image: '/images/wireless/LC-7311S/LC-7311S-1.png',
      isComingSoon: false,
      category: 'wireless',
    },
    {
      title: '[무선] SM7701S',
      path: '/wireless/WirelessSM7701SInfo',
      description: '이동이 자유로운',
      subDescription: '무선 단말기',
      image: '/images/wireless/SM7701S/7701_01.png',
      isComingSoon: false,
      category: 'wireless',
    },
    {
      title: '[모바일시스템] CBP-3000',
      path: '/mobilesystem/MobileCBP3000Info',
      description: '이동이 자유로운',
      subDescription: '모바일 시스템',
      image: '/images/mobilesystem/CBP-3000/CBP-3000_01.png',
      isComingSoon: false,
      category: 'mobile',
    },
    {
      title: '[모바일시스템] CBP-3100',
      path: '/mobilesystem/MobileCBP3100Info',
      description: '이동이 자유로운',
      subDescription: '모바일 시스템',
      image: '/images/mobilesystem/CBP-3100/CBP-3100_01.png',
      isComingSoon: false,
      category: 'mobile',
    },
    {
      title: '[모바일시스템] CBR-3000',
      path: '/mobilesystem/MobileCBR3000Info',
      description: '이동이 자유로운',
      subDescription: '모바일 시스템',
      image: '/images/mobilesystem/CBR-3000/CBR-3000_01.png',
      isComingSoon: false,
      category: 'mobile',
    },
    {
      title: '[모바일시스템] CBR-3100',
      path: '/mobilesystem/MobileCBR3100Info',
      description: '이동이 자유로운',
      subDescription: '모바일 시스템',
      image: '/images/mobilesystem/CBR-3100/CBR-3100_01.png',
      isComingSoon: false,
      category: 'mobile',
    },
  ];

  const filteredMenuItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return menuItems;
    }
    return menuItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="안내">
        <div className="flex flex-col items-center">
          <p className="mb-4 text-lg">현재 제품 상세 페이지를 준비중입니다.</p>
          <button
            onClick={() => setIsModalOpen(false)}
            className="w-[300px] rounded-xl bg-gradient-to-r from-sky-600 to-blue-500 px-4 py-2 text-white transition-all duration-300 hover:from-sky-700 hover:to-blue-600 active:translate-y-0.5">
            확인
          </button>
        </div>
      </Modal>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed left-4 top-[63px] z-10 hidden h-[50px] w-[calc(100%-2rem)] rounded-xl bg-gradient-to-r from-sky-700 to-blue-600 px-4 py-2 text-white shadow-xl transition-all duration-300 hover:from-sky-800 hover:to-blue-700 active:bg-sky-800 xs:z-30 xs:block">
        <div className="flex items-center justify-center gap-2">
          <LuListPlus className="text-2xl" />
          <span>유·무선카드단말 제품군 선택하기</span>
        </div>
      </button>

      <div
        className={`fixed top-[120px] h-[calc(100vh-120px)] w-[300px] rounded-xl border-r border-gray-200 bg-white px-4 py-4 shadow-lg transition-all duration-300 ease-in-out xs:fixed xs:left-0 xs:top-[120px] xs:z-[40] xs:mt-[20px] xs:h-[calc(100vh-120px)] xs:w-full ${
          isMenuOpen ? 'xs:translate-x-0' : 'xs:-translate-x-full'
        }`}>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="ml-4 text-left text-lg font-bold text-sky-700">유·무선카드단말기 ::</h3>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="hidden rounded-full bg-gray-200 p-1 text-gray-600 hover:bg-gray-300 xs:block">
            <IoIosClose size={24} />
          </button>
        </div>

        <div className="mb-6 rounded-xl bg-gray-50 p-3 shadow-sm">
          <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
        </div>

        <nav className="h-[calc(100vh-280px)] overflow-y-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500">
          <div className="grid grid-cols-1 gap-3 pb-[150px]">
            {filteredMenuItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="transform transition-all duration-200">
                {item.isComingSoon && (
                  <div className="absolute -top-2 left-2 z-10 flex items-center gap-1 rounded-full border bg-yellow-100 px-2 py-0.5 text-xs text-yellow-800">
                    <FaTools className="text-sm" />
                    <span>상세페이지 준비중</span>
                  </div>
                )}
                <Link
                  to={item.path}
                  onClick={item.isComingSoon ? handleComingSoonClick : handleMenuItemClick}
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

export default WireandWirelessSidebar;
