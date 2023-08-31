import 'react-medium-image-zoom/dist/styles.css'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './SingleProduct.scss';
import {HiOutlineHeart, HiHeart} from 'react-icons/hi'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode} from 'swiper/modules';
import Zoom from 'react-medium-image-zoom'
import axios from 'axios';

function SingleProduct(user) {
  const [product, setProduct] = useState();
  const [images, setImages] = useState([]);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [fav, setFav] = useState('');
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
        const response3 = await axios.get(`http://localhost:3307/favorite/${user.user.id}/${params.id}`);
        setFav(response3.data);        
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchData();
  }, [user, params.id]);

  const handleFav = async (product) => {
    // post or delete depending on fav value
    console.log(fav);
    if (fav) {
      try {
        setFav(!fav);
        await axios.delete(`http://localhost:3307/favorite/${user.user.id}/${product.id}`);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        setFav(!fav);
        const query = {creator_id: user.user.id, product_id: product.id, add_date: Date().toString()};
        await axios.post(`http://localhost:3307/favorite/`, query);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // view
  if (!product) {
    return <div>loading...</div>;
  }

  const imageList = images.map((img, index) => (
    <SwiperSlide key={index}>
      <Zoom>
        <img src={"https://figsale.s3.fr-par.scw.cloud/images/" + img} alt={"load error"}/>
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
          {images.length > 1 ? 
            <Swiper
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
          <h1>{product.title}</h1>
        </div>
        <div className='product-item-price'>
          <h2>{product.price}€</h2>
          <div onClick={() => handleFav(product)}>{checkFav(fav)}</div>
        </div>
          
        <hr className='separator-product-item'/>

        <div className='product-item-description'>
          <h3>Description du produit:</h3>
          <p>{product.description}</p>
        </div>
        <div className='product-item-characteristic'>
          <span>Licence:&nbsp;</span>
          <p>{product.licence}</p>
        </div>
        <div className='product-item-characteristic'>
          <span>Taille:&nbsp;</span>
          <p>{product.size}</p>
        </div>
        <div className='product-item-characteristic'>
          <span>Matière:&nbsp;</span>
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

function checkFav (fav) {
  if (fav) {
    return <HiHeart size={40} color='red'/>
  } else {
    return <HiOutlineHeart size={40}/>
  }
}

export default SingleProduct;