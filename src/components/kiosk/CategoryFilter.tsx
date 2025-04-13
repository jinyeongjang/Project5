import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdDevices } from 'react-icons/md';
import { FaUniversalAccess } from 'react-icons/fa';
import { HiViewGrid } from 'react-icons/hi';
import Modal from '../Modal';

interface CategoryFilterProps {
  onCategoryChange: (category: string) => void;
  selectedCategory: string; // 현재 선택된 카테고리를 props로 받음
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ onCategoryChange, selectedCategory }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const categories = [
    {
      id: 'all',
      label: '전체',
      icon: <HiViewGrid />,
      description: '모든 키오스크',
    },
    {
      id: 'kiosk',
      label: '키오스크',
      icon: <MdDevices />,
      description: '일반 키오스크',
    },
    {
      id: 'barrierfree',
      label: '베리어프리',
      icon: <FaUniversalAccess />,
      description: '베리어프리 키오스크',
    },
  ];

  const handleCategoryChange = (category: string) => {
    onCategoryChange(category);
  };

  return (
    <motion.div
      className="mb-4 grid w-full grid-cols-2 gap-2 text-center"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => handleCategoryChange(category.id)}
          className={`flex flex-col items-center justify-center rounded-xl p-2 ${
            selectedCategory === category.id
              ? 'bg-gradient-to-r from-sky-600 to-blue-500 text-white shadow-md'
              : 'bg-white text-gray-700 shadow-sm hover:bg-gray-50 hover:shadow'
          }`}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          title={category.description}>
          <span className="mb-1 text-2xl">{category.icon}</span>
          <span className="text-sm font-medium leading-tight">{category.label}</span>
        </motion.button>
      ))}

      {isModalVisible && (
        <Modal isOpen={isModalVisible} onClose={() => setModalVisible(false)} title="알림">
          <div className="flex flex-col items-center">
            <p className="mb-4 text-lg">베리어프리는 현재 지원준비중입니다.</p>
            <button
              onClick={() => setModalVisible(false)}
              className="w-[300px] rounded-xl bg-gradient-to-r from-sky-600 to-blue-500 px-4 py-2 text-white transition-all duration-300 hover:from-sky-700 hover:to-blue-600 active:translate-y-0.5">
              확인
            </button>
          </div>
        </Modal>
      )}
    </motion.div>
  );
};

export default CategoryFilter;
