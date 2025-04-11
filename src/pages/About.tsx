import React from 'react';
import ScrollToTop from '../components/ScrollToTop';
import { BsCode, BsWallet, BsLightbulb, BsBuilding, BsPeople, BsGraphUp } from 'react-icons/bs';
import { motion } from 'framer-motion';

const About: React.FC = () => {
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
      <div className="flex-1">
        <motion.div className="bg-white p-8" initial="hidden" animate="visible" variants={containerVariants}>
          <motion.section className="mb-[100px]" variants={itemVariants}>
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">회사 비전</h2>
            <p className="text-gray-700">고객의 성장을 최고의 가치로 생각하는 기업</p>
          </motion.section>

          <motion.section className="mb-[100px]" variants={itemVariants}>
            <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">주요 사업 영역</h2>
            <div className="mx-auto grid max-w-4xl grid-cols-1 justify-items-center gap-6 md:grid-cols-3">
              <motion.div
                className="flex flex-col items-center rounded-lg p-6 text-center transition-transform"
                variants={itemVariants}>
                <BsCode className="mb-4 text-4xl text-blue-600" />
                <h3 className="mb-2 font-semibold text-pink-600">
                  고객 맞춤형 결제솔루션 <br /> 개발 및 제공
                </h3>
              </motion.div>

              <motion.div
                className="flex flex-col items-center rounded-lg p-6 text-center transition-transform"
                variants={itemVariants}>
                <BsWallet className="mb-4 text-4xl text-green-600" />
                <h3 className="mb-2 font-semibold text-green-600">
                  키오스크, 카드단말 등<br /> 결제 시스템 제공
                </h3>
              </motion.div>

              <motion.div
                className="flex flex-col items-center rounded-lg p-6 text-center transition-transform"
                variants={itemVariants}>
                <BsLightbulb className="mb-4 text-4xl text-purple-600" />
                <h3 className="mb-2 font-semibold text-purple-600">
                  유.무인 매장
                  <br />
                  운영 솔루션
                </h3>
              </motion.div>
            </div>
          </motion.section>

          <motion.section className="mb-[100px]" variants={itemVariants}>
            <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">회사 가치</h2>
            <div className="mx-auto grid max-w-4xl grid-cols-1 justify-items-center gap-6 md:grid-cols-3">
              <motion.div
                className="flex flex-col items-center rounded-lg p-6 text-center transition-transform"
                variants={itemVariants}>
                <BsBuilding className="mb-4 text-4xl text-blue-600" />
                <h3 className="mb-2 font-semibold text-blue-600">
                  혁신 <br /> 최신 기술과 트렌드를 반영한
                  <br /> 혁신적인 솔루션 개발
                </h3>
              </motion.div>

              <motion.div
                className="flex flex-col items-center rounded-lg p-6 text-center transition-transform"
                variants={itemVariants}>
                <BsPeople className="mb-4 text-4xl text-sky-500" />
                <h3 className="mb-2 font-semibold text-sky-500">
                  신뢰 <br /> 고객과의 신뢰를 바탕으로
                  <br /> 지속적인 파트너십 구축
                </h3>
              </motion.div>

              <motion.div
                className="flex flex-col items-center rounded-lg p-6 text-center transition-transform"
                variants={itemVariants}>
                <BsGraphUp className="mb-4 text-4xl text-orange-600" />
                <h3 className="mb-2 font-semibold text-orange-600">
                  성장 <br /> 고객의 비즈니스 성장을 위한
                  <br /> 맞춤형 지원
                </h3>
              </motion.div>
            </div>
          </motion.section>

          <motion.section className="mb-[100px]" variants={itemVariants}>
            <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">기업 역량</h2>
            <div className="mx-auto grid max-w-4xl grid-cols-1 justify-items-center gap-6 md:grid-cols-3">
              <motion.div
                className="flex flex-col items-center rounded-lg p-6 text-center transition-transform"
                variants={itemVariants}>
                <h3 className="mb-2 text-xl font-semibold text-blue-600">기술 혁신</h3>
                <p className="text-gray-600">
                  키오스크를 통한 <br></br>멀티방 룸 제어 프로그램 개발
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col items-center rounded-lg p-6 text-center transition-transform"
                variants={itemVariants}>
                <h3 className="mb-2 text-xl font-semibold text-green-600">고객 서비스</h3>
                <p className="text-gray-600">
                  고객의 니즈를 파악하여<br></br>합리적인 시스템 제공
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col items-center rounded-lg p-6 text-center transition-transform"
                variants={itemVariants}>
                <h3 className="mb-2 text-xl font-semibold text-purple-600">협력 파트너</h3>
                <p className="text-gray-600">로비스 OKPOS POSBANK KOVAN SMATRO KORPAY KIS 시원아이티</p>
              </motion.div>
            </div>
          </motion.section>

          <motion.section className="text-center" variants={itemVariants}>
            <h2 className="mb-8 text-2xl font-semibold text-gray-800">Contact Us</h2>
            <div className="mx-auto max-w-[1000px] rounded-xl border-2 bg-gray-50 p-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-gray-800">본사</h3>
                  <p className="text-gray-600">경남 양산시 물금읍 야리4길 13 A1-city 3층 309호</p>
                  <p className="text-gray-600">1661-9033</p>
                </div>
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-gray-800">고객센터</h3>
                  <p className="text-gray-600">운영시간: 09:00 - 18:00</p>
                  <p className="text-gray-600">
                    기존고객(AS문의) 영업시간: 평일 09:00~21:00
                    <br />
                    주말.공휴일: 10:00~18:00
                    <br />
                    신규상담: 평일 09:00~18:00
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
        <ScrollToTop />
      </div>
    </div>
  );
};

export default About;
