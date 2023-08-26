function Favorite () {
  const favorite = [
    {
      id: 1,
      productName: 'Produit 1',
      productId: 1,
      productImg: 'img/user.png',
      addDate: '01/01/2021',
      isFav: 0,
    },
    {
      id: 2,
      productName: 'Produit 1',
      productId: 1,
      productImg: 'img/user.png',
      addDate: '01/01/2021',
      isFav: 1,
    },
    {
      id: 3,
      productName: 'Produit 1',
      productId: 1,
      productImg: 'img/user.png',
      addDate: '01/01/2021',
      isFav: 1,
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
            <th>Favori</th>
          </tr>
        </thead>
        <tbody>
          {favorite.map((favorite) => {
            return (
              <tr key={favorite.id} onClick={() => handleClick(favorite)}>
                <td><img src={favorite.productImg} alt={favorite.productName}></img></td>
                <td>{favorite.addDate}</td>
                <td>{favorite.isFav ? <p>oui</p> : <p>non</p>}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
  </div>
  );
}

export default Favorite;