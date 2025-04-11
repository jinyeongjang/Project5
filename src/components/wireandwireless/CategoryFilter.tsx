import React from 'react';
import { motion } from 'framer-motion';
import { FaWifi, FaMobile } from 'react-icons/fa';
import { MdCable } from 'react-icons/md';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', label: '전체', style: 'border-2' },
    { id: 'wire', label: '유선', icon: <MdCable />, style: 'border-2' },
    { id: 'wireless', label: '무선', icon: <FaWifi />, style: 'border-2' },
    { id: 'mobile', label: '모바일시스템', icon: <FaMobile />, style: 'border-2' },
  ];

  return (
    <motion.div
      className="mb-4 grid w-[290px] grid-cols-2 gap-2 px-4 text-left tracking-tighter"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`flex h-[40px] flex-1 items-center justify-center rounded-xl px-2 py-2 tracking-tighter transition-colors duration-200 ${
            selectedCategory === category.id
              ? `${category.style} bg-green-600 text-white`
              : `${category.style} text-gray-800 hover:bg-gray-100`
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          {category.icon && <span className="mr-2">{category.icon}</span>}
          {category.label}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default CategoryFilter;
