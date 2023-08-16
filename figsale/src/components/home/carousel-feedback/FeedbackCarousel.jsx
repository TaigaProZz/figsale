import './FeedbackCarousel.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow} from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/effect-coverflow';
import FeedbackCarouselCard from './carousel-card/FeedbackCarouselCard';


function FeedbackCarousel () {
  const feedbacks = [
    {
      id: 1,
      name: 'John Doe',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, velit diam ultricies nunc, nec ultricies nisl nunc eu nisl. Sed euismod, diam id tincidunt dapibus, velit diam ultricies nunc, nec ultricies nisl nunc eu nisl.',
      stars: 5,
    },
    {
      id: 2,
      name: 'John Doe',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, velit diam ultricies nunc, nec ultricies nisl nunc eu nisl. Sed euismod, diam id tincidunt dapibus, velit diam ultricies nunc, nec ultricies nisl nunc eu nisl.',
      stars: 4,
    },
    {   
      id: 3,
      name: 'John Doe',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, velit diam ultricies nunc, nec ultricies nisl nunc eu nisl. Sed euismod, diam id tincidunt dapibus, velit diam ultricies nunc, nec ultricies nisl nunc eu nisl.',
      stars: 3,
    }
  ];

  return (
    <div className='home-carousel-feedback'>
      <div className='home-carousel-feedback-swiper'>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          navigation = {true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          effect={'coverflow'}
          coverflowEffect={{
            rotate: 10,
            stretch: 100,
            depth: 50,
            modifier: 1,
            slideShadows: true,
            
          }}

          // breakpoint
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          >
          {feedbacks.map((feedback) => (
            <SwiperSlide key={feedback.id}>
              <FeedbackCarouselCard name={feedback.name} text={feedback.message} rating={feedback.stars} />
            </SwiperSlide>
          ))}
          
        </Swiper> 
      </div>
    </div>
  );
}



export default FeedbackCarousel;