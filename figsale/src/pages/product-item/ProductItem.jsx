import 'react-medium-image-zoom/dist/styles.css'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './ProductItem.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode} from 'swiper/modules';
import Zoom from 'react-medium-image-zoom'

function ProductItem() {
  // const [product, setProduct] = useState();
  // const [images, setImages] = useState([]);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const params = useParams();
  const img = ["/img/fig.jpg", "https://www.nautiljon.com/images/perso/00/66/elizabeth_liones_10866.webp","/img/fig.jpg","/img/fig.jpg","/img/fig.jpg "];

  const handleMainSwiperSlideChange = () => {
    if (mainSwiper && thumbsSwiper) {
      const activeIndex = mainSwiper.activeIndex;
      thumbsSwiper.slideTo(activeIndex)
    }
  };

  const handleThumbsSwiperSlideChange = () => {
    if (mainSwiper && thumbsSwiper) {
      const activeIndex = thumbsSwiper.activeIndex;
      mainSwiper.slideTo(activeIndex)
    }
  };

  const fetchData = async () => {
    try {
      // request await axios ....
      // setProducts(response.data);
      // setImages(response.data.images);
    } catch (error) {
      console.log(error);
    }
  };

  // get products elements from database
  useEffect(() => {
    fetchData();
  }, [params]);

  return (
    <div className='product-item-container'>
      {/* product images */}
      <div className='product-item-images'>
        <div className='product-item-main-image'>
          <Swiper
            onSwiper={setMainSwiper}
            navigation = {true}
            pagination = {true}
            modules={[Navigation, Pagination, FreeMode]}
            onSlideChange={handleMainSwiperSlideChange}
          >
            {img.map((img, index) => (
              <SwiperSlide key={index}>
                <Zoom>
                  <img src={img} alt={"z"}/>
                </Zoom>
              </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className='product-item-sub-images'>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={'auto'}
            navigation = {true}
            centeredSlides={true}
            modules={[Navigation, Pagination]}
            onSlideChange={handleThumbsSwiperSlideChange} 
          >
            {img.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={"z"}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* product details */}
      <div className='product-item-details'>
        <div className='product-item-title'>
          {/* set data from product here */}
          <h1>Product Title</h1>
        </div>
        <div className='product-item-price'>
          {/* set data from product here */}
          <h2>100€</h2>
        </div>

        <hr className='separator-product-item'/>

        <div className='product-item-description'>
          <h3>Description du produit:</h3>
          {/* set data from product here */}
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, voluptate, quia voluptas quod quos
            voluptatibus quae doloribus quidem voluptatem. Quisquam voluptatum,
      
          </p>
        </div>
        <div className='product-item-characteristic'>
          <span>Licence:&nbsp;</span>
          {/* set data from product here */}
          <p>One piece</p>
        </div>
        <div className='product-item-characteristic'>
          <span>Taille:&nbsp;</span>
          {/* set data from product here */}
          <p>30cm</p>
        </div>
        <div className='product-item-characteristic'>
          <span>Matière:&nbsp;</span>
          {/* set data from product here */}
          <p>PVC</p>
        </div>

        <hr className='separator-product-item'/>

        <div className='product-item-bottom'>
          <div className='product-item-bottom-text'>
            <p>
              TOUTES LES FIGURINES SONT DISPONIBLE SEULEMENT SUR COMMANDE.
            </p>
          </div>
          <div className='product-item-bottom-contact'>   
            <button>Contacter nous ici</button> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;