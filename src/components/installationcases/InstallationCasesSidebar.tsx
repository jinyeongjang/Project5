import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LuListPlus } from 'react-icons/lu';

const InstallationCasesSidebar: React.FC = () => {
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
      title: '설치 사례',
      path: '/installation-cases',
      description: '업종과 매장 상황에 따른',
      subDescription: '맞춤형 제품',
      image: '',
    },
    {
      title: '설치 현황',
      path: '/installation-cases-gallery',
      description: '우리 지점에 설치된',
      subDescription: '매장 갤러리 입니다.',
      image: '',
    },
  ];

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed left-4 top-[100px] z-10 hidden h-[50px] w-[calc(100%-2rem)] rounded-xl bg-sky-700 px-4 py-2 text-white shadow-xl active:bg-sky-800 xs:block">
        <div className="flex items-center justify-center gap-2">
          <LuListPlus className="text-2xl" />
          <span>메뉴 선택</span>
        </div>
      </button>
      <div
        className={`fixed top-[120px] w-[300px] border-r px-4 py-4 xs:fixed xs:left-0 xs:top-[200px] xs:z-10 xs:mt-[-20px] xs:h-[900px] xs:w-full xs:bg-white xs:shadow-md ${
          isMenuOpen ? 'xs:block' : 'xs:hidden'
        }`}>
        <h3 className="mb-4 ml-4 text-left text-lg font-bold">설치 사례 및 설치 현황 ::</h3>
        <nav className="grid gap-2 space-y-0 xs:max-h-[calc(100vh-150px)] xs:overflow-y-auto">
          <div className="grid grid-cols-1 gap-2 xs:mb-[150px] xs:grid-cols-1 xs:gap-2">
            {menuItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  onClick={handleMenuItemClick}
                  className={`block transform rounded-xl px-4 py-3 transition-all duration-200 ease-in-out hover:translate-x-1 ${
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

export default InstallationCasesSidebar;
