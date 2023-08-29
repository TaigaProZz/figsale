import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import ProductCard from '../../product-card/ProductCard';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './PreorderCarousel.scss';

function PreorderCarousel (props) {
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
       <ProductCard
        img={path + getFirstImage(product)}
        alt={product.title}
        title={product.title}
        price={product.price}
        fav={product.fav}
        availability={product.availability}
      />
    </SwiperSlide>
    );
  })

  return (
    <div className='home-carousel-preorder'>
      <div className='home-carousel-preorder-container'>
        
        <div className='home-carousel-preorder-swiper'>
          <div className='home-carousel-preorder-title'>
            <h2>Précommande</h2>
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

export default PreorderCarousel;