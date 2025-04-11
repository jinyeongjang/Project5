import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMobile } from 'react-icons/fa';
import Modal from '../Modal';

interface CategoryFilterProps {
  onCategoryChange: (category: string) => void;
  selectedCategory: string; // 현재 선택된 카테고리를 props로 받음
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ onCategoryChange, selectedCategory }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const categories = [
    { id: 'all', label: '전체', style: 'border-2' },
    { id: 'kiosk', label: '키오스크', icon: <FaMobile />, style: 'border-2' },
    {
      id: 'barrierfree',
      label: '베리어프리',
      icon: <FaMobile />,
      style: 'border-2',
    },
  ];

  const handleCategoryChange = (category: string) => {
    onCategoryChange(category); // 부모 컴포넌트로 선택된 카테고리 전달
  };

  return (
    <motion.div
      className="mb-4 grid w-[290px] grid-cols-2 gap-2 px-4 text-left tracking-tighter"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => handleCategoryChange(category.id)}
          className={`flex h-[40px] flex-1 items-center justify-center rounded-xl px-2 py-2 tracking-tighter transition-colors duration-200 ${
            selectedCategory === category.id
              ? `${category.style} bg-green-600 text-white` // 선택된 카테고리 강조
              : `${category.style} text-gray-800 hover:bg-gray-100`
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          {category.icon && <span className="mr-2">{category.icon}</span>}
          {category.label}
        </motion.button>
      ))}
      {isModalVisible && (
        <Modal isOpen={isModalVisible} onClose={() => setModalVisible(false)} title="알림">
          <div className="flex flex-col items-center">
            <p className="mb-4 text-lg">베리어프리는 현재 지원준비중입니다.</p>
            <button
              onClick={() => setModalVisible(false)}
              className="w-[300px] rounded-xl bg-sky-600 px-4 py-2 text-white transition-colors hover:bg-green-700">
              확인
            </button>
          </div>
        </Modal>
      )}
    </motion.div>
  );
};

export default CategoryFilter;
