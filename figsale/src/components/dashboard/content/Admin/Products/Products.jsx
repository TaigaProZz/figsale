import './Products.scss';

const products = [
  {
    id: 1,
    img: 'https://www.nautiljon.com/images/perso/00/66/elizabeth_liones_10866.webp',
    alt: 'efefe',
    name: 'zoro',
    price: 100,
    label: 2,
    fav: true
  },
  {
    id: 2,
    img: '/img/banner.jpg',
    alt: 'efefe',
    name: 'zoro',
    price: 100,
    label: 2,
    fav: false
  },
  {   
    id: 3,
    img: '/img/banner.jpg',
    alt: 'efefe',
    name: 'zoro',
    price: 100,
    label: 2,
    fav: true
  },
  {
    id: 4,
    img: '/img/banner.jpg',
    alt: 'efefe',
    name: 'zoro',
    price: 100,
    label: 2,
    fav: false
  },
  {
    id: 5,
    img: '/img/banner.jpg',
    alt: 'efefe',
    name: 'zoro',
    price: 100,
    label: 2,
    fav: true
  },
  {
    id: 6,
    img: '/img/banner.jpg',
    alt: 'efefe',
    name: 'zoro',
    price: 100,
    label: 2,
    fav: false
  },
  {
    id: 7,
    img: '/img/banner.jpg',
    alt: 'efefe',
    name: 'zoro',
    price: 100,
    label: 2,
    fav: false
  },
  {
    id: 8,
    img: '/img/banner.jpg',
    alt: 'efefe',
    name: 'zoro',
    price: 100,
    label: 2,
    fav: false
  },
  {
    id: 9,
    img: '/img/banner.jpg',
    alt: 'efefe',
    name: 'zoro',
    price: 100,
    label: 3,
    fav: false
  },
  {
    id: 10,
    img: '/img/banner.jpg',
    alt: 'efefe',
    name: 'zoro',
    price: 100,
    label: 1,
    fav: false
  }
];

const labels = [
  {
    value: 0,
    label: 'Aucun'
  },
  {
    value: 1,
    label: 'Nouveau'
  },
  {
    value: 2,
    label: 'Promotion'
  },
  {
    value: 3,
    label: 'Précommande'
  }
]

function Products() {
  const handleSave = () => { 
    console.log('save');
  };
 
  return (
  <div className='table-container'>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th></th>
          <th>Nom</th>
          <th>Prix</th>
          <th>Statut</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td><img src={product.img} alt={product.alt}></img></td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <select defaultValue={product.label}>
                  {labels.map((label) => { 
                    return (
                      <option key={label.value} value={label.value}>{label.label}</option>
                    );
                  })}
                </select>
              </td>
              <td>
                <button onClick={() => handleSave()}>Sauvegarder</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  );
}

export default Products;