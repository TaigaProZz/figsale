import './ProductsList.scss';
import ProductCard from '../../product-card/ProductCard';

function ProductsList() {
  const products = [
    {
      id: 1,
      img: 'https://www.nautiljon.com/images/perso/00/66/elizabeth_liones_10866.webp',
      alt: 'efefe',
      name: 'zoro',
      price: 100,
      label: 2,
      fav: true
    },
    {
      id: 2,
      img: '/img/banner.jpg',
      alt: 'efefe',
      name: 'zoro',
      price: 100,
      label: 2,
      fav: false
    },
    {   
      id: 3,
      img: '/img/banner.jpg',
      alt: 'efefe',
      name: 'zoro',
      price: 100,
      label: 2,
      fav: true
    },
    {
      id: 4,
      img: '/img/banner.jpg',
      alt: 'efefe',
      name: 'zoro',
      price: 100,
      label: 2,
      fav: false
    },
    {
      id: 5,
      img: '/img/banner.jpg',
      alt: 'efefe',
      name: 'zoro',
      price: 100,
      label: 2,
      fav: true
    },
    {
      id: 6,
      img: '/img/banner.jpg',
      alt: 'efefe',
      name: 'zoro',
      price: 100,
      label: 2,
      fav: false
    },
    {
      id: 7,
      img: '/img/banner.jpg',
      alt: 'efefe',
      name: 'zoro',
      price: 100,
      label: 2,
      fav: false
    },
    {
      id: 8,
      img: '/img/banner.jpg',
      alt: 'efefe',
      name: 'zoro',
      price: 100,
      label: 2,
      fav: false
    },
    {
      id: 9,
      img: '/img/banner.jpg',
      alt: 'efefe',
      name: 'zoro',
      price: 100,
      label: 3,
      fav: false
    },
    {
      id: 10,
      img: '/img/banner.jpg',
      alt: 'efefe',
      name: 'zoro',
      price: 100,
      label: 1,
      fav: false
    }
  ];

  return (
    <div className='products-list-container'>
      <div className='products-list-title'>
        <h1>Produits</h1>
        <p>{products.length} éléments</p>
      </div>
      <div className='products-list-content'>
        {products.map((product) => (
          <div className='products-list-element' key={product.id}>
            <ProductCard  img={product.img} alt={product.alt} name={product.name} price={product.price} fav={product.fav} label={product.label}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsList;