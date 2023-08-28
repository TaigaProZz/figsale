import './Products.scss'
import ProductsList from '../../components/products-page/products-list/ProductsList';
import Sort from '../../components/products-page/product-sort/ProductSort';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Products () {
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);
  const [sliderValues, setSliderValues] = useState([0, 1000]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // request await axios ....
        const response = await axios.get(`http://localhost:3307/product/`);
        const response2 = await axios.get(`http://localhost:3307/images`);
        setProducts(response.data);
        setImages(response2.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="products-container">
      <Sort sliderValues={sliderValues} setSliderValues={setSliderValues} />
      <ProductsList products={products} images={images} sliderValues={sliderValues}/>
    </div>
  )
}

export default Products;