import './FeedbackCarouselCard.scss';
import { AiFillStar } from 'react-icons/ai'

function FeedbackCarouselCard (props) {
  let stars = [];
  for(let i = 0; i < props.stars; i++) {
    stars.push(<AiFillStar size={25} />);
  };


  return (
    <div>
      <div className='home-carousel-feedback-card'>
        <div className="home-carousel-feedback-rating center">
          {stars}
        </div>

        <div className="home-carousel-feedback-name center">
          {props.name}
        </div>

        <div className="home-carousel-feedback-message center">
          <p>{props.message}</p>
        </div>

      </div>
    </div>
  )
}

export default FeedbackCarouselCard;