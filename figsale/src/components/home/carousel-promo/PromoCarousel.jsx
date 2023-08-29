import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import ProductCard from '../../product-card/ProductCard';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './PromoCarousel.scss';
import { Link } from 'react-router-dom';

function PromoCarousel (props) {
  const products = props.products;
  const images = props.images;

  const getFirstImage = (product) => {
    const image = images.find((image) => image.product_id === product.id);
    if (image) {
      const imageArray = JSON.parse(image.images);
      return imageArray.length > 0 ? imageArray[0] : null;
    }
    return null;
  }

  const path = "https://figsale.s3.fr-par.scw.cloud/images/";
  const productList = products.map((product) => {   
    return (
      <SwiperSlide key={product.id}>
        <Link to={'/products/' + product.id} key={product.id}>
          <ProductCard
          img={path + getFirstImage(product)}
          alt={product.title}
          title={product.title}
          price={product.price}
          fav={product.fav}
          availability={product.availability}
          />
        </Link>
      </SwiperSlide>
    );
  })

  return (
    <div className='home-carousel-promo'>
      <div className='home-carousel-promo-container'>
        <div className='home-carousel-promo-swiper'>
          <div className='home-carousel-promo-title'>
            <h2>Promotions</h2>
            <button>Voir tout</button>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation = {true}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
              1500: {
                slidesPerView: 5,
              },
            }}
          >
            {productList}   
          </Swiper> 
        </div>
      </div>
    </div>
  ); 
}

export default PromoCarousel;