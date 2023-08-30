import './ProductsList.scss';
import ProductCard from '../../product-card/ProductCard';
import { Link } from 'react-router-dom';

function ProductsList(props) {
  const products = props.products;
  const images = props.images;
  const sliderValues = props.sliderValues;
  const filteredLicence = props.filteredLicences;

  // filter products by price and licence
  const filterProducts = (products) => {
    return products.filter((product) => {
      const priceInRange = product.price >= sliderValues[0] && product.price <= sliderValues[1];
      const licenceMatch = filteredLicence ? product.licence === filteredLicence : true;
      return priceInRange && licenceMatch;
    });
  }

  // open filter menu on mobile
  const openFilter = () => {
    console.log('open filter');
  }

  // get first image of product to display
  const getFirstImage = (product) => {
    const image = images.find((image) => image.product_id === product.id);
    if (image) {
      const imageArray = JSON.parse(image.images);
      return imageArray.length > 0 ? "https://figsale.s3.fr-par.scw.cloud/images/" + imageArray[0] : null;
    }
    return null;
  }

  // product list
  const imageList = filterProducts(products).map((product) => {   
    return (
      <div className='products-list-element' key={product.id}>  
        <Link to={'/products/' + product.id}>  
          <ProductCard
            img={getFirstImage(product)}
            alt={product.title}
            title={product.title}
            price={product.price}
            fav={product.fav}
            availability={product.availability}
          />
        </Link>
      </div>
    );
  })
  
  // DONT DISPLAY IF DATA IS NOT LOADED
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