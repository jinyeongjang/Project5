import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTools } from 'react-icons/fa';
import Modal from '../Modal';
import CategoryFilter from './CategoryFilter';

interface SubMenuWireandWirelessProps {
  isVisible: boolean;
  toggleMenu?: () => void;
}

const SubMenuWireandWireless: React.FC<SubMenuWireandWirelessProps> = ({ isVisible, toggleMenu }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleComingSoonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const wireandwirelessProducts = [
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

  if (!isVisible) return null;

  const filteredProducts = wireandwirelessProducts.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory,
  );

  return (
    <>
      <div className="absolute top-full ml-[530px] mt-[5px] w-[350px] origin-top -translate-x-1/2 scale-100 rounded-xl bg-white py-2 text-black opacity-100 shadow-lg transition-all duration-300 ease-in-out xs:hidden">
        <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-4 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500">
          <h3 className="mb-4 ml-2 text-left text-lg font-bold text-sky-700">유·무선카드단말기 제품</h3>
          <div className="mb-4 rounded-xl bg-gray-50 p-3 shadow-sm">
            <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
          </div>
          <div className="grid grid-cols-1 gap-3 pb-4">
            {filteredProducts.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="transform transition-all duration-200">
                <div className="relative">
                  {item.isComingSoon && (
                    <div className="absolute -top-2 left-2 z-10 flex items-center gap-1 rounded-full border bg-yellow-100 px-2 py-0.5 text-xs text-yellow-800">
                      <FaTools className="text-sm" />
                      <span>상세페이지 준비중</span>
                    </div>
                  )}
                  <Link
                    to={item.path}
                    className="group block rounded-xl transition-all duration-200 ease-in-out hover:translate-x-1 hover:bg-gray-100 hover:shadow-md"
                    onClick={item.isComingSoon ? handleComingSoonClick : toggleMenu}>
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
                        <span className="text-gray-800">{item.title}</span>
                      </div>
                      <div className="mt-2 space-y-1 pl-1">
                        <p className="text-left text-[13px] text-gray-600">{item.description}</p>
                        <p className="text-left text-[13px] text-gray-500">{item.subDescription}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

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
    </>
  );
};

export default SubMenuWireandWireless;
