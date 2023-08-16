import './FeedbackCarouselCard.scss';
import { AiFillStar } from 'react-icons/ai'

function FeedbackCarouselCard (props) {
  let stars = [];
  for(let i = 0; i < props.stars; i++) {
    stars.push(<AiFillStar />);
  };


  return (
    <div>
      <div className='carousel-card'>
        <div className="carousel-card-rating">
          {stars}
        </div>

        <div className="carousel-card-name">
        </div>

        <div className="carousel-card-message">
        </div>

      </div>
    </div>
  )
}

export default FeedbackCarouselCard;