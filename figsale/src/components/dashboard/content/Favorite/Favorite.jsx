import axios from "axios";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Favorite (props) {
  const [fav, setFav] = useState(props.favorite);
  const navigate = useNavigate();

  // get first image of product to display
  const getFirstImage = (product) => {
    if (product) {
      const imageArray = JSON.parse(product.images);
      return imageArray.length > 0 ? "https://figsale.s3.fr-par.scw.cloud/images/" + imageArray[0] : null;
    }
    return null;
  }

  const handleClick = (favorite) => {
    navigate('/products/' + favorite.id)
  };

  const handleDelete = async (item) => {
    // pop up to confirm delete
    const confirm = window.confirm('Voulez-vous vraiment supprimer ce produit ?');
    if (confirm) {
      // delete product
      try {
        axios.delete(`http://localhost:3307/favorite/${props.user.user.id}/${item.id}`).then(() => {
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
                <td onClick={() => handleClick(favorite)}>
                  <p style={{fontWeight: '700'}}>Nom: {favorite.title} <br /></p>
                  Prix: {favorite.price}€ <br />
                  Taille: {favorite.size} cm
                </td>
                <td>
                <Popup 
                  contentStyle={{width: "100px", padding: "15px", backgroundColor: "#F3F3F3", color: "red", fontWeight: "700", cursor: "pointer"}}
                  trigger= {<div><FaTrashAlt color="red" /></div>} 
                  position="left center">
                  {/*   popup content  */}  
                  <div onClick={() => handleDelete(favorite)}>Supprimer des favoris</div>
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