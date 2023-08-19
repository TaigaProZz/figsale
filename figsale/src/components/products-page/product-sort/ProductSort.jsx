import './ProductSort.scss';

function Sort () {
  return (
    <div className='product-sort-container'>
      <div className='product-sort-shape'>
        <div className='product-sort-shape-title'>
          <h2>Trier par</h2>
        </div>
        <div className='product-sort-shape-price'>
          <h3>Prix</h3>
          <div className='product-sort-shape-price-input-container'>
            <div>
              <label>Minimum</label>
              <input className='product-sort-shape-price-input' type='number' placeholder='€' />
            </div>
            <div>
              <label>Maximum</label>
              <input className='product-sort-shape-price-input' type='number' placeholder='€' />
            </div>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Sort;