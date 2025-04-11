import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../components/ScrollToTop';
import CustomerSidebar from '../../components/CustomerSidebar';

const CustomerSupport: React.FC = () => {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto mt-[100px] flex px-4 py-8 xs:mt-[0px] xs:flex-col">
      <CustomerSidebar />

      <motion.div
        className="ml-[300px] flex-1 pl-8 xs:ml-0 xs:mt-[130px] xs:pl-0"
        initial="hidden"
        animate="visible"
        variants={containerVariants}>
        <motion.div className="mt-8 text-center xs:hidden" variants={itemVariants}>
          <p className="flex h-[50px] items-center justify-center rounded-xl border-2 bg-slate-200 text-lg text-gray-600">
            좌측 사이드바에서 메뉴를 선택하거나 하단에서 메뉴를 선택하세요!
          </p>
        </motion.div>

        <motion.div className="w-full max-w-6xl rounded-lg p-8 xs:p-4" variants={itemVariants}>
          <motion.h1
            className="mb-4 text-left text-4xl font-bold text-blue-600 xs:text-left xs:text-3xl"
            variants={itemVariants}>
            고객 지원
          </motion.h1>
          <motion.p className="mb-8 text-left text-lg text-gray-700" variants={itemVariants}>
            고객님의 문의사항을 해결해 드리겠습니다.
          </motion.p>

          <motion.div className="grid grid-cols-2 gap-6 xs:grid-cols-1" variants={itemVariants}>
            <Link to="/customer-support/notice" onClick={scrollToTop}>
              <motion.div
                className="flex cursor-pointer flex-col items-center rounded-xl bg-sky-600 p-6 transition-all hover:bg-sky-700 hover:shadow-lg active:scale-95 active:bg-sky-800"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}>
                <h3 className="mb-2 text-xl font-semibold text-white">공지사항</h3>
                <p className="text-center text-white">이레페이에서 안내드리는 공지사항입니다.</p>
              </motion.div>
            </Link>

            <Link to="/customer-support/faq" onClick={scrollToTop}>
              <motion.div
                className="flex cursor-pointer flex-col items-center rounded-xl bg-green-600 p-6 transition-all hover:bg-green-700 hover:shadow-lg active:bg-green-800"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}>
                <h3 className="mb-2 text-xl font-semibold text-white">자주묻는질문</h3>
                <p className="text-center text-white">고객님께서 자주물어보는 질문과 답변입니다.</p>
              </motion.div>
            </Link>

            <Link to="/customer-support/event" onClick={scrollToTop}>
              <motion.div
                className="flex cursor-pointer flex-col items-center rounded-xl bg-slate-600 p-6 transition-all hover:bg-slate-700 hover:shadow-lg active:bg-slate-800"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}>
                <h3 className="mb-2 text-xl font-semibold text-white">이벤트</h3>
                <p className="text-center text-white">이레페이에서 진행되는 이벤트 안내입니다.</p>
              </motion.div>
            </Link>

            <Link to="/customer-support/inquiry" onClick={scrollToTop}>
              <motion.div
                className="flex cursor-pointer flex-col items-center rounded-xl bg-yellow-700 p-6 transition-all hover:bg-yellow-800 hover:shadow-lg active:bg-yellow-900"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}>
                <h3 className="mb-2 text-xl font-semibold text-white">문의하기</h3>
                <p className="text-center text-white">채널톡 실시간 상담이 가능합니다.</p>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      <ScrollToTop />
    </div>
  );
};

export default CustomerSupport;
