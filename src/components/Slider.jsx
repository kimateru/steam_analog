import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '../index.css'

export default function Slider({sliderImages}) {
  return (
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {
          sliderImages.map((image, index) => (
            <SwiperSlide key={index} className='w-full h-full'>
              <img src={image} alt={`${index+1} image`} className='w-full h-full object-cover' />
            </SwiperSlide>
          ))
        }
      </Swiper>
  );
}