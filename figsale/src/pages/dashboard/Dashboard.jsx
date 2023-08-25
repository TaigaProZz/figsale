import './Dashboard.scss';
import React, { useState } from 'react';
import Account from '../../components/dashboard/content/Account/Account';
import Messages from '../../components/dashboard/content/Messages/Messages';
import Favorite from '../../components/dashboard/content/Favorite/Favorite';

function Dashboard(user) {
  const [selectedMenuItem, setSelectedMenuItem] = useState('account');

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  const renderContent = () => {
    switch (selectedMenuItem) {
      case 'account':
        return <Account user={user} />;
      case 'messages':
        return <Messages />;
      case 'favorite':
        return <Favorite />;
      default:
        return null;
    }
  };

  return (
    <div className='dashboard-container'>
      <div className='dashboard-header'>
        <img src='img/logo.png' alt='figsale logo'></img>
      </div>
      <div className='dashboard-main-container'>
        <div className='dashboard-menu'>
          <div className='dashboard-menu-item'>
            <h1>Tableau de bord</h1>
          </div>
          <div className='dashboard-menu-item' onClick={() => handleMenuItemClick('account')}>
            <h2>Compte</h2>
          </div>
          <div className='dashboard-menu-item' onClick={() => handleMenuItemClick('messages')}>
            <h2>Mes messages</h2>
          </div>
          <div className='dashboard-menu-item' onClick={() => handleMenuItemClick('favorite')}>
            <h2>Mes favoris</h2>
          </div>
        </div>
        <div className='dashboard-content-container'>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
