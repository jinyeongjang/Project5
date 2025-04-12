import React, { useEffect } from 'react';
import SwiperCarousel from '../components/manlesscafe/SwiperCarousel';
import { LuMessageCircle } from 'react-icons/lu';
import { FaPhoneAlt } from 'react-icons/fa';
import ScrollToTop from '../components/ScrollToTop';
import { motion } from 'framer-motion';

// 타입 정의 추가
declare global {
  interface Window {
    ChannelIO?: any;
    ChannelIOInitialized?: boolean;
  }
}

const Manlesscafe: React.FC = () => {
  useEffect(() => {
    // Channel Talk 초기화
    const initializeChannelTalk = () => {
      if (window.ChannelIOInitialized) {
        return;
      }

      const channelTalk = function () {
        if (window.ChannelIO) {
          window.ChannelIO('boot', {
            pluginKey: 'ad255906-6bd3-45c7-986e-6538ae948db7',
            hideChannelButtonOnBoot: false,
          });
        } else {
          window.ChannelIOInitialized = true;
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.async = true;
          script.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
          const firstScript = document.getElementsByTagName('script')[0];
          firstScript.parentNode?.insertBefore(script, firstScript);
        }
      };
      channelTalk();
    };

    initializeChannelTalk();
  }, []);

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

  const handleChannelTalk = () => {
    if (window.ChannelIO) {
      window.ChannelIO('showMessenger');
    }
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
          무인전자담배 매장창업
        </motion.h1>
        <motion.hr className="my-6 border-gray-200" variants={itemVariants} />

        <motion.div className="mb-8 overflow-hidden rounded-xl shadow-lg" variants={itemVariants}>
          <SwiperCarousel />
        </motion.div>

        {/* <motion.div className="md:grid-cols-0 mb-12 grid grid-cols-2 gap-8" variants={itemVariants}>
          <motion.img
            src="\images\manlesscafe\manlesscafeinfo1.png"
            alt="무인전자담배 창업 전면"
            className="h-auto w-full rounded-xl shadow-md"
            variants={itemVariants}
          />
        </motion.div> */}

        <motion.div className="md:grid-cols-0 mb-12 grid grid-cols-1 gap-8" variants={itemVariants}>
          <motion.img
            src="\images\manlesscafe\manlesscafeinfomain.png"
            alt="무인전자담배 매장창업-info"
            className="h-auto w-full rounded-xl shadow-md"
            variants={itemVariants}
          />

          <motion.img
            src="\images\manlesscafe\manlesscafeinfo1.png"
            alt="무인전자담배 매장창업-1"
            className="h-auto w-full rounded-xl shadow-md"
            variants={itemVariants}
          />

          <motion.img
            src="\images\manlesscafe\manlesscafeinfo2.png"
            alt="무인전자담배 매장창업-2"
            className="h-auto w-full rounded-xl shadow-md"
            variants={itemVariants}
          />

          <motion.img
            src="\images\manlesscafe\manlesscafeinfo3.png"
            alt="무인전자담배 매장창업-3"
            className="mt-[-20px] h-auto w-full rounded-xl shadow-md"
            variants={itemVariants}
          />

          <motion.img
            src="\images\manlesscafe\manlesscafeinfo4.png"
            alt="무인전자담배 매장창업-4"
            className="h-auto w-full rounded-xl shadow-md"
            variants={itemVariants}
          />

          <motion.img
            src="\images\manlesscafe\manlesscafeinfo5.png"
            alt="무인전자담배 매장창업-5"
            className="h-auto w-full rounded-xl shadow-md"
            variants={itemVariants}
          />
          <motion.img
            src="\images\manlesscafe\manlesscafeinfo6.png"
            alt="무인전자담배 매장창업-6"
            className="h-auto w-full rounded-xl shadow-md"
            variants={itemVariants}
          />

          <motion.img
            src="\images\manlesscafe\manlesscafeinfo7.png"
            alt="무인전자담배 매장창업-7"
            className="h-auto w-full rounded-xl shadow-md"
            variants={itemVariants}
          />

          <motion.img
            src="\images\manlesscafe\manlesscafeinfo8.png"
            alt="무인전자담배 매장창업-8"
            className="h-auto w-full rounded-xl shadow-md"
            variants={itemVariants}
          />

          <motion.img
            src="\images\manlesscafe\manlesscafeinfo9.png"
            alt="무인전자담배 매장창업-9"
            className="h-auto w-full rounded-xl shadow-md"
            variants={itemVariants}
          />

          <motion.img
            src="\images\manlesscafe\manlesscafeinfo10.png"
            alt="무인전자담배 매장창업-10"
            className="h-auto w-full rounded-xl shadow-md"
            variants={itemVariants}
          />

          <motion.img
            src="\images\manlesscafe\manlesscafeinfo11.png"
            alt="무인전자담배 매장창업-11"
            className="h-auto w-full rounded-xl shadow-md"
            variants={itemVariants}
          />

          <motion.img
            src="\images\manlesscafe\manlesscafeinfo12.png"
            alt="무인전자담배 매장창업-12"
            className="h-auto w-full rounded-xl shadow-md"
            variants={itemVariants}
          />

          <motion.img
            src="\images\manlesscafe\manlesscafeinfo13.png"
            alt="무인전자담배 매장창업-13"
            className="h-auto w-full rounded-xl shadow-md"
            variants={itemVariants}
          />
        </motion.div>

        <motion.div className="space-y-4" variants={itemVariants}>
          <div className="rounded-lg bg-gray-50 p-6">
            <h3 className="mb-2 text-left text-xl font-semibold text-gray-800">채널톡으로 실시간 상담 문의하기</h3>
            <p className="text-left text-gray-600">
              우측 하단의 채널톡 버튼을 클릭하시거나 아래에 '채널톡 상담하기' 버튼을 눌러 실시간 상담이 가능합니다.
              <br></br>
              영업시간 외 문의는 다음 영업일에 순차적으로 답변 드리겠습니다.
            </p>
            <p className="mt-4 text-left text-sm text-gray-500">
              기존고객 (AS문의) 영업시간: 평일 09:00 ~ 21:00<br></br>주말.공휴일: 10:00~18:00<br></br>신규상담: 평일
              09:00~18:00
            </p>
            <button
              onClick={handleChannelTalk}
              className="mt-6 flex w-[200px] items-center justify-center rounded-xl bg-yellow-600 px-6 py-3 text-white shadow-lg transition duration-300 hover:bg-yellow-700 active:bg-yellow-800">
              <LuMessageCircle className="h-5 w-5" />
              <span className="ml-2">창업 문의하기</span>
            </button>

            <div className="mt-2 h-full rounded-lg bg-gray-50 shadow-sm">
              <h2 className="mb-4 text-left text-xl font-semibold text-gray-800">창업문의: 1661-9033</h2>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <ScrollToTop />
    </div>
  );
};

export default Manlesscafe;
