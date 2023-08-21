import './Footer.scss';
import {FaEnvelope} from 'react-icons/fa';

function Footer () {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src='/img/burger-logo.png' alt='figsale logo' />
      </div>
      <div className='footer-links'>
        <p>Mentions légales</p>
        {/* <hr className='footer-separator' /> */}
        <p>Garantie légale et assurance</p>
        {/* <hr className='footer-separator' /> */}
        <p>Gestion des cookies</p>
        {/* <hr className='footer-separator' /> */}
        <div className='footer-github'>
          <p>Site réalisé par Taiga ProZz</p>
          <img src='/img/github-ico.png' alt='github icon'></img>
        </div>
      </div>
      <div className='footer-contact'>
        <button className='footer-contact-button'>
          <span>Nous contacter</span>
          <FaEnvelope className='footer-envelope'/>
        </button>
      </div>
    </div>
  )
}

export default Footer;