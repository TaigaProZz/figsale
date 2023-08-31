import 'rc-slider/assets/index.css';
import './ProductSortMobile.scss';
import Slider from 'rc-slider';

const size = [
  10,
  20,
  30,
  50,
  100,
  200
];

function SortMobile (props) {
  const handleSliderChange = (values) => {
    props.setSliderValues(values);
  };

  const handleLicenceChange = (event) => {
    props.setFilteredLicences(event.target.value);
  };

  return (
    <div className='product-sort-container-mobile'>
      <div className='product-sort-shape-mobile'>
        <div className='product-sort-shape-title-mobile'>
          <h2>Trier par</h2>
        </div>
        <div className='product-sort-price-container-mobile'>
          <h3>Prix</h3>
          <div className='product-sort-price-slider-container-mobile'>
            <div className='price-slider-mobile'>
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
        <div className='product-sort-licence-container-mobile'>
          <h3>Licence</h3>
          <div className='product-sort-licence-select-container-mobile'>
            <select defaultValue={props.licence} onChange={handleLicenceChange}>
              <option value=''>Toutes les licences</option>
              {props.licences.map((licence, index) => (
                <option key={index} value={licence.licence_name}>{licence.licence_name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='product-sort-size-container-mobile'>
          <h3>Taille</h3>
          <div className='product-sort-size-select-container-mobile'>
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

export default SortMobile;