import React from 'react';
import { FaPhoneAlt, FaStore } from 'react-icons/fa';
import ScrollToTop from '../components/ScrollToTop';
import { motion } from 'framer-motion';

const UnAttendAuth: React.FC = () => {
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
    <div className="mt-[200px] flex flex-col items-center justify-center xs:mt-[100px]">
      <motion.div
        className="w-full max-w-6xl rounded-lg bg-white p-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}>
        <motion.h1
          className="justify-left mb-4 flex items-center text-4xl font-bold text-blue-600"
          variants={itemVariants}>
          <FaPhoneAlt className="mr-2" />
          전화무인인증
        </motion.h1>
        <motion.hr className="my-12 border-gray-200" variants={itemVariants} />

        <motion.h2
          className="justify-left mb-4 flex items-center text-3xl font-bold text-green-600"
          variants={itemVariants}>
          <FaStore className="mr-2" />
          무인 매장 출입 제어 시스템
        </motion.h2>
        <motion.p className="justify-left mb-12 flex items-center text-lg text-gray-700" variants={itemVariants}>
          로비스 전화무인인증 부울경지사: 설치부터 관리까지 원스톱 서비스
        </motion.p>

        <motion.div className="md:grid-cols-0 mb-12 grid grid-cols-1 gap-8" variants={itemVariants}>
          <motion.img
            src="/images/unattendauth/rovismain.png"
            alt="전화무인인증 시스템"
            className="h-auto w-full rounded-xl shadow-md"
            variants={itemVariants}
          />

          <motion.img
            src="/images/unattendauth/rovismain2.png"
            alt="전화무인인증 시스템"
            className="mt-[-20px] h-auto w-full rounded-xl shadow-md"
            variants={itemVariants}
          />

          <motion.img
            src="/images/unattendauth/rovisunattendauth.png"
            alt="전화무인인증 시스템"
            className="h-auto w-full rounded-xl shadow-md"
            variants={itemVariants}
          />

          <motion.img
            src="/images/unattendauth/rovisunattendauthdetail.png"
            alt="무인 매장 출입 제어 시스템"
            className="h-auto w-full rounded-xl shadow-md"
            variants={itemVariants}
          />
          <motion.img
            src="/images/unattendauth/rovisunattendauthdifference.png"
            alt="무인 매장 출입 제어 시스템"
            className="h-auto w-full rounded-xl shadow-md"
            variants={itemVariants}
          />
        </motion.div>

        <motion.h1 className="mb-4 mt-[200px] text-left text-4xl font-bold text-blue-600" variants={itemVariants}>
          CCTV
        </motion.h1>
        <motion.p className="mb-4 text-left text-4xl font-bold text-gray-800" variants={itemVariants}>
          도난 방지를 위한 고급형 CCTV
        </motion.p>
        <motion.hr className="my-12 border-gray-200" variants={itemVariants} />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div className="space-y-4" variants={itemVariants}>
            <div className="h-full rounded-lg bg-gray-50 p-6 shadow-sm">
              <h2 className="mb-4 text-left text-xl font-semibold text-blue-600">고화질 영상</h2>
              <p className="text-left text-lg text-gray-700">
                선명한 화질을 제공하여
                <br />
                정확한 모니터링이 가능합니다.
              </p>
            </div>
          </motion.div>

          <motion.div className="space-y-4" variants={itemVariants}>
            <div className="h-full rounded-lg bg-gray-50 p-6 shadow-sm">
              <h2 className="mb-4 text-left text-xl font-semibold text-blue-600">스마트 감지</h2>
              <p className="text-left text-lg text-gray-700">실시간 알림 및 자동 녹화를 지원합니다.</p>
            </div>
          </motion.div>

          <motion.div className="space-y-4" variants={itemVariants}>
            <div className="h-full rounded-lg bg-gray-50 p-6 shadow-sm">
              <h2 className="mb-4 text-left text-xl font-semibold text-blue-600">원격 관리</h2>
              <p className="text-left text-lg text-gray-700">
                모바일 앱을 통한 실시간 모니터링 및<br />
                원격 제어가 가능합니다.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <ScrollToTop />
    </div>
  );
};

export default UnAttendAuth;
