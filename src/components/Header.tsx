import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SubMenu from './SubMenu';
import SubMenuPos from './pos/SubMenuPos';
import SubMenuKiosk from './kiosk/SubMenuKiosk';
import SubMenuTossTerminals from './tossterminals/SubMenuTossTerminals';
import SubMenuWireandWireless from './wireandwireless/SubMenuWireandWireless';
import MobileHeader from './MobileHeader';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [title, setTitle] = useState('주앤아이');
  const [isAnimating, setIsAnimating] = useState(false);
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);
  const [isPosMenuVisible, setIsPosMenuVisible] = useState(false);
  const [isKioskMenuVisible, setIsKioskMenuVisible] = useState(false);
  const [isTossMenuVisible, setIsTossMenuVisible] = useState(false);
  const [isWireMenuVisible, setIsWireMenuVisible] = useState(false);
  const [leaveTimeout, setLeaveTimeout] = useState<number | null>(null);
  const [posLeaveTimeout, setPosLeaveTimeout] = useState<number | null>(null);
  const [kioskLeaveTimeout, setKioskLeaveTimeout] = useState<number | null>(null);
  const [tossLeaveTimeout, setTossLeaveTimeout] = useState<number | null>(null);
  const [wireLeaveTimeout, setWireLeaveTimeout] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [showText, setShowText] = useState(true);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setTitle('이레페이');
        setShowText(false);
        setTimeout(() => {
          setShowLogo(true);
        }, 500); // 텍스트가 사라진 후 로고가 나타나는 시간 조정
      }, 500);
    }, 2000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    setIsCategoryVisible(true);
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
    }
  };

  const handleMouseLeave = () => {
    setLeaveTimeout(
      window.setTimeout(() => {
        setIsCategoryVisible(false);
      }, 200),
    );
  };

  const handlePosMouseEnter = () => {
    setIsPosMenuVisible(true);
    if (posLeaveTimeout) {
      clearTimeout(posLeaveTimeout);
    }
  };

  const handlePosMouseLeave = () => {
    setPosLeaveTimeout(
      window.setTimeout(() => {
        setIsPosMenuVisible(false);
      }, 200),
    );
  };

  const handleKioskMouseEnter = () => {
    setIsKioskMenuVisible(true);
    if (kioskLeaveTimeout) {
      clearTimeout(kioskLeaveTimeout);
    }
  };

  const handleKioskMouseLeave = () => {
    setKioskLeaveTimeout(
      window.setTimeout(() => {
        setIsKioskMenuVisible(false);
      }, 200),
    );
  };

  const handleTossMouseEnter = () => {
    setIsTossMenuVisible(true);
    if (tossLeaveTimeout) {
      clearTimeout(tossLeaveTimeout);
    }
  };

  const handleTossMouseLeave = () => {
    setTossLeaveTimeout(
      window.setTimeout(() => {
        setIsTossMenuVisible(false);
      }, 200),
    );
  };

  const handleWireMouseEnter = () => {
    setIsWireMenuVisible(true);
    if (wireLeaveTimeout) {
      clearTimeout(wireLeaveTimeout);
    }
  };

  const handleWireMouseLeave = () => {
    setWireLeaveTimeout(
      window.setTimeout(() => {
        setIsWireMenuVisible(false);
      }, 200),
    );
  };

  const getHeaderBackground = () => {
    if (isHomePage) {
      return scrolled ? 'bg-white text-black' : 'bg-transparent text-white';
    }
    return 'bg-white text-black';
  };

  return (
    <header
      className={`${className} ${getHeaderBackground()} fixed left-0 right-0 z-50 mx-auto px-4 pb-2 pt-2 xs:left-0 xs:pb-10`}>
      <div className="mx-auto px-4">
        <div className="relative left-10 mt-4 flex items-center justify-center">
          <Link
            to="/"
            className={`absolute left-[80px] flex flex-col items-center transition-all duration-1000 ease-in-out hover:opacity-80 xs:-left-[58px]`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {showText && (
              <div
                className={`flex items-center pt-1 text-lg transition-all duration-1000 xs:ml-[20px] ${
                  isAnimating ? 'translate-x-[-100%] transform opacity-0' : 'translate-x-0 transform opacity-100'
                }`}>
                {title}
              </div>
            )}
            {showLogo && (
              <motion.img
                src="/images/irehpayLogo.png"
                alt="이레페이 로고"
                className={`-mt-[8px] h-[60px] xs:mt-2 ${isHomePage && !scrolled ? 'brightness-0 invert' : ''}`}
                initial={{ x: -50, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    ease: [0.16, 1.5, 0.8, 1.5],
                  },
                }}
              />
            )}
          </Link>

          <nav className="hidden md:flex">
            <ul className="flex flex-wrap items-center justify-center gap-2 text-sm lg:gap-4">
              <li
                className="flex items-center justify-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/about"
                    className="group flex h-full w-full items-center justify-center rounded-xl px-1.5 py-1.5 transition duration-300 hover:bg-slate-500 hover:bg-opacity-50"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className="relative">
                      회사소개
                      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </motion.div>
                <SubMenu isVisible={isCategoryVisible} />
              </li>
              <li className="relative flex items-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/installation-cases"
                    className="group flex h-full w-full items-center justify-center rounded-xl px-1.5 py-1.5 transition duration-300 hover:bg-slate-500 hover:bg-opacity-50"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className="relative">
                      설치사례
                      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </motion.div>
              </li>
              <li
                className="relative flex items-center justify-center"
                onMouseEnter={handleWireMouseEnter}
                onMouseLeave={handleWireMouseLeave}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/wire/wireLC7403SInfo"
                    className="group flex h-full w-full items-center justify-center rounded-xl px-1.5 py-1.5 transition duration-300 hover:bg-slate-500 hover:bg-opacity-50"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className="relative">
                      유·무선카드단말
                      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </motion.div>
                <SubMenuWireandWireless isVisible={isWireMenuVisible} />
              </li>
              <li
                className="relative flex items-center justify-center"
                onMouseEnter={handlePosMouseEnter}
                onMouseLeave={handlePosMouseLeave}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/pos/okposInfo"
                    className="group flex h-full w-full items-center justify-center rounded-xl px-1.5 py-1.5 transition duration-300 hover:bg-slate-500 hover:bg-opacity-50"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className="relative">
                      포스(POS)
                      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </motion.div>
                <SubMenuPos isVisible={isPosMenuVisible} />
              </li>

              <li
                className="relative flex items-center justify-center"
                onMouseEnter={handleTossMouseEnter}
                onMouseLeave={handleTossMouseLeave}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/tossterminals/tossfrontInfo"
                    className="group flex h-full w-full items-center justify-center rounded-xl px-1.5 py-1.5 transition duration-300 hover:bg-slate-500 hover:bg-opacity-50"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className="relative">
                      TOSS(토스단말기)
                      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </motion.div>
                <SubMenuTossTerminals isVisible={isTossMenuVisible} />
              </li>

              <li
                className="relative flex items-center justify-center"
                onMouseEnter={handleKioskMouseEnter}
                onMouseLeave={handleKioskMouseLeave}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/kiosk/okposInfo"
                    className="group flex h-full w-full items-center justify-center rounded-xl px-1.5 py-1.5 transition duration-300 hover:bg-slate-500 hover:bg-opacity-50"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className="relative">
                      키오스크
                      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </motion.div>
                <SubMenuKiosk isVisible={isKioskMenuVisible} />
              </li>

              <li className="relative flex items-center justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/unattend-auth"
                    className="group flex h-full w-full items-center justify-center rounded-xl px-1.5 py-1.5 transition duration-300 hover:bg-slate-500 hover:bg-opacity-50"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className="relative">
                      전화무인인증/CCTV
                      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </motion.div>
              </li>

              <li className="relative flex items-center justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/manlesscafe"
                    className="group flex h-full w-full items-center justify-center rounded-xl px-1.5 py-1.5 transition duration-300 hover:bg-slate-500 hover:bg-opacity-50"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className="relative">
                      무인전자담배 창업
                      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </motion.div>
              </li>

              <li className="relative flex items-center justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/customer-support"
                    className="group flex h-full w-full items-center justify-center rounded-xl px-1.5 py-1.5 transition duration-300 hover:bg-slate-500 hover:bg-opacity-50"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className="relative">
                      고객센터/문의하기/이벤트
                      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </motion.div>
              </li>

              <li className="text-center">
                <a
                  href="tel:1661-9033"
                  className="group rounded-xl border border-lime-800 bg-lime-800 px-3 py-1.5 text-sm text-white shadow-lg transition duration-300 hover:bg-lime-900 hover:bg-opacity-50">
                  <span className="relative">
                    문의하기 1661-9033
                    <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>
            </ul>
          </nav>

          <div className="absolute right-4 block lg:hidden">
            <MobileHeader
              isCategoryVisible={isCategoryVisible}
              isPosMenuVisible={isPosMenuVisible}
              isKioskMenuVisible={isKioskMenuVisible}
              isTossMenuVisible={isTossMenuVisible}
              isWireMenuVisible={isWireMenuVisible}
              onMouseEnter={{
                category: handleMouseEnter,
                pos: handlePosMouseEnter,
                kiosk: handleKioskMouseEnter,
                toss: handleTossMouseEnter,
                wire: handleWireMouseEnter,
              }}
              onMouseLeave={{
                category: handleMouseLeave,
                pos: handlePosMouseLeave,
                kiosk: handleKioskMouseLeave,
                toss: handleTossMouseLeave,
                wire: handleWireMouseLeave,
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
