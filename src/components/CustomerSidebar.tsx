import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LuListPlus } from 'react-icons/lu';

const CustomerSidebar: React.FC = () => {
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
      title: '고객센터',
      path: '/customer-support',
      description: '고객님의 편의를 위한',
      subDescription: '고객센터 안내',
    },
    {
      title: '공지사항',
      path: '/customer-support/notice',
      description: '다양한 이벤트와',
      subDescription: '혜택을 확인하세요',
    },
    {
      title: '자주묻는질문',
      path: '/customer-support/faq',
      description: '중요한 안내와',
      subDescription: '업데이트 소식',
    },
    {
      title: '이벤트',
      path: '/customer-support/event',
      description: '자주 문의하시는',
      subDescription: '질문과 답변',
    },
    {
      title: '문의하기',
      path: '/customer-support/inquiry',
      description: '무엇이든 물어보세요',
      subDescription: '신속하게 답변드립니다',
    },
  ];

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed left-4 top-[70px] z-10 hidden h-[50px] w-[calc(100%-2rem)] rounded-xl bg-sky-700 px-4 py-2 text-white shadow-xl active:bg-sky-800 xs:block">
        <div className="flex items-center justify-center gap-2">
          <LuListPlus className="text-2xl" />
          <span>고객지원 메뉴</span>
        </div>
      </button>
      <div
        className={`fixed top-[140px] w-[300px] border-r bg-white px-4 py-4 xs:fixed xs:left-0 xs:top-[120px] xs:z-10 xs:mt-[0px] xs:w-full xs:shadow-md ${
          isMenuOpen ? 'xs:block' : 'xs:hidden'
        }`}>
        <h3 className="mb-4 ml-4 text-left text-lg font-bold">고객지원 ::</h3>
        <nav className="grid gap-2 space-y-0">
          {menuItems.map((item) => (
            <div key={item.path}>
              <Link
                to={item.path}
                onClick={handleMenuItemClick}
                className={`block transform rounded-xl px-4 py-3 transition-all duration-200 ease-in-out hover:translate-x-1 ${
                  location.pathname === item.path ? 'bg-slate-500 text-white' : 'hover:bg-gray-200'
                }`}>
                <div className="flex items-center font-semibold">{item.title}</div>
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
        </nav>
      </div>
    </>
  );
};

export default CustomerSidebar;
