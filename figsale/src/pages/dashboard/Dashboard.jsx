import './Dashboard.scss';
import React, { useEffect, useState } from 'react';
import Account from '../../components/dashboard/content/Account/Account';
import Messages from '../../components/dashboard/content/Messages/Messages';
import Favorite from '../../components/dashboard/content/Favorite/Favorite';
import AdminMessage from '../../components/dashboard/content/Admin/Messages/Messages';
import AdminProducts from '../../components/dashboard/content/Admin/Products/Products';
import AdminUsers from '../../components/dashboard/content/Admin/Users/Users';

function Dashboard(user) {
  const [selectedMenuItem, setSelectedMenuItem] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setSelectedMenuItem(<Account user={user}/>);
    setIsAdmin(user.user.isAdmin);
  }, [user]);

  const MENU_ITEMS = {
    'ACCOUNT': {
      name: 'Mon compte',
      component : <Account user={user}/>,
      isAdmin: false  
    },
    'MESSAGES': {
      name: 'Mes messages',
      component : <Messages />,
      isAdmin: false
    },
    'FAVORITE': {
      name: 'Mes favoris',
      component : <Favorite />,
      isAdmin: false
    },
    'ADMIN_MESSAGE': {
      name: 'Gestion des messages',
      component : <AdminMessage />,
      isAdmin: true
    },
    'ADMIN_PRODUCT': {
      name: 'Gestion des produits',
      component : <AdminProducts />,
      isAdmin: true
    },
    'ADMIN_USER': {
      name: 'Gestion des utilisateurs',
      component : <AdminUsers />,
      isAdmin: true
    }
  };

  if (!user || Object.keys(user).length === 0) {
    return <div>Loading...</div>; 
  }

  return (
    <div className='dashboard-container'>
      <div className='dashboard-header'>
        <img src='img/logo.png' alt='figsale logo'></img>
      </div>
      <div className='dashboard-main-container'>
        <div className='dashboard-menu'>
        {Object.keys(MENU_ITEMS).map((section, index) => {
          const menuItem = MENU_ITEMS[section];
          if (isAdmin|| !menuItem.isAdmin) {
            return (
              <h3
                key={index}
                className='dashboard-menu-item'
                onClick={() => setSelectedMenuItem(menuItem.component)}
              >
                {menuItem.name}
              </h3>
            );
          }
          return null;
        })}
        </div>
        <div className='dashboard-content-container'>
          {selectedMenuItem}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
