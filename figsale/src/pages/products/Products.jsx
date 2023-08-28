import './Products.scss'
import ProductsList from '../../components/products-page/products-list/ProductsList';
import Sort from '../../components/products-page/product-sort/ProductSort';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Products () {
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);
  const [licences, setLicences] = useState([]);
  const [filterLicences, setFilterLicences] = useState('');
  const [sliderValues, setSliderValues] = useState([0, 1000]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await axios.get(`http://localhost:3307/product/`);
        const imageReponse = await axios.get(`http://localhost:3307/images`);
        const licenceResponse = await axios.get(`http://localhost:3307/sort/licence`);
        setProducts(productResponse.data);
        setImages(imageReponse.data);
        setLicences(licenceResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="products-container">
      <Sort sliderValues={sliderValues} setSliderValues={setSliderValues} licences={licences} setLicences={setLicences} filteredLicences={filterLicences} setFilteredLicences={setFilterLicences} />
      <ProductsList products={products} images={images} sliderValues={sliderValues} licences={licences} filteredLicences={filterLicences} setFilteredLicences={setFilterLicences} />
    </div>
  )
}

export default Products;