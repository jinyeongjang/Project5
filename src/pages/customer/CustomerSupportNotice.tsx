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

const CustomerSupportNotice: React.FC = () => {
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
      // URL을 업데이트하여 새로고침 시에도 유지되도록 함
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
  // react-notion은 mapPageUrl로 생성된 링크에 대해 일반 <a> 태그를 렌더링하므로,
  // 이를 가로채서 preventDefault 후 navigate()로 SPA 이동을 처리해야 함.
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

    // Notion 렌더러가 마운트된 컨테이너에 이벤트 리스너 추가
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
  }, [response]); // response가 바뀌어 렌더링 구조가 바뀔 때마다 리스너 재확인

  useEffect(() => {
    // 초기 로드 시 또는 URL 변경 시 데이터 로드
    // 만약 내부 클릭으로 loadNotionPage를 불렀다면 URL이 이미 바뀌어 있을 수 있음.
    // 하지만 뒤로가기 버튼 등을 지원하기 위해 location.search 감지 필요
    const pageId = currentPageId || '15fa1962dab48096b842eb6b35e66ad6';
    loadNotionPage(pageId);

    // Custom styles for notion override
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
  }, [location.search]); // navigate로 인해 URL이 바뀌면 다시 fetch (중복 호출 방지는 loadNotionPage 내부 로직이나 상태로 관리 가능하지만, 간단히 둠)

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
              공지사항
            </motion.h1>
          </div>
          <motion.p className="mb-8 text-left text-lg text-gray-700" variants={itemVariants}>
            중요한 공지사항과 업데이트 내용을 확인하세요.
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

export default CustomerSupportNotice;
