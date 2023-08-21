import './ProductCard.scss'
import {HiOutlineHeart, HiHeart} from 'react-icons/hi'

function ProductCard (props) {
  return (
    <div className='product-card'>
      {checkLabel(props) ? 
        <div className='product-card-label'>
          <p className='center'>{checkLabel(props)}</p>
        </div> 
      : null}

      <div className='product-card-fav'>
        {checkFav(props)}
      </div>

      <div className="product-card-image">
        {<img src={props.img} alt={props.alt}></img> }
      </div>
      
      <div className='product-card-name center'>
        <p>{props.name}</p>
      </div>
      <hr className='product-card-separator'/>
      <div className='product-price'>
        <p className='center'>{props.price}€</p>
      </div>
      <div className='product-card-button center'>
        <button>Voir plus</button>
      </div>
    </div>
  )
}

function checkFav (props) {
  if (props.fav === true) {
    return <HiHeart size={30} color='red'/>
  } else {
    return <HiOutlineHeart size={30}/>
  }
}

function checkLabel (props) {
  switch (props.label) {
    case 0:
      return null;
    case 1:
      return 'Nouveau';
    case 2:
      return 'Promo';
    case 3:
      return 'Précommande';
    default:
      return null; 
  }
}

export default ProductCard;