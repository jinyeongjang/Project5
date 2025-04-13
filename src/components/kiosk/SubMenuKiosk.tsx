import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CategoryFilter from '../kiosk/CategoryFilter';

interface SubMenuKioskProps {
  isVisible: boolean;
  toggleMenu?: () => void;
}

const SubMenuKiosk: React.FC<SubMenuKioskProps> = ({ isVisible, toggleMenu }) => {
  const kioskProducts = [
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
      title: 'KIS 키오스크 15.6인치',
      path: '/kiosk/kisandroidInfo15.6inchInfo',
      description: '안드로이드 기반',
      subDescription: '스마트 키오스크',
      image: '/images/kiosk/kisandroidkiosk/apos15.6inch1.png',
      category: 'kiosk',
    },
    {
      title: 'KIS 키오스크 21.5인치',
      path: '/kiosk/kisandroidInfo21.5inchInfo',
      description: '안드로이드 기반',
      subDescription: '스마트 키오스크',
      image: '/images/kiosk/kisandroidkiosk/apos21.5inch2.png',
      category: 'kiosk',
    },
    {
      title: 'E200K',
      path: '/kiosk/kioskE200Info',
      description: '안드로이드 기반',
      subDescription: '스마트 키오스크',
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

  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  if (!isVisible) return null;

  const filteredProducts = kioskProducts.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory,
  );

  return (
    <div className="absolute top-full ml-[550px] mt-[5px] w-[350px] origin-top -translate-x-1/2 scale-100 rounded-xl bg-white py-2 text-black opacity-100 shadow-lg transition-all duration-300 ease-in-out xs:hidden">
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-4 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500">
        <h3 className="mb-4 ml-2 text-left text-lg font-bold text-sky-700">키오스크 제품</h3>
        <div className="mb-4 rounded-xl bg-gray-50 p-3 shadow-sm">
          <CategoryFilter onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />
        </div>
        <div className="grid grid-cols-1 gap-3 pb-4">
          {filteredProducts.map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="transform transition-all duration-200">
              <Link
                to={item.path}
                className="group block rounded-xl transition-all duration-200 ease-in-out hover:translate-x-1 hover:bg-gray-100 hover:shadow-md"
                onClick={toggleMenu}>
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubMenuKiosk;
