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
      description: '완벽한 사용성과 신뢰성',
      subDescription: '프리미엄 키오스크의 대표주자',
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
      description: '다양한 매장에서의',
      subDescription: '성공적인 설치 사례',
      image: '/images/kiosk/kisandroidkiosk/apos15.6inch1.png',
      category: 'kiosk',
    },
    {
      title: 'KIS 키오스크 21.5인치',
      path: '/kiosk/kisandroidInfo21.5inchInfo',
      description: '다양한 매장에서의',
      subDescription: '성공적인 설치 사례',
      image: '/images/kiosk/kisandroidkiosk/apos21.5inch2.png',
      category: 'kiosk',
    },
    {
      title: 'E200K',
      path: '/kiosk/kioskE200Info',
      description: '다양한 매장에서의',
      subDescription: '성공적인 설치 사례',
      image: '/images/kiosk/E200/E200.png',
      category: 'kiosk',
    },
    {
      title: 'T6B',
      path: '/kiosk/kioskbarrierfreeT6BInfo',
      description: '사양은 착하게 가격은 더 착하게',
      subDescription: '장애인을 위한 접근성 보장: 베리어프리 키오스크',
      image: '/images/barrierfree_kiosk/T6B/barrierfree_T6B.png',
      category: 'barrierfree',
    },
    {
      title: '3/24 출시-MAZIC',
      path: '/kiosk/KioskbarrierfreemazicInfo',
      description: '사양은 착하게 가격은 더 착하게',
      subDescription: '장애인을 위한 접근성 보장: 베리어프리 키오스크',
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
    <div className="absolute top-full ml-[550px] mt-[5px] w-[330px] origin-top -translate-x-1/2 scale-100 rounded-xl bg-white py-2 text-black opacity-100 shadow-lg transition-all duration-300 ease-in-out xs:hidden">
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-4 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500">
        <h3 className="mb-4 text-lg font-bold">키오스크 제품</h3>
        <CategoryFilter onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />
        {filteredProducts.map((item) => (
          <motion.div key={item.path} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              key={item.path}
              to={item.path}
              className={`block transform rounded-xl px-4 py-3 text-[14px] transition-all duration-200 ease-in-out hover:translate-x-1 hover:bg-gray-200 ${
                item.category === 'barrierfree' && selectedCategory === 'barrierfree' ? '' : ''
              }`}
              onClick={toggleMenu}>
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SubMenuKiosk;
