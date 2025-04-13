import React from 'react';
import { motion } from 'framer-motion';
import { FaWifi, FaMobile } from 'react-icons/fa';
import { MdCable } from 'react-icons/md';
import { HiViewGrid } from 'react-icons/hi';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', label: '전체', icon: <HiViewGrid />, description: '모든 제품' },
    { id: 'wire', label: '유선', icon: <MdCable />, description: '유선 제품' },
    { id: 'wireless', label: '무선', icon: <FaWifi />, description: '무선 제품' },
    { id: 'mobile', label: '모바일시스템', icon: <FaMobile />, description: '모바일 시스템' },
  ];

  return (
    <motion.div
      className="mb-4 grid w-full grid-cols-2 gap-2 text-center"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
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
    </motion.div>
  );
};

export default CategoryFilter;
