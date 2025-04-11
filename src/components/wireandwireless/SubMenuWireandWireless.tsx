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

  return (
    <>
      <div className="absolute top-full ml-[530px] mt-[5px] w-[320px] origin-top -translate-x-1/2 scale-100 rounded-xl bg-white py-2 text-black opacity-100 shadow-lg transition-all duration-300 ease-in-out xs:hidden">
        <div className="max-h-[calc(100vh-200px)] overflow-y-auto overflow-x-hidden p-4 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500">
          <h3 className="mb-4 text-lg font-bold">유무선 단말기 제품</h3>
          <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
          {wireandwirelessProducts
            .filter((product) => {
              if (selectedCategory === 'all') return true;
              return product.category === selectedCategory;
            })
            .map((item) => (
              <motion.div key={item.path} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <div className="relative">
                  {item.isComingSoon && (
                    <div className="absolute -top-2 left-2 z-10 flex items-center gap-1 rounded-full border bg-yellow-100 px-2 py-0.5 text-xs text-yellow-800">
                      <FaTools className="text-sm" />
                      <span>상세페이지 준비중</span>
                    </div>
                  )}
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block transform rounded-xl px-4 py-3 text-[14px] transition-all duration-200 ease-in-out hover:translate-x-1 hover:bg-gray-200"
                    onClick={item.isComingSoon ? handleComingSoonClick : toggleMenu}>
                    <div className="flex items-center font-semibold">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="mr-2 h-12 w-12 object-contain text-left transition-transform duration-200 group-hover:scale-110"
                        />
                      )}
                      {item.title}
                    </div>
                    <div className="mt-1 space-y-0.5">
                      <p className="text-left text-[13px] text-sm text-gray-600">{item.description}</p>
                      <p className="text-left text-[13px] text-sm text-gray-500">{item.subDescription}</p>
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
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
    </>
  );
};

export default SubMenuWireandWireless;
