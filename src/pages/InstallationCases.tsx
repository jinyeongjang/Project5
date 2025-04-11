import React from 'react';
import ScrollToTop from '../components/ScrollToTop';
import { motion } from 'framer-motion';
import InstallationCasesSidebar from '../components/installationcases/InstallationCasesSidebar';

interface InstallationCaseProps {
  title: string;
  description: string;
  link: string;
}

const InstallationCase: React.FC<InstallationCaseProps> = ({ title, description, link }) => {
  return (
    <motion.div className="flex flex-col items-center rounded-lg border p-4 shadow-md" transition={{ duration: 0.3 }}>
      <h3 className="mb-2 text-xl font-bold text-gray-800">{title}</h3>
      <p className="mb-4 text-center text-sm text-gray-600">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl bg-yellow-600 px-6 py-3 text-lg font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-green-700 active:scale-95">
        자세히 보기
      </a>
    </motion.div>
  );
};

const InstallationCases: React.FC = () => {
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

  const cases = [
    {
      title: '땡큐쏭 설치사례',
      description: '첫 번째 성공적인 설치 사례를 소개합니다.',
      link: 'https://blog.naver.com/wndosdkdl/223698925583',
    },
    {
      title: '에브리데이 엘린 양산점',
      description: '두 번째 성공적인 설치 사례를 소개합니다.',
      link: 'https://blog.naver.com/wndosdkdl/223672248016',
    },
    {
      title: '에이치바이 양산',
      description: '세 번째 성공적인 설치 사례를 소개합니다.',
      link: 'https://blog.naver.com/wndosdkdl/223698965877',
    },
    {
      title: '마이독스 대연점',
      description: '네 번째 성공적인 설치 사례를 소개합니다.',
      link: 'https://blog.naver.com/wndosdkdl/223611563764',
    },
  ];

  return (
    <div className="container mx-auto mt-[100px] flex px-4 py-8 xs:mt-[100px] xs:flex-col">
      <InstallationCasesSidebar />

      <motion.div
        className="ml-[300px] flex-1 pl-8 xs:ml-0 xs:mt-[50px] xs:pl-0"
        initial="hidden"
        animate="visible"
        variants={containerVariants}>
        <motion.div className="w-full max-w-6xl rounded-lg bg-white p-8 sm:p-6 xs:p-4" variants={itemVariants}>
          <motion.h1
            className="mb-4 text-left text-4xl font-bold text-blue-600 xs:text-left xs:text-3xl"
            variants={itemVariants}>
            설치 사례
          </motion.h1>
          <motion.p className="mx-auto max-w-2xl text-gray-600" variants={itemVariants}></motion.p>
        </motion.div>

        <motion.div className="mt-8 w-full max-w-6xl rounded-lg bg-white p-8 xs:p-4" variants={itemVariants}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {cases.map((caseItem, index) => (
              <motion.div key={index} variants={itemVariants}>
                <InstallationCase {...caseItem} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-8 mt-8 flex w-full max-w-6xl flex-col items-center rounded-lg bg-white p-8 xs:p-4"
          variants={itemVariants}>
          <p className="mb-4 text-lg text-gray-700">더 많은 설치 사례를 보고싶다면 블로그를 방문해주세요.</p>
          <a
            href="https://blog.naver.com/wndosdkdl"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[400px] rounded-xl bg-green-500 px-6 py-3 text-lg font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-green-600 active:scale-95">
            네이버 블로그 방문하기
          </a>
        </motion.div>
      </motion.div>
      <ScrollToTop />
    </div>
  );
};

export default InstallationCases;
