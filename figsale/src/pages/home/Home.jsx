// import FeedbackCarousel from "../../components/home/carousel-feedback/FeedbackCarousel.jsx";
import NewProductCarousel from "../../components/home/carousel-new-products/NewProductsCarousel.jsx";
import PresentationCarousel from "../../components/home/carousel-presentation/PresentationFeedbackCarousel.jsx";

function Home() {
    return (
      <div>
        <PresentationCarousel />
        <NewProductCarousel />
      </div>
      
    )
}

export default Home;