function Favorite (props) {
  const favorite = props.favorites;

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