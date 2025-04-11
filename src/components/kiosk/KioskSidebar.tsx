import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LuListPlus } from 'react-icons/lu';
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

  // 카테고리 변경 핸들러
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const menuItems = [
    // {
    //   title: '키오스크 소개',
    //   path: '/kiosk-introduce',
    //   description: '업종과 매장 상황에 따른',
    //   subDescription: '맞춤형 제품',
    // },
    {
      title: 'OKPOS 키오스크',
      path: '/kiosk/okposInfo',
      description: '강력한 성능은 기본!',
      subDescription: '더 슬림해진 고성능 키오스크',
      image: '/images/kiosk/okpos/okposK2-1.jpg',
    },
    {
      title: '아임유 T6',
      path: '/kiosk/iamuInfo',
      description: '혁신적인 디자인과',
      subDescription: '직관적인 사용자 경험',
      image: '/images/kiosk/iamu/iamu.png',
    },
    {
      title: '포스뱅크 빅포스',
      path: '/kiosk/posbankInfo',
      description: '최신 고성능 프로세서를',
      subDescription: '탑재한 키오스크',
      image: '/images/kiosk/posbank/posbankbigpos.png',
    },
    {
      title: 'KIS 안드로이드 키오스크 15.6인치',
      path: '/kiosk/kisandroidInfo15.6inchInfo',
      description: '안드로이드 기반',
      subDescription: '스마트 키오스크',
      image: '/images/kiosk/kisandroidkiosk/apos15.6inch1.png',
    },
    {
      title: 'KIS 안드로이드 키오스크 21.5인치',
      path: '/kiosk/kisandroidInfo21.5inchInfo',
      description: '안드로이드 기반',
      subDescription: '스마트 키오스크',
      image: '/images/kiosk/kisandroidkiosk/apos21.5inch2.png',
    },
    {
      title: 'E200K',
      path: '/kiosk/kioskE200Info',
      description: '강력한 성능은 기본!',
      subDescription: '더 슬림해진 고성능 키오스크',
      image: '/images/kiosk/E200/E200.png',
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

  // 선택된 카테고리에 따른 필터링된 메뉴 아이템
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
        className="fixed left-4 top-[72px] z-10 hidden h-[50px] w-[calc(100%-2rem)] rounded-xl bg-sky-700 px-4 py-2 text-white shadow-xl active:bg-sky-800 xs:z-30 xs:block">
        <div className="flex items-center justify-center gap-2">
          <LuListPlus className="text-2xl" />
          <span>키오스크 제품군 선택하기</span>
        </div>
      </button>
      <div
        className={`fixed top-[120px] h-[calc(100vh-120px)] w-[300px] border-r px-4 py-4 xs:fixed xs:left-0 xs:top-[120px] xs:z-[5] xs:mt-[20px] xs:h-[calc(100vh-120px)] xs:w-full xs:bg-white ${
          isMenuOpen ? 'xs:block' : 'xs:hidden'
        }`}>
        <h3 className="mb-4 ml-4 text-left text-lg font-bold">키오스크 시스템 ::</h3>
        <CategoryFilter onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />
        <nav className="h-[calc(100vh-250px)] overflow-y-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500">
          <div className="grid grid-cols-1 gap-2 pb-[150px]">
            {filteredMenuItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  onClick={handleMenuItemClick}
                  className={`block transform rounded-xl px-4 py-3 transition-all duration-200 ease-in-out hover:translate-x-1 ${
                    location.pathname === item.path ? 'bg-slate-500 text-white' : 'hover:bg-gray-200'
                  } ${item.category === 'barrierfree' && selectedCategory === 'barrierfree' ? 'border-l-4 border-green-600' : ''}`}>
                  <div className="flex items-center text-left font-semibold">
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
                    <p
                      className={`text-left text-sm ${location.pathname === item.path ? 'text-white' : 'text-gray-600'}`}>
                      {item.description}
                    </p>
                    <p
                      className={`text-left text-sm ${location.pathname === item.path ? 'text-white' : 'text-gray-500'}`}>
                      {item.subDescription}
                    </p>
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

export default KioskSidebar;
