import './Products.scss'
import ProductsList from '../../components/products-page/products-list/ProductsList';
import Sort from '../../components/products-page/product-sort/ProductSort';

function Products () {
  return (
    <div className="products-container">
      <Sort />
      <ProductsList />
    </div>
  )
}

export default Products;