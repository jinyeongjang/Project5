import React from 'react';
import { motion } from 'framer-motion';
import { IoCheckmarkOutline } from 'react-icons/io5';
import ScrollToTop from '../../components/ScrollToTop';
import TossTerminalsSidebar from '../../components/tossterminals/TossTerminalsSidebar';

interface FeatureSectionProps {
  title?: string;
  features: string[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, features }) => (
  <div className="mb-4">
    {title && <p className="mb-2 text-left text-xl font-semibold text-gray-800 sm:text-lg xs:text-base">{title}</p>}
    <div className="h-full rounded-xl p-6 xs:p-3">
      {features.map((feature, index) => (
        <p key={index} className="flex items-center text-left text-lg text-gray-700 sm:text-lg xs:text-base">
          <IoCheckmarkOutline className="mr-2 text-green-500" /> {feature}
        </p>
      ))}
    </div>
  </div>
);

const TossTerminalsIntroduce: React.FC = () => {
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

  const featureSections = [
    {
      title: '프론트+터미널',
      features: ['애플.삼성.간편페이.NFC결제', '프론트 첫화면 꾸미기', '미니 키오스크', '포인트 적립', '신분증 검사기'],
    },
    {
      title: '프론트+프로그램+터미널',
      features: ['애플.삼성.간편페이.NFC결제', '프론트 첫화면 꾸미기', '미니 키오스크', '포인트 적립', '신분증 검사기'],
    },
    {
      title: '프론트+PC 포스',
      features: ['애플.삼성.간편페이.NFC결제', '프론트 첫화면 꾸미기', '키오스크 모드', '포인트 적립', '신분증 검사기'],
    },
    {
      title: '터미널',
      features: ['백업 단말기', '영수증 프린트'],
    },
    {
      title: '포스 프로그램',
      features: [
        '업종별 다른 유형',
        '카페, 음식점, 도.소매, 서비스업',
        '카페, 재고 관리.시재 관리',
        '배달3사 실시간 매출 연동',
        '바코드 스캔 결제',
        '토스 앱으로 실시간 매출 조회',
        '선불권 관리',
        '후불 매장 셀프 결제',
      ],
    },
    {
      title: '포스 프로그램',
      features: [
        '업종별 다른 유형',
        '카페, 음식점, 도.소매, 서비스업',
        '카페, 재고 관리.시재 관리',
        '배달3사 실시간 매출 연동',
        '바코드 스캔 결제',
        '토스 앱으로 실시간 매출 조회',
        '선불권 관리',
        '후불 매장 셀프 결제',
      ],
    },
    {
      title: '',
      features: [''],
    },
    {
      title: '터미널',
      features: ['백업 단말기', '영수증 프린트'],
    },
  ];

  return (
    <div className="container mx-auto mt-[100px] flex px-4 py-8 xs:mt-[100px] xs:flex-col xs:px-2">
      <TossTerminalsSidebar />

      <motion.div
        className="ml-[300px] flex-1 pl-8 xs:ml-0 xs:mt-[50px] xs:pl-0"
        initial="hidden"
        animate="visible"
        variants={containerVariants}>
        <motion.div className="w-full max-w-6xl rounded-lg bg-white p-8 sm:p-6 xs:p-3" variants={itemVariants}>
          {/* 토스단말기 소개 부분 섹션 */}
          <div className="mb-12 flex items-center gap-[200px]">
            <div className="xs:mt-2 xs:text-left">
              <motion.h1
                className="mb-4 text-left text-4xl font-bold text-blue-600 xs:text-left xs:text-3xl"
                variants={itemVariants}>
                토스단말기
              </motion.h1>
              <motion.p
                className="mb-4 text-left text-4xl font-bold text-gray-800 xs:text-left xs:text-2xl"
                variants={itemVariants}>
                업종과 매장 상황에 따른<br></br> 맞춤형 제품
              </motion.p>
            </div>
          </div>

          {/* 주요 특징 grid */}
          <div className="mb-16 grid grid-cols-3 gap-8 xs:grid-cols-1">
            <motion.div className="space-y-4" variants={itemVariants}>
              <div className="h-full rounded-xl border-2 bg-gray-50 p-6 shadow-sm xs:p-4">
                <h2 className="mb-4 text-left text-xl font-semibold text-blue-600">맞춤형 결제</h2>
                <p className="text-left text-lg text-gray-700 xs:text-base">
                  각 업종별 특성과 매장 상황에 맞는
                  <br />
                  최적화된 결제 시스템을 제공하여
                  <br /> 효율적인 운영을 지원합니다.
                </p>
              </div>
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              <div className="h-full rounded-xl border-2 bg-gray-50 p-6 shadow-sm xs:p-4">
                <h2 className="mb-4 text-left text-xl font-semibold text-blue-600">간편한 설치</h2>
                <p className="text-left text-lg text-gray-700 xs:text-base">
                  토스단말기 설치부터 운영까지 <br />
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
                <h2 className="mb-4 text-left text-xl font-semibold text-blue-600">다양한 결제</h2>
                <p className="text-left text-lg text-gray-700 xs:text-base">
                  카드, 현금, 모바일 페이 등<br />
                  다양한 결제 수단을 지원하여
                  <br />
                  고객 편의성을 높입니다.
                </p>
              </div>
            </motion.div>
          </div>

          {/* 토스 프론트와 터미널 주요기능 섹션 */}
          <div className="mt-16">
            <motion.h1
              className="mb-8 text-left text-4xl font-bold text-blue-600 xs:text-left xs:text-3xl"
              variants={itemVariants}>
              토스 프론트와 터미널 주요기능
            </motion.h1>

            <motion.img
              src="/images/tossterminals/tosscollabo2.png"
              alt="토스단말기 이미지 2"
              className="mb-8 h-[190px] w-full rounded-xl object-cover transition-transform duration-300 hover:scale-105 xs:h-[300px]"
              variants={itemVariants}
            />

            <motion.div className="grid grid-cols-3 gap-4 xs:grid-cols-1 xs:grid-rows-9" variants={itemVariants}>
              {featureSections.map((section, index) => (
                <FeatureSection key={index} title={section.title} features={section.features} />
              ))}
            </motion.div>
          </div>
        </motion.div>

        <ScrollToTop />
      </motion.div>
    </div>
  );
};

export default TossTerminalsIntroduce;
