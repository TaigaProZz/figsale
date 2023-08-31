import './Dashboard.scss';
import React, { useEffect, useState } from 'react';
import Account from '../../components/dashboard/content/Account/Account';
import Conversations from '../../components/dashboard/content/Messages/Conversation/Conversations';
import Favorite from '../../components/dashboard/content/Favorite/Favorite';
import AdminMessage from '../../components/dashboard/content/Admin/Messages/Messages';
import AdminProducts from '../../components/dashboard/content/Admin/Products/Products';
import AdminUsers from '../../components/dashboard/content/Admin/Users/Users';
import axios from 'axios';

function Dashboard(user) {
  const [selectedMenuItem, setSelectedMenuItem] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const conversationResponse = await axios.get(`http://localhost:3307/conversation/${user.user.id}`);
        const favoriteResponse = await axios.get(`http://localhost:3307/favorite/${user.user.id}`);
        setConversations(conversationResponse.data);
        setFavorite(favoriteResponse.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    setSelectedMenuItem(<Account user={user}/>);
    setIsAdmin(user.user.grade);
  }, [user]);

  const MENU_ITEMS = {
    'ACCOUNT': {
      name: 'Mon compte',
      component : <Account user={user} />,
      isAdmin: false  
    },
    'CONVERSATION': {
      name: 'Mes messages',
      component : <Conversations conversations={conversations} selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} user={user} />,
      isAdmin: false
    },
    'FAVORITE': {
      name: 'Mes favoris',
      component : <Favorite favorite={favorite} setFavorite={setFavorite} user={user} />,
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
