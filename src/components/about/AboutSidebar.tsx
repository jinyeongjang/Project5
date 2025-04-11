import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AboutSidebar: React.FC = () => {
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
      title: '회사 소개',
      path: '/about',
      description: '고객의 성장을 최고의 가치로',
      subDescription: '생각하는 기업',
    },
    {
      title: '기술 혁신',
      path: '/about/tech-innovation',
      description: '키오스크를 통한',
      subDescription: '멀티방 룸 제어 프로그램개발',
    },
    {
      title: '고객 서비스',
      path: '/about/customer-service',
      description: '고객의 니즈를 파악하여',
      subDescription: '합리적인 시스템 제공',
    },
    {
      title: '협력 파트너',
      path: '/about/partnership',
      description: '로비스 OKPOS POSBANK',
      subDescription: 'KOVAN SMATRO KORPAY KIS',
    },
  ];

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed left-4 top-[50px] hidden h-[50px] w-[calc(100%-2rem)] rounded-xl bg-sky-700 px-4 py-2 text-white shadow-xl active:bg-sky-800 xs:block">
        <div className="flex items-center justify-center gap-2">
          <span>회사 소개 메뉴</span>
        </div>
      </button>
      <div
        className={`fixed top-[120px] w-[300px] border-r px-4 py-4 xs:fixed xs:left-0 xs:top-[120px] xs:z-10 xs:mt-[-20px] xs:h-[900px] xs:w-full xs:bg-white xs:shadow-md ${
          isMenuOpen ? 'xs:block' : 'xs:hidden'
        }`}>
        <nav className="grid gap-2 space-y-0 xs:max-h-[calc(100vh-150px)] xs:overflow-y-auto">
          <div className="grid grid-cols-1 gap-2 xs:mb-[150px] xs:grid-cols-1 xs:gap-2">
            {menuItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  onClick={handleMenuItemClick}
                  className={`group block transform rounded-xl px-4 py-3 transition-all duration-200 ease-in-out hover:translate-x-1 ${
                    location.pathname === item.path ? 'bg-slate-500 text-white' : 'hover:bg-gray-200'
                  }`}>
                  <div className="flex items-center text-left font-semibold">{item.title}</div>
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

export default AboutSidebar;
