import React from 'react';
import { Link } from 'react-router-dom';

interface SubMenuProps {
  isVisible: boolean;
  toggleMenu?: () => void;
}

const SubMenu: React.FC<SubMenuProps> = ({ isVisible, toggleMenu }) => {
  const solutionSubMenu = [
    {
      title: '기술 혁신',
      path: '/about',
      icon: '💡',
      description: '키오스크를 통한 멀티방 룸 제어 프로그램개발',
    },
    {
      title: '고객 서비스',
      path: '/about',
      icon: '🤝',
      description: '고객의 니즈를 파악하여 합리적인 시스템 제공',
    },
    {
      title: '협력 파트너',
      path: '/about',
      icon: '🤲',
      description: '로비스 OKPOS POSBANK KOVAN SMATRO KORPAY KIS 시원아이티',
    },
  ];

  if (!isVisible) return null;

  return (
    <div className="absolute top-full ml-[700px] mt-[5px] w-[400px] origin-top -translate-x-1/2 scale-100 rounded-xl bg-white py-2 text-black opacity-100 shadow-lg transition-all duration-300 ease-in-out xs:hidden">
      <div className="w-full p-4">
        <h3 className="mb-4 text-lg font-bold">카테고리</h3>
        {solutionSubMenu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="block transform rounded-xl px-4 py-3 transition-all duration-200 ease-in-out hover:translate-x-1 hover:bg-gray-200"
            onClick={toggleMenu}>
            <div className="flex items-center font-semibold">
              <span className="mr-2 transform transition-transform duration-200 group-hover:scale-110">
                {item.icon}
              </span>
              {item.title}
            </div>
            <p className="mt-1 text-left text-sm text-gray-500">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubMenu;
