import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import StockCard from '@/components/stocks/StockCard';
import TitleBig from '@/components/content/TitleBig';

import { useStocks } from '@/hooks/useSite';

function StocksSlider() {
  
  const stocksQuery = useStocks();
  const stocks = stocksQuery.data;

  const sliderBreakpoints = {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }

  const titleBlock = (
    <TitleBig
      size="small"
      title="Актуальные акции" 
    />
  )
  const contentBlock = (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      navigation
      pagination={{clickable: true}}
      breakpoints={sliderBreakpoints}
      className="mx-4 rounded-md pb-10"
    >
      {stocks && stocks?.map((stock, index) => (

      <SwiperSlide 
        key={index}
        className="max-h-[350px]"
      >
        <StockCard 
          stock={stock}
        />

      </ SwiperSlide>
      ))
      }
    </Swiper>
  )
  return (
    <div className="py-8 mx-4">
      <div className="max-w-screen-lg mx-auto">
        { titleBlock }
        <div className="mt-8">
        { contentBlock }
        </div>
      </div>
    </div>
  )
}

export default StocksSlider
