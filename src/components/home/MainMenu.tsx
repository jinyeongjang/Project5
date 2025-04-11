import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  LuMessageCircle,
  LuBuilding,
  LuImage,
  LuCreditCard,
  LuMonitor,
  LuWallet,
  LuTablet,
  LuUserCheck,
  LuHeadphones,
} from 'react-icons/lu';

const MainMenu: React.FC = () => {
  const handleConsultClick = useCallback(() => {
    if (window.ChannelIO) {
      window.ChannelIO('showMessenger');
    }
  }, []);

  const handleScrollAndNavigate = useCallback((path: string) => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    setTimeout(() => {
      window.location.href = path;
    }, 500);
  }, []);

  const buttonBaseClass =
    'rounded-full px-2 py-4 text-[14px] font-normal text-white transition-colors w-full text-center flex flex-col items-center justify-center';

  const iconClass = 'text-2xl mb-2';

  return (
    <div className="relative mt-[10px] md:hidden">
      <div className="grid grid-cols-4 gap-3 p-2">
        <motion.button
          className={`${buttonBaseClass} col-span-4 tracking-tighter`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={handleConsultClick}>
          <LuMessageCircle className={`${iconClass} text-lime-700`} />
          <span className="tracking-tighter text-black">상담 신청하기</span>
        </motion.button>

        <motion.button
          className={`${buttonBaseClass} tracking-tighter hover:bg-white/10 active:bg-white/20`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onClick={() => handleScrollAndNavigate('/about')}>
          <LuBuilding className={`${iconClass} text-stone-700`} />
          <span className="tracking-tighter text-black">회사소개</span>
        </motion.button>

        <motion.button
          className={`${buttonBaseClass} tracking-tighter hover:bg-white/10 active:bg-white/20`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onClick={() => handleScrollAndNavigate('/installation-cases')}>
          <LuImage className={`${iconClass} text-emerald-700`} />
          <span className="tracking-tighter text-black">설치사례</span>
        </motion.button>

        <motion.button
          className={`${buttonBaseClass} text-xs tracking-tighter hover:bg-white/10 active:bg-white/20`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onClick={() => handleScrollAndNavigate('/wire/wireLC7403SInfo')}>
          <LuCreditCard className={`${iconClass} text-amber-700`} />
          <span className="tracking-tighter text-black">유·무선카드단말</span>
        </motion.button>

        <motion.button
          className={`${buttonBaseClass} tracking-tighter hover:bg-white/10 active:bg-white/20`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onClick={() => handleScrollAndNavigate('/pos/okposInfo')}>
          <LuMonitor className={`${iconClass} text-indigo-700`} />
          <span className="tracking-tighter text-black">포스(POS)</span>
        </motion.button>
      </div>

      <div className="grid grid-cols-3 gap-3 p-2">
        <motion.button
          className={`${buttonBaseClass} tracking-tighter hover:bg-white/10 active:bg-white/20`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onClick={() => handleScrollAndNavigate('/tossterminals/tossfrontInfo')}>
          <LuWallet className={`${iconClass} text-sky-700`} />
          <span className="tracking-tighter text-black">TOSS</span>
        </motion.button>

        <motion.button
          className={`${buttonBaseClass} hover:bg-white/10 active:bg-white/20`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onClick={() => handleScrollAndNavigate('/kiosk/okposInfo')}>
          <LuTablet className={`${iconClass} text-sky-900`} />
          <span className="tracking-tighter text-black"> 키오스크</span>
        </motion.button>

        <motion.button
          className={`${buttonBaseClass} tracking-tighter hover:bg-white/10 active:bg-white/20`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onClick={() => handleScrollAndNavigate('/customer-support')}>
          <LuHeadphones className={`${iconClass} text-pink-700`} />
          <span className="tracking-tighter text-black">고객센터</span>
        </motion.button>
      </div>

      <div className="grid grid-cols-2 gap-3 p-2">
        <motion.button
          className={`${buttonBaseClass} tracking-tighter hover:bg-white/10 active:bg-white/20`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onClick={() => handleScrollAndNavigate('/unattend-auth')}>
          <LuUserCheck className={`${iconClass} text-purple-700`} />
          <span className="tracking-tighter text-black">무인인증</span>
        </motion.button>

        <motion.button
          className={`${buttonBaseClass} tracking-tighter hover:bg-white/10 active:bg-white/20`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onClick={() => handleScrollAndNavigate('/manlesscafe')}>
          <LuUserCheck className={`${iconClass} text-indigo-500`} />
          <span className="tracking-tighter text-black">무인 전자담배 창업</span>
        </motion.button>
      </div>
    </div>
  );
};

export default MainMenu;
