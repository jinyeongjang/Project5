import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

interface HomePopupProps {
  isVisible: boolean;
  dontShowAgainToday: boolean;
  onClose: () => void;
  onToggleDontShow: () => void;
}

const HomePopup: React.FC<HomePopupProps> = ({ isVisible, dontShowAgainToday, onClose, onToggleDontShow }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="] fixed right-4 top-[80px] z-[100] flex max-w-sm flex-col rounded-xl bg-white shadow-2xl xs:right-2 xs:top-[100px] xs:w-[200px] xs:max-w-[calc(120%-15px)]"
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}>
          <div className="relative">
            <button
              className="absolute right-2 top-2 z-10 rounded-full bg-white p-1 shadow-md transition hover:bg-gray-100"
              onClick={onClose}>
              <IoMdClose className="text-xl" />
            </button>

            <Link to="/manlesscafe" onClick={onClose}>
              <img
                src="/images/manlesscafe/manlesscafeopenpopup1.png"
                alt="무인전자담배 창업 안내"
                className="w-full rounded-t-xl xs:h-[250px] xs:w-[200px]"
              />
            </Link>

            <div className="p-4 xs:p-3">
              <h2 className="mb-2 text-lg font-bold xs:text-base">무인전자담배 창업 안내</h2>
              <p className="mb-4 text-sm text-gray-600 xs:mb-2 xs:text-xs">창업문의 가능합니다.</p>

              <div className="flex flex-col gap-3 xs:gap-2">
                <label className="flex cursor-pointer items-center text-sm text-gray-600 xs:text-xs">
                  <input
                    type="checkbox"
                    className="mr-2 h-4 w-4 rounded border-gray-300 xs:h-3 xs:w-3"
                    checked={dontShowAgainToday}
                    onChange={onToggleDontShow}
                  />
                  오늘 하루 이 창을 다시 보지 않기
                </label>

                <Link
                  to="/manlesscafe"
                  className="w-full rounded-full bg-orange-500 px-4 py-2 text-center text-sm text-white transition hover:bg-orange-700 active:bg-orange-800 xs:px-3 xs:py-1.5 xs:text-xs"
                  onClick={onClose}>
                  자세히 보기
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HomePopup;
