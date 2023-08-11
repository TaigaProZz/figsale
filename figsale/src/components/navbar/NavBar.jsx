import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { useState } from 'react';
import './NavBar.scss';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  }
  
  const closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <div> 
      <div className="navbar-bar">
        <Menu
          className='burger' 
          pageWrapId={ "page-wrap" } 
          outerContainerId={ "outer-container" } 
          isOpen={ menuOpen }
          onStateChange={(state) => handleStateChange(state)}
        >
          <div className='logo'>
            <img src="/img/burger-logo.png" alt="figsale logo" />
          </div>

          <Link to='/' className="menu-item" onClick={closeMenu}>
            Accueil
          </Link>
          <Link to='products' className="menu-item" onClick={closeMenu}>
            Figurines
          </Link>
          <Link to='contact' className="menu-item" onClick={closeMenu}>
            Contactez nous
          </Link>
        </Menu>

        <div className="navbar-logo">
          <div className='logo'>
            <img src='/img/navbar-logo.png' alt="figsale logo" />
          </div>
        </div>
        <div className="navbar-links">
          <Link to='/'>
            <h1>Accueil</h1>
          </Link>   
          <Link to='products'>
            <h1>Figurines</h1>
          </Link>
          <Link to='contact'>
            <h1>Contactez nous</h1>
          </Link>
        </div>

        <div className="navbar-search">
          <input className='navbar-search-input' type="text" placeholder="Rechercher">
          </input>
        </div>
        <div className="navbar-account">
          <div className='navbar-user-logo'>
            <img src='/img/user.png' alt='user'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar;