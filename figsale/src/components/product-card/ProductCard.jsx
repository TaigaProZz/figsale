import './ProductCard.scss'

function ProductCard (props) {
  return (
    <div className='product-card'>
      {checkLabel(props) ? 
        <div className='product-card-label'>
          <p className='center'>{checkLabel(props)}</p>
        </div> 
      : null}

      <div className="product-card-image">
        {<img src={props.img} alt={props.alt}></img> }
      </div>
      
      <div className='product-card-name center'>
        <p>{props.title}</p>
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

function checkLabel (props) {
  switch (props.availability) {
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