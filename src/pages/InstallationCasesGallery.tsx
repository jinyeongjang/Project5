import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { NotionRenderer } from 'react-notion';
import ScrollToTop from '../components/ScrollToTop';
import InstallationCasesSidebar from '../components/installationcases/InstallationCasesSidebar';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import 'react-notion/src/styles.css';

const InstallationCasesGallery: React.FC = () => {
  const [response, setResponse] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentPageId = searchParams.get('page');

  // 페이지 ID로 Notion 페이지 내용을 로드하는 함수
  const loadNotionPage = (pageId: string) => {
    setLoading(true);
    if (pageId !== currentPageId) {
      navigate(`?page=${pageId}`, { replace: true });
    }
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${pageId}`)
      .then(({ data }) => {
        setResponse(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching Notion data:', error);
        setLoading(false);
      });
  };

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

  useEffect(() => {
    const pageId = currentPageId || '168a1962dab480a0a403f7b946665349';
    loadNotionPage(pageId);

    const style = document.createElement('style');
    style.innerHTML = `
      .notion-page-header {
        display: none;
      }
      .notion-link {
        cursor: pointer;
        color: #2563eb;
        text-decoration: underline;
      }
      .notion-link:hover {
        opacity: 0.8;
      }
      .notion-content {
        clip-path: inset(400px 0 0 0);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [navigate, location.search]);

  return (
    <div className="container mx-auto mt-[100px] flex px-4 py-8 xs:mt-[100px] xs:flex-col">
      <InstallationCasesSidebar />

      <motion.div
        className="ml-[300px] flex-1 pl-8 xs:ml-0 xs:mt-[50px] xs:pl-0"
        initial="hidden"
        animate="visible"
        variants={containerVariants}>
        <motion.div className="w-full max-w-6xl rounded-lg p-8 xs:p-4" variants={itemVariants}>
          <div className="mb-4 flex items-center gap-4">
            {currentPageId && (
              <motion.button
                className="flex h-[50px] w-[50px] items-center justify-center rounded-xl px-2 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => navigate(-1)}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <IoArrowBack className="h-12 w-12" />
              </motion.button>
            )}
            <motion.h1 className="text-4xl font-bold text-blue-600 xs:text-3xl" variants={itemVariants}>
              설치 현황
            </motion.h1>
          </div>
          <motion.p className="mb-8 text-left text-lg text-gray-700" variants={itemVariants}>
            이레페이 설치 현황을 확인하세요.
          </motion.p>

          <motion.hr className="my-12 border-gray-200 xs:my-8" variants={itemVariants} />

          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            </div>
          ) : Object.keys(response).length > 0 ? (
            <div
              className="notion-content -mt-[400px]"
              onClick={(e) => {
                const target = e.target as HTMLElement;
                const link = target.closest('a');
                if (link) {
                  e.preventDefault();
                  const href = link.getAttribute('href');
                  if (href?.startsWith('/')) {
                    const pageId = href.split('-').pop();
                    if (pageId) {
                      navigate(`?page=${pageId}`);
                      loadNotionPage(pageId);
                    }
                  } else if (href) {
                    window.open(href, '_blank');
                  }
                }
              }}>
              <NotionRenderer blockMap={response} fullPage={true} />
            </div>
          ) : (
            <motion.div className="space-y-4" variants={itemVariants}>
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">서비스 준비중입니다.</h3>
                <p className="text-gray-600">
                  보다 나은 서비스 제공을 위해 준비중입니다. 빠른 시일 내에 찾아뵙겠습니다.
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
      <ScrollToTop />
    </div>
  );
};

export default InstallationCasesGallery;
