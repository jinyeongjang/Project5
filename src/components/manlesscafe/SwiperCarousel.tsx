import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const SwiperCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [, setIsAnimating] = useState(true);

  const slides = [
    {
      id: 1,
      src: '/images/manlesscafe/manlesscafefront.png',
      alt: '메인 배너 이미지1',
    },
    {
      id: 2,
      src: '/images/manlesscafe/manlesscafeside.png',
      alt: '무인전자담배 카페 배너',
      link: '/manlesscafe',
    },
    {
      id: 3,
      src: '/images/irehpay_manlesscafebanner1.png',
      alt: '메인 배너 이미지3',
    },
    {
      id: 4,
      src: '/images/manlesscafe/manlesscafeinterior1.png',
      alt: '무인인증 배너',
      link: '/unattend-auth',
    },
    {
      id: 5,
      src: '/images/manlesscafe/manlesscafeinterior2.png',
      alt: '메인 배너 이미지5',
    },
    {
      id: 6,
      src: '/images/manlesscafe/manlesscafeinterior3.png',
      alt: '메인 배너 이미지6',
    },
    {
      id: 7,
      src: '/images/manlesscafe/manlesscafeinterior4.png',
      alt: '메인 배너 이미지6',
    },
    {
      id: 8,
      src: '/images/manlesscafe/manlesscafeinterior5.png',
      alt: '메인 배너 이미지6',
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

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAnimating(true);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
      </>
    );

    return <div className="relative h-full w-full">{imageContent}</div>;
  };

  return (
    <div className="relative h-[600px] overflow-hidden xs:h-[300px]">
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

      {/* 좌우 화살표 버튼 */}
      <button
        className="absolute left-4 top-1/2 z-40 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50"
        onClick={goToPrevSlide}>
        <IoIosArrowBack size={24} />
      </button>

      <button
        className="absolute right-4 top-1/2 z-40 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50"
        onClick={goToNextSlide}>
        <IoIosArrowForward size={24} />
      </button>

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
    </div>
  );
};

export default SwiperCarousel;
