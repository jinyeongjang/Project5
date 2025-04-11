import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAnglesDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SwiperCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [, setIsAnimating] = useState(true);

  const handleConsultClick = useCallback(() => {
    if (window.ChannelIO) {
      window.ChannelIO('showMessenger');
    }
  }, []);

  const slides = [
    {
      id: 1,
      src: '/images/irehpay_mainbanner1.jpg',
      alt: '메인 배너 이미지1',
    },
    {
      id: 2,
      src: '/images/irehpay_manlesscafebanner1.png',
      alt: '메인 배너 이미지2',
    },
    {
      id: 3,
      src: '/images/irehpay_mainbanner4.png',
      alt: '메인 배너 이미지2',
    },
    {
      id: 4,
      src: '/images/irehpay_rovisbanner.png',
      alt: '메인 배너 이미지2',
    },
    {
      id: 5,
      src: '/images/irehpay_mainbanner3.jpg',
      alt: '메인 배너 이미지3',
    },
    {
      id: 6,
      src: '/images/barrierfree_banner.png',
      alt: '메인 배너 이미지4',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsAnimating(true);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleSlideClick = (index: number) => {
    setCurrentSlide(index);
    setIsAnimating(true);
  };

  const renderImage = (slide: (typeof slides)[0], index: number) => {
    const imageContent = (
      <>
        <img
          src={slide.src}
          alt={slide.alt}
          className={`h-full w-full object-cover ${index === 1 ? 'mx-auto w-[100%] object-contain xs:w-[100%]' : ''}`}
        />
        <div className="absolute inset-0 h-[100px] bg-gradient-to-b from-black/100 to-transparent" />
        <div className="absolute inset-0 bg-black opacity-30" />
      </>
    );

    if (index === 1) {
      return (
        <Link
          to="/manlesscafe"
          className="group relative block h-full w-full cursor-pointer transition-all duration-300"
          style={{ zIndex: 20 }}>
          {imageContent}
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
        </Link>
      );
    }

    if (index === 3) {
      return (
        <Link
          to="/unattend-auth"
          className="group relative block h-full w-full cursor-pointer transition-all duration-300"
          style={{ zIndex: 20 }}>
          {imageContent}
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
        </Link>
      );
    }

    return <div className="relative h-full w-full">{imageContent}</div>;
  };

  return (
    <div className="relative h-screen overflow-hidden xs:h-[300px]">
      {/* <NewYearTimer /> */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute h-full w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.5,
            ease: [0.4, 0, 0.2, 1],
          }}>
          <div className="relative h-full w-full">{renderImage(slides[currentSlide], currentSlide)}</div>
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="absolute top-10 z-30 ml-[200px] mt-[180px] flex flex-col items-start gap-4 text-left xs:left-4 xs:top-4 xs:ml-[15px] xs:mt-[80px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: 'easeOut',
        }}
        style={{ filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))' }}>
        <div className="text-[50px] font-bold text-white xs:text-[20px]">
          <div>주문부터 결제</div>
          <div>내가 원하는 대로</div>
        </div>
        <motion.button
          onClick={handleConsultClick}
          className="w-[300px] rounded-full bg-lime-700 px-8 py-3 text-[18px] font-normal text-white shadow-xl transition-colors hover:bg-lime-800 active:bg-lime-900 xs:hidden xs:px-6 xs:py-2 xs:text-[14px]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          상담 신청하기
        </motion.button>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-4">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className="relative h-[3px] w-12 cursor-pointer overflow-hidden rounded-xl bg-white/30"
              onClick={() => handleSlideClick(index)}>
              {currentSlide === index && (
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-xl bg-white"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{
                    duration: 5,
                    ease: 'linear',
                  }}
                  onAnimationComplete={() => setIsAnimating(false)}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute bottom-[100px] left-1/2 z-30 -translate-x-1/2 cursor-pointer text-white xs:hidden"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <FaAnglesDown className="h-12 w-12" />
      </motion.div>
    </div>
  );
};

export default SwiperCarousel;
