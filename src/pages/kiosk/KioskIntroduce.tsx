import { motion } from 'framer-motion';
import ScrollToTop from '../../components/ScrollToTop';
import KioskSidebar from '../../components/kiosk/KioskSidebar';

const KioskIntroduce: React.FC = () => {
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
    <div className="container mx-auto mt-[100px] flex px-4 py-8 xs:mt-[100px] xs:flex-col">
      <KioskSidebar />

      <motion.div
        className="ml-[300px] flex-1 pl-8 xs:ml-0 xs:mt-[50px] xs:pl-0"
        initial="hidden"
        animate="visible"
        variants={containerVariants}>
        <motion.div
          className="w-full max-w-6xl rounded-lg bg-white p-8 sm:p-6 xs:hidden xs:p-3"
          variants={itemVariants}>
          <p className="flex h-[50px] items-center justify-center rounded-xl border-2 bg-slate-200 text-lg text-gray-600">
            좌측 사이드바에서 키오스크를 선택하세요!
          </p>
        </motion.div>

        <motion.div className="w-full max-w-6xl rounded-lg bg-white p-8 xs:p-4" variants={itemVariants}>
          <motion.div className="mb-8 w-full max-w-6xl rounded-lg bg-white p-8 xs:mb-4 xs:p-4" variants={itemVariants}>
            <div className="flex items-center gap-[200px]">
              <div className="xs:mt-2 xs:text-left">
                <motion.h1
                  className="mb-4 text-left text-4xl font-bold text-blue-600 xs:text-left xs:text-3xl"
                  variants={itemVariants}>
                  키오스크
                </motion.h1>
                <motion.p
                  className="mb-4 text-left text-4xl font-bold text-gray-800 xs:text-left xs:text-2xl"
                  variants={itemVariants}>
                  업종과 매장 상황에 따른<br></br> 맞춤형 제품
                </motion.p>
              </div>
            </div>
            <motion.hr className="my-12 border-gray-200 xs:my-8" variants={itemVariants} />

            <div className="grid grid-cols-3 gap-8 xs:grid-cols-1">
              <motion.div className="space-y-4" variants={itemVariants}>
                <div className="h-full rounded-xl border-2 bg-gray-50 p-6 shadow-sm xs:p-4">
                  <h2 className="mb-4 text-left text-xl font-semibold text-blue-600">맞춤형 프로그램</h2>
                  <p className="text-left text-lg text-gray-700 xs:text-base">
                    각 업종별 특성과 매장 상황에 맞는
                    <br />
                    최적화된 프로그램을 제공하여
                    <br /> 효율적인 운영을 지원합니다.
                  </p>
                </div>
              </motion.div>

              <motion.div className="space-y-4" variants={itemVariants}>
                <div className="h-full rounded-xl border-2 bg-gray-50 p-6 shadow-sm xs:p-4">
                  <h2 className="mb-4 text-left text-xl font-semibold text-blue-600">제품 교육</h2>
                  <p className="text-left text-lg text-gray-700 xs:text-base">
                    키오스크 설치부터 운영까지 <br />
                    전문적인 교육을 제공하여
                    <br />
                    제품사용의 원활한 안전성을
                    <br />
                    보장합니다.
                  </p>
                </div>
              </motion.div>

              <motion.div className="space-y-4" variants={itemVariants}>
                <div className="h-full rounded-xl border-2 bg-gray-50 p-6 shadow-sm xs:p-4">
                  <h2 className="mb-4 text-left text-xl font-semibold text-blue-600">결제 시스템</h2>
                  <p className="text-left text-lg text-gray-700 xs:text-base">
                    카드, 현금, 모바일 페이 등<br />
                    다양한 결제 수단을 지원하여
                    <br />
                    고객 편의성을 높입니다.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <ScrollToTop />
      </motion.div>
    </div>
  );
};

export default KioskIntroduce;
