function Favorite () {
  const favorite = [
    {
      id: 1,
      productName: 'Produit 1',
      productId: 1,
      productImg: 'img/user.png',
      addDate: '01/01/2021',
      status: '1',
    },
    {
      id: 2,
      productName: 'Produit 1',
      productId: 1,
      productImg: 'img/user.png',
      addDate: '01/01/2021',
      status: '1',
    },
    {
      id: 3,
      productName: 'Produit 1',
      productId: 1,
      productImg: 'img/user.png',
      addDate: '01/01/2021',
      status: '1',
    },
  ]

  const handleClick = (favorite) => {
    console.log(favorite);
  };

  return (
  <div className='table-container'>
    <table>
      <thead>
        <tr>
          <th>Produit</th>
          <th>Date d'ajout en favori</th>
          <th>Disponibilité</th>
        </tr>
      </thead>
      <tbody>
        {favorite.map((favorite) => {
          return (
            <tr key={favorite.id} onClick={() => handleClick(favorite)}>
              <td><img src={favorite.productImg} alt={favorite.productName}></img></td>
              <td>{favorite.addDate}</td>
              <td>{displayDisponibility(favorite.status)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  );
}

function displayDisponibility(disponibility) {
  switch (disponibility) {
    case '1':
      return 'Disponible';
    case '2':
      return 'Non disponible';
    default:
      return null;
  }
}

export default Favorite;