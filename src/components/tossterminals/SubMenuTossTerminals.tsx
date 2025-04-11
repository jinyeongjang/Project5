import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface SubMenuTossTerminalsProps {
  isVisible: boolean;
  toggleMenu?: () => void;
}

const SubMenuTossTerminals: React.FC<SubMenuTossTerminalsProps> = ({ isVisible, toggleMenu }) => {
  const tossProducts = [
    // {
    //   title: '토스단말기 소개',
    //   path: '/tossterminals-introduce',
    //   description: '편리하고 안정적인',
    //   subDescription: '토스 결제 단말기',
    //   image: '',
    // },
    {
      title: '토스 프론트',
      path: '/tossterminals/tossfrontInfo',
      description: '강력한 성능과 편리함',
      subDescription: '최적화된 결제 시스템',
      image: '/images/tossfront/tossfront.png',
    },
    {
      title: '토스 터미널',
      path: '/tossterminals/tossterminalsInfo',
      description: '강력한 성능과 편리함',
      subDescription: '최적화된 결제 시스템',
      image: '/images/tossterminals/tossterminals.png',
    },
  ];

  if (!isVisible) return null;

  return (
    <div className="absolute top-full ml-[450px] mt-[5px] w-[300px] origin-top -translate-x-1/2 scale-100 rounded-xl bg-white py-2 text-black opacity-100 shadow-lg transition-all duration-300 ease-in-out xs:hidden">
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-4 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500">
        <h3 className="mb-4 text-lg font-bold">토스페이먼츠 단말기 제품</h3>
        {tossProducts.map((item) => (
          <motion.div key={item.path} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              key={item.path}
              to={item.path}
              className="block transform rounded-xl px-4 py-3 text-[14px] transition-all duration-200 ease-in-out hover:translate-x-1 hover:bg-gray-200"
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

export default SubMenuTossTerminals;
