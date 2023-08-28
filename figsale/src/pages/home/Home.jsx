import './Home.scss';
import PresentationCarousel from "../../components/home/carousel-presentation/PresentationFeedbackCarousel.jsx";
import NewProductCarousel from "../../components/home/carousel-new-products/NewProductsCarousel.jsx";
import PromoCarousel from "../../components/home/carousel-promo/PromoCarousel.jsx";
import PreorderCarousel from "../../components/home/carousel-preorder/PreorderCarousel.jsx";
import FeedbackCarousel from "../../components/home/carousel-feedback/FeedbackCarousel.jsx";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState({promo : [], newProducts : [], preorder : []});
  const [images, setImages] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promoResponse = await axios.get(`http://localhost:3307/product/promo`);
        const newProductsResponse = await axios.get(`http://localhost:3307/product/new`);
        const preorderResponse = await axios.get(`http://localhost:3307/product/preorder`);
        const imageReponse = await axios.get(`http://localhost:3307/images`);
        const feedbackResponse = await axios.get(`http://localhost:3307/feedback`);

        setImages(imageReponse.data);
        setProducts({promo : promoResponse.data, newProducts : newProductsResponse.data, preorder : preorderResponse.data});
        setFeedbacks(feedbackResponse.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='home-page'>
      <PresentationCarousel />
      <NewProductCarousel products={products.newProducts} images={images}/>
      <PromoCarousel products={products.promo} images={images}/>
      <PreorderCarousel products={products.preorder} images={images}/>
      <hr className='feedback-separator'/>
      <FeedbackCarousel feedbacks={feedbacks}/>
    </div>  
  )
}

export default Home;