import './Products.scss'
import ProductsList from '../../components/products-page/products-list/ProductsList';
import Sort from '../../components/products-page/product-sort/ProductSort';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Products () {
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // request await axios ....
        const response = await axios.get(`http://localhost:3307/product/`);
        setProducts(response.data);
        const response2 = await axios.get(`http://localhost:3307/images`);
        setImages(response2.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="products-container">
      <Sort />
      <ProductsList products={products} images={images}/>
    </div>
  )
}

export default Products;