import './ConfirmationPage.scss';
import { Link } from 'react-router-dom';

function ConfirmationPage () {
  return (
    <div className='confirmation-page-container'>
      <div className='confirmation-page-header'>
        <img src='img/logo.png' alt='logo'></img>
      </div>
      <div className='confirmation-page-content'>
        <h1>Votre message a bien été envoyé.</h1>
        <p>Nous vous répondrons dans les plus brefs délais.</p>
        <p>Consulter la liste de vos messages depuis votre espace client.</p>
        <Link to='/dashboard'>
          <button>Aller à l'espace client</button>
        </Link>

      </div>
    </div>
  )
}

export default ConfirmationPage;