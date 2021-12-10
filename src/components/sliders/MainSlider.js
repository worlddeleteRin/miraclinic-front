import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import { useMainSlider } from '@/hooks/useSite';

import { motion } from 'framer-motion';

function MainSlider () {
  const mainSliderQuery = useMainSlider();
  const mainSlider = mainSliderQuery?.data;

    const sliderMotion = {
        hidden: { opacity: 0, y: -50 },
        show: { 
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            }
        },
    }

  const contentBlock = (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation
      pagination={{clickable: true}}
      className="mx-4 rounded-md pb-8"
    >
      {mainSlider?.sliders && mainSlider?.sliders?.map((slider, index) => (
      <SwiperSlide 
        key={index}
        className="max-h-[350px]"
      >
        <img 
          src={slider.imgsrc}
          className="w-full h-full object-contain rounded-md"
        />
      </ SwiperSlide>
      ))
      }
    </Swiper>
  )
  return (
    <motion.div 
        initial="hidden"
        animate="show"
        variants={sliderMotion}
    >
      { contentBlock }
    </motion.div>
  )
}

export default MainSlider
