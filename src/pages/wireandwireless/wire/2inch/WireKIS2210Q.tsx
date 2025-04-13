import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoSearchOutline } from 'react-icons/io5';
import ScrollToTop from '../../../../components/ScrollToTop';
import WireandWirelessSidebar from '../../../../components/wireandwireless/WireandWirelessSidebar';
import ModalImage from '../../../../components/ModalImage';

const WireKIS2210Q: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="container mx-auto mt-[100px] flex px-4 py-8 xs:mt-[80px] xs:flex-col xs:px-2">
      <WireandWirelessSidebar />

      <motion.div
        className="ml-[300px] flex-1 pl-8 xs:ml-0 xs:mt-[50px] xs:pl-0"
        initial="hidden"
        animate="visible"
        variants={containerVariants}>
        <motion.div className="w-full max-w-6xl rounded-lg bg-white p-8 xs:p-4" variants={itemVariants}>
          <motion.div className="mb-8 w-full max-w-6xl rounded-lg bg-white p-8 xs:p-4" variants={itemVariants}>
            <div className="flex items-start gap-8 xs:flex-col xs:gap-2">
              <div className="order-1 flex-1 xs:order-1 xs:text-center">
                <motion.h1
                  className="mb-4 text-left text-[45px] font-bold text-blue-600 xs:text-[32px]"
                  variants={itemVariants}>
                  2인치 KIS-2210Q
                </motion.h1>
                <motion.p
                  className="mb-4 text-left text-4xl font-bold text-gray-800 xs:text-[28px]"
                  variants={itemVariants}>
                  안정적인 결제를 위한
                  <br />
                  유선 단말기
                </motion.p>
              </div>
              <div className="order-2 flex gap-1 xs:order-2 xs:justify-center">
                <div className="relative flex flex-col items-center">
                  <motion.img
                    src="/images/wire/2inch/KIS-2210Q/2210Q_main1.png"
                    alt="2인치 KIS-2210Q 모델"
                    className="h-[200px] w-[200px] rounded-xl object-contain xs:h-[250px] xs:w-[125px]"
                    variants={itemVariants}
                  />
                  <button
                    onClick={() => setSelectedImage('/images/wire/2inch/KIS-2210Q/2210Q_main1.png')}
                    className="absolute right-2 top-2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-colors hover:bg-white">
                    <IoSearchOutline size={20} />
                  </button>
                  <p className="mt-2 text-center text-sm text-gray-600">2인치 KIS-2210Q 모델</p>
                </div>
              </div>
            </div>
            <motion.hr className="my-8 border-gray-200 xs:my-6" variants={itemVariants} />

            <motion.div className="mt-12 xs:mt-8" variants={itemVariants}>
              <h3 className="mb-6 text-2xl font-semibold text-blue-600 xs:mb-4 xs:text-xl">제품 갤러리</h3>
              <div className="grid grid-cols-1 gap-4 xs:gap-2">
                <div className="relative">
                  <motion.img
                    src="/images/wire/2inch/KIS-2210Q/2210Q_main2.png"
                    alt="2인치 KIS-2210Q 상세 1"
                    className="w-full cursor-pointer rounded-xl object-contain shadow-lg transition-transform duration-300 hover:scale-105"
                    variants={itemVariants}
                    onClick={() => setSelectedImage('/images/wire/2inch/KIS-2210Q/2210Q_main2.png')}
                  />
                  <button
                    onClick={() => setSelectedImage('/images/wire/2inch/KIS-2210Q/2210Q_main2.png')}
                    className="absolute right-2 top-2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-colors hover:bg-white">
                    <IoSearchOutline size={22} />
                  </button>
                </div>

                <div className="relative">
                  <motion.img
                    src="/images/wire/2inch/KIS-2210Q/2210Q_01.png"
                    alt="2인치 KIS-2210Q 상세 2"
                    className="w-full cursor-pointer rounded-xl object-contain shadow-lg transition-transform duration-300 hover:scale-105"
                    variants={itemVariants}
                    onClick={() => setSelectedImage('/images/wire/2inch/KIS-2210Q/2210Q_01.png')}
                  />
                  <button
                    onClick={() => setSelectedImage('/images/wire/2inch/KIS-2210Q/2210Q_01.png')}
                    className="absolute right-2 top-2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-colors hover:bg-white">
                    <IoSearchOutline size={22} />
                  </button>
                </div>

                <div className="relative">
                  <motion.img
                    src="/images/wire/2inch/KIS-2210Q/2210Q_02.png"
                    alt="2인치 KIS-2210Q 상세 3"
                    className="w-full cursor-pointer rounded-xl object-contain shadow-lg transition-transform duration-300 hover:scale-105"
                    variants={itemVariants}
                    onClick={() => setSelectedImage('/images/wire/2inch/KIS-2210Q/2210Q_02.png')}
                  />
                  <button
                    onClick={() => setSelectedImage('/images/wire/2inch/KIS-2210Q/2210Q_02.png')}
                    className="absolute right-2 top-2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-colors hover:bg-white">
                    <IoSearchOutline size={22} />
                  </button>
                </div>

                <motion.h1
                  className="mt-[40px] text-left text-[45px] font-bold text-blue-600 xs:text-left xs:text-[28px]"
                  variants={itemVariants}>
                  KIS-2210Q 스펙
                </motion.h1>
                <motion.hr className="my-8 border-gray-200 xs:my-5" variants={itemVariants} />

                <div className="relative">
                  <motion.img
                    src="/images/wire/2inch/KIS-2210Q/KIS-2210Q_spec.png"
                    alt="2인치 KIS-2210Q 스펙"
                    className="w-full cursor-pointer rounded-xl object-contain shadow-lg transition-transform duration-300 hover:scale-105"
                    variants={itemVariants}
                    onClick={() => setSelectedImage('/images/wire/2inch/KIS-2210Q/KIS-2210Q_spec.png')}
                  />
                  <button
                    onClick={() => setSelectedImage('/images/wire/2inch/KIS-2210Q/KIS-2210Q_spec.png')}
                    className="absolute right-2 top-2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-colors hover:bg-white">
                    <IoSearchOutline size={22} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <ScrollToTop />
      <ModalImage
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage || ''}
        alt="확대된 이미지"
      />
    </div>
  );
};

export default WireKIS2210Q;
