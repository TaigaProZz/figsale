import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow} from 'swiper/modules';
import ProductCard from '../../product-card/ProductCard';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/effect-coverflow';
import './PreorderCarousel.scss';

function PreorderCarousel () {
  const products = [
    {
      id: 1,
      img: 'https://www.nautiljon.com/images/perso/00/66/elizabeth_liones_10866.webp',
      alt: 'efefe',
      name: 'zoro',
      price: 100,
      label: 3,
      fav: true
    },
    {
      id: 2,
      img: '/img/banner.jpg',
      alt: 'efefe',
      name: 'zoro',
      price: 100,
      label: 3,
      fav: false
    },
    {   
      id: 3,
      img: '/img/banner.jpg',
      alt: 'efefe',
      name: 'zoro',
      price: 100,
      label: 3,
      fav: true
    },
    {
      id: 4,
      img: '/img/banner.jpg',
      alt: 'efefe',
      name: 'zoro',
      price: 100,
      label: 3,
      fav: false
    },
    {
      id: 5,
      img: '/img/banner.jpg',
      alt: 'efefe',
      name: 'zoro',
      price: 100,
      label: 3,
      fav: true
    },
    {
      id: 6,
      img: '/img/banner.jpg',
      alt: 'efefe',
      name: 'zoro',
      price: 100,
      label: 3,
      fav: false
    }

  ];

  return (
    <div className='home-carousel-preorder'>
      <div className='home-carousel-preorder-container'>
        
        <div className='home-carousel-preorder-swiper'>
          <div className='home-carousel-preorder-title'>
            <h2>Précommande</h2>
            <button>Voir tout</button>
          </div>
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            navigation = {true}
            spaceBetween={10}
            slidesPerView='auto'
          >
            {products.map((products) => (
              <SwiperSlide key={products.id}>
                <ProductCard img={products.img} alt={products.alt} name={products.name} price={products.price} fav={products.fav} label={products.label}/>
              </SwiperSlide>
            ))}
            
          </Swiper> 
        </div>
      </div>
    </div>
  );
  
}

export default PreorderCarousel;