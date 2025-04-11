import React, { useState, useEffect } from 'react';
import SwiperCarousel from '../components/home/SwiperCarousel';
import MainMenu from '../components/home/MainMenu';
import { BsClipboardData, BsWallet2 } from 'react-icons/bs';
import { RiCustomerService2Fill } from 'react-icons/ri';
import ScrollToTop from '../components/ScrollToTop';
import { motion } from 'framer-motion';
import HomePopup from '../components/HomePopup';

const Home: React.FC = () => {
  // 팝업 상태 관리
  const [showPopup, setShowPopup] = useState(false);
  const [dontShowAgainToday, setDontShowAgainToday] = useState(false);

  // 팝업 즉시 표시
  useEffect(() => {
    // 타임아웃 없이 즉시 팝업 표시
    setShowPopup(true);
  }, []);

  // 팝업 닫기 함수
  const handleClosePopup = () => {
    setShowPopup(false);

    // "오늘 다시 보지 않기" 체크했으면 오늘 날짜 저장
    if (dontShowAgainToday) {
      localStorage.setItem('popupDontShowToday', new Date().toDateString());
      sessionStorage.setItem('popupClosed', 'true');
    }
  };

  // "오늘 다시 보지 않기" 토글 함수
  const handleToggleDontShowAgain = () => {
    setDontShowAgainToday((prev) => !prev);
  };

  // 기존 컨테이너 및 아이템 애니메이션 설정
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
    <div className="relative min-h-screen">
      {/* 분리된 팝업 컴포넌트 */}
      <HomePopup
        isVisible={showPopup}
        dontShowAgainToday={dontShowAgainToday}
        onClose={handleClosePopup}
        onToggleDontShow={handleToggleDontShowAgain}
      />

      {/* 기존 컨텐츠 */}
      <section className="relative">
        <SwiperCarousel />
        <div className="relative z-40">
          <MainMenu />
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.h2 className="mt-[50px] text-left text-4xl font-bold tracking-tighter" variants={itemVariants}>
            주요 서비스
          </motion.h2>
          <motion.hr className="my-12 border-gray-200" variants={itemVariants} />

          <div className="ml-[220px] mt-[50px] grid max-w-max grid-cols-2 gap-8 xs:ml-[110px] xs:mt-[30px] xs:grid-cols-1 xs:gap-[2px]">
            <motion.div
              variants={itemVariants}
              className="mb-[50px] flex items-center justify-center xs:mb-[30px] xs:mt-[50px] xs:justify-start">
              <BsClipboardData className="ml-[200px] w-[80px] text-[50px] xs:ml-[0px]" />
            </motion.div>

            <motion.div variants={itemVariants} className="rounded-lg">
              <h3 className="mb-2 text-left text-[40px] font-semibold tracking-tighter xs:text-[30px]">스마트 주문</h3>
              <p className="text-left text-[20px] tracking-tighter text-gray-600 xs:text-[14px]">
                메뉴를 한번에 볼 수 있는 주문 시스템으로 <br />더 빠르고 정확한 주문처리를 지원합니다.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mb-[50px] flex items-center justify-start xs:mb-[30px] xs:mt-[50px]">
              <BsWallet2 className="ml-[260px] w-[80px] text-[50px] xs:ml-[0px]" />
            </motion.div>

            <motion.div variants={itemVariants} className="rounded-lg">
              <div className="flex items-center gap-4 xs:mt-[0px] xs:flex-col xs:items-start">
                <h3 className="mb-2 text-left text-[40px] font-semibold tracking-tighter xs:text-[30px]">간편 결제</h3>
                <div className="flex items-center gap-2">
                  <img src="images/payment_kakaopay.png" className="h-[25px] xs:h-[20px]" alt="kakaopay" />
                  <img src="images/payment_samsungpay.png" className="h-[25px] xs:h-[20px]" alt="samsungpay" />
                  <img src="images/payment_applepay.svg" className="h-[25px] xs:h-[20px]" alt="applepay" />
                </div>
              </div>
              <p className="text-left text-[20px] tracking-tighter text-gray-600 xs:text-[14px]">
                카카오페이, 삼성페이, 애플페이 등<br />
                다양한 결제수단을 지원합니다.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mb-[50px] flex items-center justify-center xs:mb-[30px] xs:mt-[50px] xs:justify-start">
              <RiCustomerService2Fill className="ml-[200px] w-[80px] text-[50px] xs:ml-[0px]" />
            </motion.div>

            <motion.div variants={itemVariants} className="rounded-lg">
              <h3 className="mb-2 text-left text-[40px] font-semibold tracking-tighter xs:mt-[0px] xs:text-[30px]">
                맞춤 서비스
              </h3>
              <p className="text-left text-[20px] tracking-tighter text-gray-600 xs:text-[14px]">
                다양한 상품을 제시하여 고객의 니즈에 맞는 <br />
                맞춤형 서비스를 지원합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.h2 className="mt-[0px] text-left text-4xl font-bold" variants={itemVariants}>
            고객 후기
          </motion.h2>
          <motion.hr className="my-12 border-gray-200" variants={itemVariants} />

          <div className="mb-[220px] grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div variants={itemVariants} className="rounded-lg bg-gray-50 p-8 shadow-lg">
              <div>
                <div className="font-semibold">부산 OO 소재 카페</div>
                <div className="text-sm text-gray-500">2024. 07.</div>
              </div>
              <p className="mt-4 text-gray-600">
                "키오스크 도입 후 주문 처리가 빨라져 피크타임에도 대기 시간이 크게 줄었습니다.<br></br>덕분에 매출이 30%
                이상 증가했습니다."
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="rounded-lg bg-gray-50 p-8 shadow-lg">
              <div>
                <div className="font-semibold">경남 OO 소재 베이커리 </div>
                <div className="text-sm text-gray-500">2024. 11.</div>
              </div>
              <p className="mt-4 text-gray-600">
                "POS 시스템 도입으로 매장 관리가 한결 수월해졌습니다.<br></br>특히 직원 교육 시간이 줄어들어 운영
                효율성이 크게 개선되었습니다."
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="rounded-lg bg-gray-50 p-8 shadow-lg">
              <div>
                <div className="font-semibold">대구 OO 소재 식당</div>
                <div className="text-sm text-gray-500">2024. 02.</div>
              </div>
              <p className="mt-4 text-gray-600">
                "키오스크와 POS 연동으로 주문과 결제가 동시에 처리되어<br></br> 고객 대기 시간이 크게 줄었습니다. 덕분에
                재방문율도 높아졌습니다."
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="rounded-lg bg-gray-50 p-8 shadow-lg">
              <div>
                <div className="font-semibold">서울 OO 소재 카페</div>
                <div className="text-sm text-gray-500">2024. 05</div>
                <p className="mt-4 text-gray-600">
                  "무인 운영이 가능한 키오스크 시스템 덕분에 24시간 매장 운영이 가능해졌습니다.<br></br>야간 매출이
                  증가하여 전체 수익이 개선되었습니다."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <ScrollToTop />
    </div>
  );
};

export default Home;
