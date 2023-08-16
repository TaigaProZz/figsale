import './ProductCard.scss'
import {HiOutlineHeart, HiHeart} from 'react-icons/hi'


function ProductCard (props) {
  return (
    <div>
      <div className='new-products-carousel-card'>
        <div className='new-products-carousel-card-label'>
          <p>{props.label}</p>
        </div>
        <div className='new-products-carousel-card-fav'>
          {props.fav === true ?
          <HiHeart size={30} color='red'/> :
          <HiOutlineHeart size={30}/>}
        </div>

        <div className="new-products-carousel-card-image">
          {<img src={props.img} alt={props.alt}></img> }
        </div>
        {/* make horizontal line  */}
        
        <div className='new-products-carousel-card-name center'>
          <p>{props.name}</p>
        </div>
        <div className='new-products-carousel-card-price'>
          <p className='center'>{props.price}€</p>
        </div>
        <div className='new-products-carousel-card-button center'>
          <button>Voir plus</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;