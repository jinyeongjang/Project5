import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SubMenu from './SubMenu';
import SubMenuPos from './pos/SubMenuPos';
import SubMenuKiosk from './kiosk/SubMenuKiosk';
import SubMenuTossTerminals from './tossterminals/SubMenuTossTerminals';
import SubMenuWireandWireless from './wireandwireless/SubMenuWireandWireless';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';

interface MobileHeaderProps {
  isCategoryVisible: boolean;
  isPosMenuVisible: boolean;
  isKioskMenuVisible: boolean;
  isTossMenuVisible: boolean;
  isWireMenuVisible: boolean;
  onMouseEnter: {
    category: () => void;
    pos: () => void;
    kiosk: () => void;
    toss: () => void;
    wire: () => void;
  };
  onMouseLeave: {
    category: () => void;
    pos: () => void;
    kiosk: () => void;
    toss: () => void;
    wire: () => void;
  };
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  isCategoryVisible,
  isPosMenuVisible,
  isKioskMenuVisible,
  isTossMenuVisible,
  isWireMenuVisible,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="relative">
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center rounded-lg p-2 text-2xl transition-colors hover:bg-gray-100 hover:bg-opacity-20 xs:mt-2">
        {isMenuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
      </button>

      <div
        className={`fixed left-0 right-0 top-[72px] transform bg-white px-4 py-6 shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-[150%] opacity-0'
        }`}>
        <ul className="grid grid-cols-2 gap-2">
          <li
            className="flex items-center justify-center"
            onMouseEnter={onMouseEnter.category}
            onMouseLeave={onMouseLeave.category}>
            <Link
              to="/about"
              className="group flex h-full w-full items-center justify-center rounded-xl px-2 py-2 text-sm text-black transition duration-300 hover:bg-slate-500 hover:bg-opacity-50"
              onClick={handleLinkClick}>
              <span className="relative">
                회사소개
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <SubMenu isVisible={isCategoryVisible} />
          </li>

          <li className="flex items-center justify-center">
            <Link
              to="/installation-cases"
              className="group flex h-full w-full items-center justify-center rounded-xl px-2 py-2 text-sm text-black transition duration-300 hover:bg-slate-500 hover:bg-opacity-50"
              onClick={handleLinkClick}>
              <span className="relative">
                설치사례
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>

          <li
            className="flex items-center justify-center"
            onMouseEnter={onMouseEnter.wire}
            onMouseLeave={onMouseLeave.wire}>
            <Link
              to="/wire/WireLC7401SInfo"
              className="group flex h-full w-full items-center justify-center rounded-xl px-2 py-2 text-sm text-black transition duration-300 hover:bg-slate-500 hover:bg-opacity-50"
              onClick={handleLinkClick}>
              <span className="relative">
                유·무선카드단말
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <SubMenuWireandWireless isVisible={isWireMenuVisible} />
          </li>

          <li
            className="flex items-center justify-center"
            onMouseEnter={onMouseEnter.pos}
            onMouseLeave={onMouseLeave.pos}>
            <Link
              to="/pos/okposInfo"
              className="group flex h-full w-full items-center justify-center rounded-xl px-2 py-2 text-sm text-black transition duration-300 hover:bg-slate-500 hover:bg-opacity-50"
              onClick={handleLinkClick}>
              <span className="relative">
                포스(POS)
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <SubMenuPos isVisible={isPosMenuVisible} />
          </li>

          <li
            className="flex items-center justify-center"
            onMouseEnter={onMouseEnter.toss}
            onMouseLeave={onMouseLeave.toss}>
            <Link
              to="/tossterminals/tossfrontInfo"
              className="group flex h-full w-full items-center justify-center rounded-xl px-2 py-2 text-sm text-black transition duration-300 hover:bg-slate-500 hover:bg-opacity-50"
              onClick={handleLinkClick}>
              <span className="relative">
                TOSS(토스단말기)
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <SubMenuTossTerminals isVisible={isTossMenuVisible} />
          </li>

          <li
            className="flex items-center justify-center"
            onMouseEnter={onMouseEnter.kiosk}
            onMouseLeave={onMouseLeave.kiosk}>
            <Link
              to="/kiosk/okposInfo"
              className="group flex h-full w-full items-center justify-center rounded-xl px-2 py-2 text-sm text-black transition duration-300 hover:bg-slate-500 hover:bg-opacity-50"
              onClick={handleLinkClick}>
              <span className="relative">
                키오스크
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <SubMenuKiosk isVisible={isKioskMenuVisible} />
          </li>

          <li className="flex items-center justify-center">
            <Link
              to="/unattend-auth"
              className="group flex h-full w-full items-center justify-center rounded-xl px-2 py-2 text-sm text-black transition duration-300 hover:bg-slate-500 hover:bg-opacity-50"
              onClick={handleLinkClick}>
              <span className="relative">
                전화무인인증/CCTV
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>

          <li className="flex items-center justify-center">
            <Link
              to="/manlesscafe"
              className="group flex h-full w-full items-center justify-center rounded-xl px-2 py-2 text-sm text-black transition duration-300 hover:bg-slate-500 hover:bg-opacity-50"
              onClick={handleLinkClick}>
              <span className="relative">
                무인 전자담배 창업
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>

          <li className="flex items-center justify-center">
            <Link
              to="/customer-support"
              className="group flex h-full w-full items-center justify-center rounded-xl px-2 py-2 text-sm text-black transition duration-300 hover:bg-slate-500 hover:bg-opacity-50"
              onClick={handleLinkClick}>
              <span className="relative">
                고객센터/문의하기/이벤트
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>

          <li className="col-span-2 flex items-center justify-center">
            <a
              href="tel:1661-9033"
              className="group w-full rounded-xl border-2 bg-lime-800 px-4 py-2 text-center text-white shadow-xl transition duration-300 hover:bg-lime-900 hover:bg-opacity-50"
              onClick={() => setIsMenuOpen(false)}>
              <span className="relative">
                문의하기 1661-9033
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileHeader;
