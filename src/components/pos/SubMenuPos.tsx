import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface SubMenuPosProps {
  isVisible: boolean;
  toggleMenu?: () => void;
}

const SubMenuPos: React.FC<SubMenuPosProps> = ({ isVisible, toggleMenu }) => {
  const posProducts = [
    {
      title: 'ZED-II',
      path: '/pos/okposInfo',
      image: '/images/pos/okpos-zed-II/ZED-II-2.png',
      description: '지금까지와 다른 성능과 디자인,',
      subDescription: '그리고 완벽한 퍼포먼스',
    },
    {
      title: 'POSBANK APEXA X',
      path: '/pos/posbankInfo',
      image: '/images/pos/posbank/apexa.png',
      description: 'pos의 기본에 충실하다',
      subDescription: '',
    },
    {
      title: 'ARC POS ',
      path: '/pos/ArcPosInfo',
      description: '강력한 성능과 편리함',
      subDescription: '최적화된 POS 시스템',
      image: '/images/pos/arcpos/arcposdetail1.png',
    },
    {
      title: 'E250P ',
      path: '/pos/E250PInfo',
      description: '강력한 성능과 편리함',
      subDescription: '최적화된 POS 시스템',
      image: '/images/pos/E250P/E250P-1.png',
    },
  ];

  if (!isVisible) return null;

  return (
    <div className="absolute top-full ml-[480px] mt-[5px] w-[300px] origin-top -translate-x-1/2 scale-100 rounded-xl bg-white py-2 text-black opacity-100 shadow-lg transition-all duration-300 ease-in-out xs:hidden">
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-4 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500">
        <h3 className="mb-4 text-lg font-bold">POS 제품</h3>
        {posProducts.map((item) => (
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

export default SubMenuPos;
