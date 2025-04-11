import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import KioskSidebar from '../../components/kiosk/KioskSidebar';
import ScrollToTop from '../../components/ScrollToTop';
import ModalImage from '../../components/ModalImage';

const KioskIamu = () => {
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
    <div className="container mx-auto mt-[100px] flex px-4 py-8 xs:mt-[50px] xs:flex-col">
      <KioskSidebar />

      <motion.div
        className="ml-[300px] flex-1 pl-8 xs:ml-0 xs:mt-[50px] xs:pl-0"
        initial="hidden"
        animate="visible"
        variants={containerVariants}>
        <motion.div className="w-full max-w-6xl rounded-lg bg-white p-8 xs:p-4" variants={itemVariants}>
          <motion.div className="mb-8 w-full max-w-6xl rounded-lg bg-white p-8 xs:p-4" variants={itemVariants}>
            <div className="flex items-start gap-8 xs:flex-col xs:gap-2">
              <div className="order-2 flex gap-1 xs:order-2 xs:justify-center">
                <div className="relative flex flex-col items-center">
                  <motion.img
                    src="/images/kiosk/iamu/iamu.png"
                    alt="아이엠유 키오스크 정면"
                    className="h-[200px] w-[200px] rounded-xl object-contain xs:h-[250px] xs:w-[125px]"
                    variants={itemVariants}
                  />
                  <button
                    onClick={() => setSelectedImage('/images/kiosk/iamu/iamu.png')}
                    className="absolute right-2 top-2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-colors hover:bg-white">
                    <IoSearchOutline size={22} />
                  </button>
                  <p className="mt-3 text-center text-sm text-gray-600 xs:text-xs">
                    I'MU 키오스크
                    <br />
                    기본형 모델
                  </p>
                </div>
              </div>
              <div className="order-1 flex-1 xs:order-1 xs:text-center">
                <motion.h1
                  className="mb-4 text-left text-[45px] font-bold text-blue-600 xs:text-left xs:text-[28px]"
                  variants={itemVariants}>
                  I'MU T6 키오스크
                </motion.h1>
                <motion.p
                  className="mb-4 text-left text-4xl font-bold text-gray-800 xs:text-left xs:text-2xl"
                  variants={itemVariants}>
                  혁신적인 디자인과<br></br> 직관적인 사용자 경험
                </motion.p>
              </div>
            </div>
            <motion.hr className="my-8 border-gray-200 xs:my-5" variants={itemVariants} />

            <motion.div className="mt-12 xs:mt-8" variants={itemVariants}>
              <h3 className="mb-6 text-2xl font-semibold text-blue-600 xs:mb-4 xs:text-xl">제품 갤러리</h3>
              <div className="grid grid-cols-1 gap-4 xs:gap-2">
                <div className="relative">
                  <motion.img
                    src="/images/kiosk/iamu/iamudetail.png"
                    alt="아이엠유 키오스크 상세 이미지 1"
                    className="w-full cursor-pointer rounded-xl object-contain shadow-lg transition-transform duration-300 hover:scale-105"
                    variants={itemVariants}
                    onClick={() => setSelectedImage('/images/kiosk/iamu/iamudetail.png')}
                  />
                  <button
                    onClick={() => setSelectedImage('/images/kiosk/iamu/iamudetail.png')}
                    className="absolute right-2 top-2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-colors hover:bg-white">
                    <IoSearchOutline size={22} />
                  </button>
                </div>

                <div className="relative">
                  <motion.img
                    src="/images/kiosk/iamu/iamudetail2.png"
                    alt="아이엠유 키오스크 상세 이미지 2"
                    className="w-full cursor-pointer rounded-xl object-contain shadow-lg transition-transform duration-300 hover:scale-105"
                    variants={itemVariants}
                    onClick={() => setSelectedImage('/images/kiosk/iamu/iamudetail2.png')}
                  />
                  <button
                    onClick={() => setSelectedImage('/images/kiosk/iamu/iamudetail2.png')}
                    className="absolute right-2 top-2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-colors hover:bg-white">
                    <IoSearchOutline size={22} />
                  </button>
                </div>

                <div className="relative">
                  <motion.img
                    src="/images/kiosk/iamu/iamudetail3.png"
                    alt="아이엠유 키오스크 상세 이미지 3"
                    className="w-full cursor-pointer rounded-xl object-contain shadow-lg transition-transform duration-300 hover:scale-105"
                    variants={itemVariants}
                    onClick={() => setSelectedImage('/images/kiosk/iamu/iamudetail3.png')}
                  />
                  <button
                    onClick={() => setSelectedImage('/images/kiosk/iamu/iamudetail3.png')}
                    className="absolute right-2 top-2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-colors hover:bg-white">
                    <IoSearchOutline size={22} />
                  </button>
                </div>

                <div className="relative">
                  <motion.img
                    src="/images/kiosk/iamu/iamudetail4.png"
                    alt="아이엠유 키오스크 상세 이미지 4"
                    className="w-full cursor-pointer rounded-xl object-contain shadow-lg transition-transform duration-300 hover:scale-105"
                    variants={itemVariants}
                    onClick={() => setSelectedImage('/images/kiosk/iamu/iamudetail4.png')}
                  />
                  <button
                    onClick={() => setSelectedImage('/images/kiosk/iamu/iamudetail4.png')}
                    className="absolute right-2 top-2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-colors hover:bg-white">
                    <IoSearchOutline size={22} />
                  </button>
                </div>

                <div className="relative">
                  <motion.img
                    src="/images/kiosk/iamu/iamudetail5.png"
                    alt="아이엠유 키오스크 상세 이미지 4"
                    className="w-full cursor-pointer rounded-xl object-contain shadow-lg transition-transform duration-300 hover:scale-105"
                    variants={itemVariants}
                    onClick={() => setSelectedImage('/images/kiosk/iamu/iamudetail5.png')}
                  />
                  <button
                    onClick={() => setSelectedImage('/images/kiosk/iamu/iamudetail5.png')}
                    className="absolute right-2 top-2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-colors hover:bg-white">
                    <IoSearchOutline size={22} />
                  </button>
                </div>

                <div className="relative">
                  <motion.img
                    src="/images/kiosk/iamu/iamuspec.png"
                    alt="아이엠유 키오스크 상세 이미지 4"
                    className="w-full cursor-pointer rounded-xl object-contain shadow-lg transition-transform duration-300 hover:scale-105"
                    variants={itemVariants}
                    onClick={() => setSelectedImage('/images/kiosk/iamu/iamuspec.png')}
                  />
                  <button
                    onClick={() => setSelectedImage('/images/kiosk/iamu/iamuspec.png')}
                    className="absolute right-2 top-2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-colors hover:bg-white">
                    <IoSearchOutline size={22} />
                  </button>
                </div>

                <div className="relative">
                  <motion.img
                    src="/images/kiosk/iamu/iamusolution.png"
                    alt="아이엠유 키오스크 상세 이미지 4"
                    className="w-full cursor-pointer rounded-xl object-contain shadow-lg transition-transform duration-300 hover:scale-105"
                    variants={itemVariants}
                    onClick={() => setSelectedImage('/images/kiosk/iamu/iamusolution.png')}
                  />
                  <button
                    onClick={() => setSelectedImage('/images/kiosk/iamu/iamusolution.png')}
                    className="absolute right-2 top-2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-colors hover:bg-white">
                    <IoSearchOutline size={22} />
                  </button>
                </div>

                <motion.h1
                  className="mt-[40px] text-left text-[45px] font-bold text-blue-600 xs:text-left xs:text-[28px]"
                  variants={itemVariants}>
                  아임유 T6 키오스크 스펙
                </motion.h1>
                <motion.hr className="my-8 border-gray-200 xs:my-5" variants={itemVariants} />

                <div className="relative">
                  <motion.img
                    src="/images/kiosk/iamu/iamuallspec.png"
                    alt="아이엠유 키오스크 상세 이미지 4"
                    className="w-full cursor-pointer rounded-xl object-contain shadow-lg transition-transform duration-300 hover:scale-105"
                    variants={itemVariants}
                    onClick={() => setSelectedImage('/images/kiosk/iamu/iamuallspec.png')}
                  />
                  <button
                    onClick={() => setSelectedImage('/images/kiosk/iamu/iamuallspec.png')}
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
        alt="IAMU 키오스크 상세 이미지"
      />
    </div>
  );
};

export default KioskIamu;
