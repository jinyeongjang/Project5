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
    <div className="absolute top-full ml-[450px] mt-[5px] w-[350px] origin-top -translate-x-1/2 scale-100 rounded-xl bg-white py-2 text-black opacity-100 shadow-lg transition-all duration-300 ease-in-out xs:hidden">
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-4 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500">
        <h3 className="mb-4 ml-2 text-left text-lg font-bold text-sky-700">토스페이먼츠 단말기 제품</h3>
        <div className="grid grid-cols-1 gap-3 pb-4">
          {tossProducts.map((item) => (
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

export default SubMenuTossTerminals;
