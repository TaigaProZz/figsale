import axios from "axios";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Favorite (props) {
  const [fav, setFav] = useState(props.favorite);

  // get first image of product to display
  const getFirstImage = (product) => {
    if (product) {
      const imageArray = JSON.parse(product.images);
      return imageArray.length > 0 ? "https://figsale.s3.fr-par.scw.cloud/images/" + imageArray[0] : null;
    }
    return null;
  }

  const handleClick = (favorite) => {
    console.log(favorite);
  };

  const handleDelete = async (item) => {
    // pop up to confirm delete
    const confirm = window.confirm('Voulez-vous vraiment supprimer ce produit ?');
    if (confirm) {
      // delete product
      try {
        axios.delete('http://localhost:3307/favorite/' + item.id).then(() => {
          props.setFavorite(prevFavorites => prevFavorites.filter(favorite => favorite.id !== item.id));
          setFav(prevFavorites => prevFavorites.filter(favorite => favorite.id !== item.id));
        }).catch((error) => {
          console.log(error);
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  // product list
  return (
    <div className='table-container'>
      <table>
        <tbody>
          {fav.map((favorite) => {
            return (
              <tr className="dashboard-favorite-product" key={favorite.id}>
                <td onClick={() => handleClick(favorite)}>
                  <img src={getFirstImage(favorite)} alt={favorite.title} />
                </td>
                <td onClick={() => handleClick(favorite)}>{favorite.title}</td>
                <td>
                <Popup 
                  contentStyle={{width: "200px", padding: "20px", backgroundColor: "#f5f5f5", cursor: "pointer"}}
                  trigger= {<div><FaTrashAlt /></div>} 
                  position="left center">
                  {/*   popup content  */}  
                  <div onClick={() => handleDelete(favorite)}>Confirmer la suppression du favori</div>
                </Popup>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
  </div>
  );
}

export default Favorite;