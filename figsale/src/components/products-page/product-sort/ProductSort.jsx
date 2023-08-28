import 'rc-slider/assets/index.css';
import './ProductSort.scss';
import Slider from 'rc-slider';

const size = [
  10,
  20,
  30,
  50,
  100,
  200
];

function Sort (props) {
  const handleSliderChange = (values) => {
    props.setSliderValues(values);
  };

  const handleLicenceChange = (event) => {
    props.setFilteredLicences(event.target.value);
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
                {props.sliderValues.map(value => value + "€").join(' - ')}
              </p>
              <Slider 
                range={true}
                allowCross={false}
                min={0} 
                max={1000} 
                defaultValue={props.sliderValues} 
                onChange={handleSliderChange} 
              />
            </div>
          </div>
        </div>
        <div className='product-sort-licence-container'>
          <h3>Licence</h3>
          <div className='product-sort-licence-select-container'>
            <select defaultValue='' onChange={handleLicenceChange}>
              <option value=''>Toutes les licences</option>
              {props.licences.map((licence, index) => (
                <option key={index} value={licence.licence_name}>{licence.licence_name}</option>
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