import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 mt-8 bg-slate-800 p-4 text-white shadow-md">
      <div className="container mx-auto flex flex-col justify-between md:flex-row">
        <div className="mb-4 flex flex-col md:mb-0">
          <div className="mb-2 text-lg font-semibold">{new Date().getFullYear()}. 이레페이. All rights Reserved.</div>
        </div>
        <div className="text-left text-sm text-gray-300">
          <p>대표이사: 주근우 | 사업자등록번호: 2952001022</p>
          <p>주소: 경남 양산시 물금읍 야리4길 13 A1-city 3층 309호</p>
          <p>전화: 1661-9033</p>
        </div>

        <nav className="mb-4 mr-[50px] md:mb-0">
          <ul className="flex flex-wrap justify-center space-x-4">
            <li>
              <Link to="/privacy" className="transition duration-300 hover:text-blue-200">
                개인정보 처리방침
              </Link>
            </li>
            <li>
              <Link to="/terms" className="transition duration-300 hover:text-blue-200">
                이용약관
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
