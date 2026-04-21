import React, { useEffect, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { NotionRenderer } from 'react-notion';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

import ScrollToTop from '../../components/ScrollToTop';
import CustomerSidebar from '../../components/CustomerSidebar';
import { IoArrowBack } from 'react-icons/io5';

import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';

// 고객지원 FAQ 페이지 컴포넌트 - Notion API를 사용하여 페이지 내용 표시
const CustomerSupportFAQ: React.FC = () => {
  const [response, setResponse] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentPageId = searchParams.get('page');

  // 페이지 ID로 Notion 페이지 내용을 로드하는 함수
  const loadNotionPage = async (pageId: string) => {
    setLoading(true);
    if (pageId !== currentPageId) {
      navigate(`?page=${pageId}`, { replace: true });
    }

    try {
      const { data } = await axios.get(`https://notion-api.splitbee.io/v1/page/${pageId}`);
      setResponse(data);
    } catch (error) {
      console.error('Error fetching Notion data:', error);
    } finally {
      setLoading(false);
    }
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

  // 링크 클릭 핸들러 (이벤트 위임 사용)
  useLayoutEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.href) {
        // 현재 도메인 내부 링크인지 확인 (쿼리 파라미터 ?page= 포함)
        const url = new URL(anchor.href);
        if (url.origin === window.location.origin && url.searchParams.has('page')) {
          e.preventDefault();
          const pageId = url.searchParams.get('page');
          if (pageId) {
            loadNotionPage(pageId);
          }
        }
      }
    };

    const notionContainer = document.querySelector('.notion-container');
    if (notionContainer) {
      notionContainer.addEventListener('click', handleLinkClick as any);
    } else {
      document.addEventListener('click', handleLinkClick as any);
    }

    return () => {
      if (notionContainer) {
        notionContainer.removeEventListener('click', handleLinkClick as any);
      } else {
        document.removeEventListener('click', handleLinkClick as any);
      }
    };
  }, [response]);

  useEffect(() => {
    const pageId = currentPageId || '15fa1962dab480c4bb79dd4ffed101fc';
    loadNotionPage(pageId);

    const style = document.createElement('style');
    style.innerHTML = `
      .notion-page-header {
        display: none !important;
      }
      .notion {
        font-family: inherit !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [location.search]);

  return (
    <div className="container mx-auto mt-[100px] flex px-4 py-8 xs:mt-[0px] xs:flex-col">
      <CustomerSidebar />

      <motion.div
        className="ml-[300px] flex-1 pl-8 xs:ml-0 xs:mt-[150px] xs:pl-0"
        initial="hidden"
        animate="visible"
        variants={containerVariants}>
        <motion.div className="w-full max-w-6xl rounded-lg bg-white p-8 xs:p-4" variants={itemVariants}>
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
              자주 묻는 질문
            </motion.h1>
          </div>
          <motion.p className="mb-8 text-left text-lg text-gray-700" variants={itemVariants}>
            고객님들이 자주 묻는 질문들을 모았습니다.
          </motion.p>
          <motion.hr className="my-12 border-gray-200 xs:my-8" variants={itemVariants} />

          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            </div>
          ) : (
            <div className="notion-container -mt-[0px]">
              <NotionRenderer blockMap={response} fullPage={true} mapPageUrl={(pageId) => `?page=${pageId}`} />
            </div>
          )}
        </motion.div>
      </motion.div>
      <ScrollToTop />
    </div>
  );
};

export default CustomerSupportFAQ;
