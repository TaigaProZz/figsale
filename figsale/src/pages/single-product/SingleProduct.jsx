import 'react-medium-image-zoom/dist/styles.css'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './SingleProduct.scss';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode} from 'swiper/modules';
import Zoom from 'react-medium-image-zoom'
import axios from 'axios';

function SingleProduct() {
  const [product, setProduct] = useState();
  const [images, setImages] = useState([]);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const params = useParams();

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

  // get products elements from database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3307/product/${params.id}`);
        setProduct(response.data[0]);
        const response2 = await axios.get(`http://localhost:3307/images/${params.id}`);
        setImages(JSON.parse(response2.data[0].images));
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchData();
  }, [params.id]);

  if (!product) {
    return <div>loading...</div>;
  }

  const path = "https://figsale.s3.fr-par.scw.cloud/images/";

  const imageList = images.map((img, index) => (
    <SwiperSlide key={index}>
      <Zoom>
        <img src={path + img} alt={"z"}/>
      </Zoom>
    </SwiperSlide>
    ));

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
           {imageList}
          </Swiper>
        </div>

        <div className='product-item-sub-images'>
          {images.length > 1 ? <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={'auto'}
              navigation = {true}
              centeredSlides={true}
              modules={[Navigation, Pagination]}
              onSlideChange={handleThumbsSwiperSlideChange} 
            >
              {imageList}
            </Swiper> 
            : null 
          }
        </div>
      </div>

      {/* product details */}
      <div className='product-item-details'>
        <div className='product-item-title'>
          {/* set data from product here */}
          <h1>{product.title}</h1>
        </div>
        <div className='product-item-price'>
          {/* set data from product here */}
          <h2>{product.price}€</h2>
        </div>

        <hr className='separator-product-item'/>

        <div className='product-item-description'>
          <h3>Description du produit:</h3>
          <p>{product.description}</p>
        </div>
        <div className='product-item-characteristic'>
          <span>Licence:&nbsp;</span>
          {/* set data from product here */}
          <p>{product.licence}</p>
        </div>
        <div className='product-item-characteristic'>
          <span>Taille:&nbsp;</span>
          {/* set data from product here */}
          <p>{product.size}</p>
        </div>
        <div className='product-item-characteristic'>
          <span>Matière:&nbsp;</span>
          {/* set data from product here */}
          <p>{product.matter}</p>
        </div>

        <hr className='separator-product-item'/>

        <div className='product-item-bottom'>
          <div className='product-item-bottom-text'>
            <p>
              TOUTES LES FIGURINES SONT DISPONIBLE SEULEMENT SUR COMMANDE.
            </p>
          </div>
          <div className='product-item-bottom-contact'> 
          <Link to='/product-contact' state={{product: product}}>
            <button>Contacter nous ici</button> 
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;