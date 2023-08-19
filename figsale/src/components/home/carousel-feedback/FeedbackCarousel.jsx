import './FeedbackCarousel.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow} from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/effect-coverflow';
import FeedbackCarouselCard from './card/FeedbackCarouselCard';


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
    },
    {
      id: 4,
      name: 'John Doe',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, velit diam ultricies nunc, nec ultricies nisl nunc eu nisl. Sed euismod, diam id tincidunt dapibus, velit diam ultricies nunc, nec ultricies nisl nunc eu nisl.',
      stars: 4,
    }
  ];

  return (
    <div className='home-carousel-feedback'>
      <div className='home-carousel-feedback-title center'>
        <span>L'avis de nos clients</span>
      </div>
      <div className='home-carousel-feedback-swiper center'>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          navigation={true}
          slidesPerView={'auto'}
          grabCursor={true}

          // breakpoint
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          >
          {feedbacks.map((feedback) => (
            <SwiperSlide key={feedback.id}>
              <FeedbackCarouselCard name={feedback.name} message={feedback.message} stars={feedback.stars} />
            </SwiperSlide>
          ))}
          
        </Swiper> 
      </div>
    </div>
  );
}



export default FeedbackCarousel;