import './FeedbackCarousel.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import FeedbackCarouselCard from './card/FeedbackCarouselCard';


function FeedbackCarousel (props) {
  const feedbacks = props.feedbacks

  return (
    <div className='home-carousel-feedback'>
      <div className='home-carousel-feedback-title center'>
        <span>L'avis de nos clients</span>
      </div>
      <div className='home-carousel-feedback-swiper center'>
        <Swiper
          modules={[Navigation, Pagination]}
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