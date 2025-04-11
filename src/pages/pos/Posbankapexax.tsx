import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import PosSidebar from '../../components/pos/PosSidebar';
import ScrollToTop from '../../components/ScrollToTop';
import ModalImage from '../../components/ModalImage';

const Posbankapexax = () => {
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
      <PosSidebar />

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
                    src="/images/pos/posbank/apexa.png"
                    alt="포스뱅크 APEXA X 정면"
                    className="h-[150px] w-[150px] rounded-xl object-cover xs:h-[150px]"
                    variants={itemVariants}
                  />
                  <button
                    onClick={() => setSelectedImage('/images/pos/posbank/apexa.png')}
                    className="absolute right-2 top-2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-colors hover:bg-white">
                    <IoSearchOutline size={20} />
                  </button>
                  <p className="mt-2 text-center text-sm text-gray-600">포스뱅크 APEXA X</p>
                </div>
                <div className="relative flex flex-col items-center"></div>
              </div>
              <div className="order-1 flex-1 xs:order-1 xs:text-center">
                <motion.h1
                  className="mb-4 text-left text-[45px] font-bold text-blue-600 xs:text-[32px]"
                  variants={itemVariants}>
                  포스뱅크 APEXA X
                </motion.h1>
                <motion.p
                  className="mb-4 text-left text-4xl font-bold text-gray-800 xs:text-[24px]"
                  variants={itemVariants}>
                  강력한 성능과 편리함 <br />
                  최적화된 POS 시스템
                </motion.p>
              </div>
            </div>
            <motion.hr className="my-8 border-gray-200 xs:my-6" variants={itemVariants} />

            {/* <div className="mt-12 grid grid-cols-3 gap-4 xs:mt-6 xs:grid-cols-1 xs:gap-3">
              <motion.div className="space-y-4" variants={itemVariants}>
                <div className="h-full rounded-xl border-2 bg-gray-50 p-6 shadow-sm xs:p-4">
                  <h2 className="mb-4 text-left text-xl font-semibold text-blue-600">맞춤형 프로그램</h2>
                  <p className="text-left text-lg text-gray-700">
                    각 업종별 특성과 매장 상황에 맞는 최적화된 프로그램 제공
                  </p>
                </div>
              </motion.div>

              <motion.div className="space-y-4" variants={itemVariants}>
                <div className="h-full rounded-xl border-2 bg-gray-50 p-6 shadow-sm xs:p-4">
                  <h2 className="mb-4 text-left text-xl font-semibold text-blue-600">제품 교육</h2>
                  <p className="text-left text-lg text-gray-700">전문적인 교육 제공으로 원활한 운영 지원</p>
                </div>
              </motion.div>

              <motion.div className="space-y-4" variants={itemVariants}>
                <div className="h-full rounded-xl border-2 bg-gray-50 p-6 shadow-sm xs:p-4">
                  <h2 className="mb-4 text-left text-xl font-semibold text-blue-600">결제 시스템</h2>
                  <p className="text-left text-lg text-gray-700">다양한 결제 수단 지원</p>
                </div>
              </motion.div>
            </div> */}

            <motion.div className="mt-12 xs:mt-8" variants={itemVariants}>
              <h3 className="mb-6 text-2xl font-semibold text-blue-600 sm:text-2xl xs:mb-4 xs:text-xl">제품 갤러리</h3>
              <div className="grid grid-cols-1 gap-4 xs:gap-2">
                <div className="relative">
                  <motion.img
                    src="/images/pos/posbank/apexa-1.png"
                    alt="포스뱅크 APEXA X 상세 1"
                    className="w-full cursor-pointer rounded-xl object-contain shadow-lg transition-transform duration-300 hover:scale-105"
                    variants={itemVariants}
                    onClick={() => setSelectedImage('/images/pos/posbank/apexa-1.png')}
                  />
                  <button
                    onClick={() => setSelectedImage('/images/pos/posbank/apexa-1.png')}
                    className="absolute right-2 top-2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-colors hover:bg-white">
                    <IoSearchOutline size={22} />
                  </button>
                </div>

                <div className="relative">
                  <motion.img
                    src="/images/pos/posbank/apexa-detail1.png"
                    alt="포스뱅크 APEXA X 상세 2"
                    className="w-full cursor-pointer rounded-xl object-contain shadow-lg transition-transform duration-300 hover:scale-105"
                    variants={itemVariants}
                    onClick={() => setSelectedImage('/images/pos/posbank/apexa-detail1.png')}
                  />
                  <button
                    onClick={() => setSelectedImage('/images/pos/posbank/apexa-detail1.png')}
                    className="absolute right-2 top-2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-colors hover:bg-white">
                    <IoSearchOutline size={22} />
                  </button>
                </div>

                <div className="relative">
                  <motion.img
                    src="/images/pos/posbank/apexa-detail2.png"
                    alt="포스뱅크 APEXA X 상세 3"
                    className="w-full cursor-pointer rounded-xl object-contain shadow-lg transition-transform duration-300 hover:scale-105"
                    variants={itemVariants}
                    onClick={() => setSelectedImage('/images/pos/posbank/apexa-detail2.png')}
                  />
                  <button
                    onClick={() => setSelectedImage('/images/pos/posbank/apexa-detail2.png')}
                    className="absolute right-2 top-2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-colors hover:bg-white">
                    <IoSearchOutline size={22} />
                  </button>
                </div>

                <motion.h1
                  className="mt-[40px] text-left text-[45px] font-bold text-blue-600 xs:text-left xs:text-[28px]"
                  variants={itemVariants}>
                  포스뱅크 APEXA X 스펙
                </motion.h1>
                <motion.hr className="my-8 border-gray-200 xs:my-5" variants={itemVariants} />

                <div className="relative">
                  <motion.img
                    src="/images/pos/posbank/apexa-spec.png"
                    alt="포스뱅크 APEXA X 상세 4"
                    className="w-full cursor-pointer rounded-xl object-contain shadow-lg transition-transform duration-300 hover:scale-105"
                    variants={itemVariants}
                    onClick={() => setSelectedImage('/images/pos/posbank/apexa-spec.png')}
                  />
                  <button
                    onClick={() => setSelectedImage('/images/pos/posbank/apexa-spec.png')}
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
        alt="포스뱅크 APEXA X 상세 이미지"
      />
    </div>
  );
};

export default Posbankapexax;
