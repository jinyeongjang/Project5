import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoSearchOutline } from 'react-icons/io5';
import ScrollToTop from '../../../components/ScrollToTop';
import WireandWirelessSidebar from '../../../components/wireandwireless/WireandWirelessSidebar';
import ModalImage from '../../../components/ModalImage';

const WirelessLC7311S: React.FC = () => {
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
        <motion.div className="w-full max-w-6xl rounded-lg bg-white p-8 sm:p-6 xs:p-3" variants={itemVariants}>
          <motion.div className="mb-8 w-full max-w-6xl rounded-lg p-8 sm:p-6 xs:p-3" variants={itemVariants}>
            <div className="flex items-start gap-8 xs:flex-col xs:gap-2">
              <div className="flex-1 xs:text-center">
                <motion.h1
                  className="mb-4 text-left text-[45px] font-bold text-blue-600 xs:text-left xs:text-[28px]"
                  variants={itemVariants}>
                  LC-7311S 무선 단말기
                </motion.h1>
                <motion.p
                  className="mb-4 text-left text-4xl font-bold text-gray-800 xs:text-left xs:text-2xl"
                  variants={itemVariants}>
                  이동성과 편의성을<br></br> 갖춘 결제 시스템
                </motion.p>
              </div>
              <div className="flex gap-1 xs:justify-center">
                <div className="relative flex flex-col items-center">
                  <motion.img
                    src="/images/wireless/LC-7311S/LC-7311S-1.png"
                    alt="LC-7311S 무선 단말기 정면"
                    className="h-[200px] w-[200px] rounded-xl object-contain xs:h-[250px] xs:w-[125px]"
                    variants={itemVariants}
                  />
                  <button
                    onClick={() => setSelectedImage('/images/wireless/LC-7311S/LC-7311S-1.png')}
                    className="absolute right-2 top-2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-colors hover:bg-white">
                    <IoSearchOutline size={22} />
                  </button>
                  <p className="mt-3 text-center text-sm text-gray-600 xs:text-xs">
                    LC-7311S<br></br>모델 정면
                    <br />
                  </p>
                </div>
                <div className="relative flex flex-col items-center">
                  <motion.img
                    src="/images/wireless/LC-7311S/LC-7311S-2.png"
                    alt="LC-7311S 무선 단말기 측면"
                    className="ml-[20px] h-[200px] w-[200px] rounded-xl object-contain xs:h-[250px] xs:w-[180px]"
                    variants={itemVariants}
                  />
                  <button
                    onClick={() => setSelectedImage('/images/wireless/LC-7311S/LC-7311S-2.png')}
                    className="absolute right-2 top-2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-colors hover:bg-white">
                    <IoSearchOutline size={22} />
                  </button>
                  <p className="mt-3 text-center text-sm text-gray-600 xs:text-xs">
                    LC-7311S<br></br>모델 측면
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <motion.hr className="my-8 border-gray-200 xs:my-5" variants={itemVariants} />

            {/* <div className="mt-12 grid grid-cols-3 gap-4 xs:mt-6 xs:grid-cols-1">
              <motion.div className="space-y-4" variants={itemVariants}>
                <div className="h-full rounded-xl border-2 bg-gray-50 p-6 shadow-sm xs:p-3">
                  <h2 className="mb-4 text-left text-xl font-semibold text-blue-600 xs:text-lg">무선 연결</h2>
                  <p className="text-left text-lg text-gray-700 sm:text-lg xs:text-base">
                    Wi-Fi를 통한
                    <br />
                    안정적인 무선 연결로
                    <br />
                    어디서나 결제가 가능합니다.
                  </p>
                </div>
              </motion.div>

              <motion.div className="space-y-4" variants={itemVariants}>
                <div className="h-full rounded-xl border-2 bg-gray-50 p-6 shadow-sm sm:p-6 xs:p-3">
                  <h2 className="mb-4 text-left text-xl font-semibold text-blue-600 xs:text-lg">배터리 지속성</h2>
                  <p className="text-left text-lg text-gray-700 sm:text-lg xs:text-base">
                    장시간 사용 가능한 <br />
                    대용량 배터리로
                    <br />
                    안정적인 운영이 가능합니다.
                  </p>
                </div>
              </motion.div>

              <motion.div className="space-y-4" variants={itemVariants}>
                <div className="h-full rounded-xl border-2 bg-gray-50 p-6 shadow-sm xs:xs:p-3">
                  <h2 className="mb-4 text-left text-xl font-semibold text-blue-600 sm:text-xl xs:text-lg">
                    다양한 결제 방식
                  </h2>
                  <p className="text-left text-lg text-gray-700 sm:text-lg xs:text-base">
                    IC/마그네틱 카드, NFC,
                    <br />
                    QR코드 등 다양한 결제를
                    <br />
                    지원합니다.
                  </p>
                </div>
              </motion.div>
            </div> */}

            <motion.div className="mt-12 xs:mt-8" variants={itemVariants}>
              <h3 className="mb-6 text-2xl font-semibold text-blue-600 sm:text-2xl xs:mb-4 xs:text-xl">제품 갤러리</h3>
              <div className="grid grid-cols-1 gap-4 xs:gap-2">
                <div className="relative">
                  <motion.img
                    src="/images/wireless/LC-7311S/LC-7311S-spec.png"
                    alt="무선 단말기 상세 1"
                    className="w-full cursor-pointer rounded-xl object-contain shadow-lg transition-transform duration-300 hover:scale-105"
                    variants={itemVariants}
                    onClick={() => setSelectedImage('/images/wireless/LC-7311S/LC-7311S-spec.png')}
                  />
                  <button
                    onClick={() => setSelectedImage('/images/wireless/LC-7311S/LC-7311S-spec.png')}
                    className="absolute right-2 top-2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-colors hover:bg-white">
                    <IoSearchOutline size={22} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <ScrollToTop />
      </motion.div>

      <ModalImage
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage || ''}
        alt="확대된 이미지"
      />
    </div>
  );
};

export default WirelessLC7311S;
