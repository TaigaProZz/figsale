import './Home.scss';
import PresentationCarousel from "../../components/home/carousel-presentation/PresentationFeedbackCarousel.jsx";
import NewProductCarousel from "../../components/home/carousel-new-products/NewProductsCarousel.jsx";
import PromoCarousel from "../../components/home/carousel-promo/PromoCarousel.jsx";
import PreorderCarousel from "../../components/home/carousel-preorder/PreorderCarousel.jsx";
import FeedbackCarousel from "../../components/home/carousel-feedback/FeedbackCarousel.jsx";

function Home() {
  return (
    <div className='home-page'>
      <PresentationCarousel />
      <NewProductCarousel />
      <PromoCarousel />
      <PreorderCarousel />
      <hr className='feedback-separator'/>
      <FeedbackCarousel />
    </div>  
  )
}

export default Home;