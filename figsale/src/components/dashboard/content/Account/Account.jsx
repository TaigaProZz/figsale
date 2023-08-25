import './Account.scss';

function Account ({ user }) {
  return (
  <div className='account-container'>
    <div className='account-header'>
      <h1>Mon compte</h1>
    </div>
    <div className='account-content'>
      <h2>Informations personnelles</h2>
      <div className='account-content-item-content'>
        <p>{user.user.isAdmin ? 'Compte administrateur' : null}</p>
      </div>
      <div className='account-content-item-content'>
        <span>Email</span>
        <input disabled value={user.user.email}></input>
      </div>
    </div>
  </div>
  );
}

export default Account;