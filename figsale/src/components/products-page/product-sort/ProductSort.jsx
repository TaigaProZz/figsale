import 'rc-slider/assets/index.css';
import './ProductSort.scss';
import Slider from 'rc-slider';
import { useState } from 'react';

const licence = [
  "Licence 1",
  "Licence 2",
  "Licence 3",
  "Licence 4",
  "Licence 5",
  "Licence 6",
  "Licence 7",
];

const size = [
  10,
  20,
  30,
  50,
  100,
  200
];


function Sort () {
  const [sliderValues, setSliderValues] = useState([0, 1000]);

  const handleSliderChange = (values) => {
    console.log(values);
    setSliderValues(values);
  };

  return (
    <div className='product-sort-container'>
      <div className='product-sort-shape'>
        <div className='product-sort-shape-title'>
          <h2>Trier par</h2>
        </div>
        <div className='product-sort-price-container'>
          <h3>Prix</h3>
          <div className='product-sort-price-slider-container'>
            <div className='price-slider'>
              <p>
                {sliderValues.map(value => value + "€").join(' - ')}
              </p>
              <Slider 
                range={true}
                allowCross={false}
                min={0} 
                max={1000} 
                defaultValue={sliderValues} 
                onChange={handleSliderChange} 
              />
            </div>
          </div>
        </div>
        <div className='product-sort-licence-container'>
          <h3>Licence</h3>
          <div className='product-sort-licence-select-container'>
            <select>
              {licence.map((licence, index) => (
                <option key={index} value={licence}>{licence}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='product-sort-size-container'>
          <h3>Taille</h3>
          <div className='product-sort-size-select-container'>
            <select>
              {size.map((size, index) => (
                <option key={index} value={size}>{size}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sort;