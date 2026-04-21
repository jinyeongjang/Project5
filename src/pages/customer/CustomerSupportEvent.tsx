import React, { useEffect, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { NotionRenderer } from 'react-notion';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';

import ScrollToTop from '../../components/ScrollToTop';
import CustomerSidebar from '../../components/CustomerSidebar';
import { IoArrowBack } from 'react-icons/io5';

const CustomerSupportEvent: React.FC = () => {
  const [response, setResponse] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentPageId = searchParams.get('page');

  const loadNotionPage = async (pageId: string) => {
    setLoading(true);
    setError(null);
    if (pageId !== currentPageId) {
      navigate(`?page=${pageId}`, { replace: true });
    }

    try {
      const { data } = await axios.get(`https://notion-api.splitbee.io/v1/page/${pageId}`);
      if (!data || Object.keys(data).length === 0) {
        throw new Error('No data found');
      }
      setResponse(data);
    } catch (err: any) {
      console.error('Error fetching Notion data:', err);
      setError('데이터를 불러오는 중 오류가 발생했습니다.');
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

  useLayoutEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.href) {
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
    const pageId = currentPageId || '15fa1962dab4801bbb2de8cf359379f2';
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
              이벤트
            </motion.h1>
          </div>
          <motion.p className="mb-8 text-left text-lg text-gray-700" variants={itemVariants}>
            이레페이에서 진행되는 이벤트를 확인하세요.
          </motion.p>
          <motion.hr className="my-12 border-gray-200 xs:my-8" variants={itemVariants} />

          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            </div>
          ) : error ? (
            <div className="rounded-lg bg-red-50 p-4 text-center text-red-500">
              <p>{error}</p>
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

export default CustomerSupportEvent;
