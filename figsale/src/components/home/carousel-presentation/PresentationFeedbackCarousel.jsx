import './PresentationCarousel.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow} from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/effect-coverflow';
import PresentationCarouselCard from './card/PresentationCarouselCard';


function PresentationCarousel () {
  const announces = [
    {
      id: 1,
      img: 'https://www.nautiljon.com/images/perso/00/66/elizabeth_liones_10866.webp',
      alt: 'efefe'
    },
    {
      id: 2,
      img: '/img/banner.jpg',
      alt: 'efefe'
    },
    {   
      id: 3,
      img: '/img/banner.jpg',
      alt: 'efefe'
    }
  ];

  return (
    <div className='home-carousel-announce'>
      <div className='home-carousel-announce-swiper'>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          navigation = {true}
          grabCursor={true}
          slidesPerView={1}
          
          >
          {announces.map((announce) => (
            <SwiperSlide key={announce.id}>
              <PresentationCarouselCard img={announce.img} alt={announce.alt} />
            </SwiperSlide>
          ))}
          
        </Swiper> 
      </div>
    </div>
  );
}



export default PresentationCarousel;