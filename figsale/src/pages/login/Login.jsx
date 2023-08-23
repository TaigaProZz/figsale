import { useState } from 'react';
import './Login.scss';

function Login () {
  const [formData, setFormData] = useState({email: "", password: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}`
    );
  };
  return (
    <div className='login-container'>
      <div className='login-header'>
        <img src='img/logo.png'></img>
      </div>
      <form className='login-form-container'>
        <div className='login-form'>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} placeholder='email@example.fr' onChange={handleChange} maxLength={32}/>

          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" name="password" value={formData.password} placeholder='Saisissez votre mot de passe' onChange={handleChange}/>
          <div className='login-button-container'>
            <button type="submit" onClick={handleSubmit}>Se connecter</button> 
          </div>
        </div>
        
      </form>
    </div>
  )
}

export default Login;