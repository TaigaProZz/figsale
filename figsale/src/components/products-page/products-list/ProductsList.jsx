import './ProductsList.scss';
import ProductCard from '../../product-card/ProductCard';
import { Link } from 'react-router-dom';

function ProductsList(props) {
  const products = props.products;
  const images = props.images;
  
  const openFilter = () => {
    console.log('open filter');
  }

  const getFirstImage = (product) => {
    const image = images.find((image) => image.product_id === product.id);
    if (image) {
      const imageArray = JSON.parse(image.images);
      return imageArray.length > 0 ? imageArray[0] : null;
    }
    return null;
  }

  const path = "https://figsale.s3.fr-par.scw.cloud/images/";
  const imageList = products.map((product) => {   
    return (
      <Link to={'/products/' + product.id} key={product.id}>
        <div className='products-list-element'>    
          <ProductCard
            img={path + getFirstImage(product)}
            alt={product.alt}
            title={product.title}
            price={product.price}
            fav={product.fav}
            label={product.label}
          />
        </div>
      </Link>
    );
  })
  
  if (!products.length || !images.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className='products-list-container'>
      <div className='products-list-header'>
        <h1>Produits</h1>
        <p>{products.length} éléments</p>
        <button className='products-list-header-btn' onClick={openFilter}>Filtrer</button>
      </div>
      <div className='products-list-content'>
        {imageList}
      </div>
    </div>
  )
}

export default ProductsList;