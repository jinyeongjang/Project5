import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LuListPlus } from 'react-icons/lu';
import { FaTools } from 'react-icons/fa';
import CategoryFilter from './CategoryFilter';
import Modal from '../Modal';

const WireandWirelessSidebar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleComingSoonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const menuItems = [
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

  const filteredMenuItems = menuItems.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const sortedMenuItems = [...filteredMenuItems].sort((a, b) => {
    const order = ['wire', 'wireless', 'mobile'];
    return order.indexOf(a.category) - order.indexOf(b.category);
  });

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="안내">
        <div className="text-center">
          <p className="mb-4">현재 제품 상세 페이지를 준비중입니다.</p>
          <button
            onClick={() => setIsModalOpen(false)}
            className="w-[200px] rounded-xl bg-sky-700 px-4 py-2 text-white hover:bg-sky-800">
            확인
          </button>
        </div>
      </Modal>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed left-4 top-[72px] z-30 hidden h-[50px] w-[calc(100%-2rem)] rounded-xl bg-sky-700 px-4 py-2 text-white shadow-xl active:bg-sky-800 xs:z-30 xs:block">
        <div className="flex items-center justify-center gap-2">
          <LuListPlus className="text-2xl" />
          <span>유·무선카드단말 제품군 선택하기</span>
        </div>
      </button>
      <div
        className={`fixed top-[120px] h-[calc(100vh-120px)] w-[300px] border-r px-4 py-4 xs:fixed xs:left-0 xs:top-[120px] xs:z-[5] xs:mt-[20px] xs:h-[calc(100vh-120px)] xs:w-full xs:bg-white ${
          isMenuOpen ? 'xs:block' : 'xs:hidden'
        }`}>
        <h3 className="mb-4 ml-4 text-left text-lg font-bold">유·무선카드단말기 ::</h3>

        <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

        <nav className="h-[calc(100vh-250px)] overflow-y-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500">
          <div className="grid grid-cols-1 gap-2 pb-[150px]">
            {sortedMenuItems.map((item) => (
              <div key={item.path} className="relative">
                {item.isComingSoon && (
                  <div className="absolute -top-2 left-2 z-10 flex items-center gap-1 rounded-full border bg-yellow-100 px-2 py-0.5 text-xs text-yellow-800">
                    <FaTools className="text-sm" />
                    <span>상세페이지 준비중</span>
                  </div>
                )}
                <Link
                  to={item.path}
                  onClick={item.isComingSoon ? handleComingSoonClick : handleMenuItemClick}
                  className={`relative block transform rounded-xl px-4 py-3 transition-all duration-200 ease-in-out hover:translate-x-1 ${
                    location.pathname === item.path ? 'bg-slate-500 text-white' : 'hover:bg-gray-200'
                  }`}>
                  <div className="flex items-center text-left font-semibold">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="mr-2 h-12 w-12 object-contain text-left transition-transform duration-200 group-hover:scale-110"
                      />
                    )}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">{item.title}</div>
                      <div className="mt-1 space-y-0.5">
                        <p
                          className={`text-left text-sm ${
                            location.pathname === item.path ? 'text-white' : 'text-gray-600'
                          }`}>
                          {item.description}
                        </p>
                        <p
                          className={`text-left text-sm ${
                            location.pathname === item.path ? 'text-white' : 'text-gray-500'
                          }`}>
                          {item.subDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default WireandWirelessSidebar;
