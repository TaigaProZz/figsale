import './PresentationCarouselCard.scss';

function PresentationCarouselCard (props) {

  return (
    <div>
      <div className='presentation-carousel-card'>
        <div className="presentation-carousel-card-image">
          {<img src={props.img} alt={props.alt}></img> }
        </div>

      </div>
    </div>
  )
}

export default PresentationCarouselCard;