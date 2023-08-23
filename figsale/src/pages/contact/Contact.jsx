import { useState } from 'react';
import './Contact.scss';

function Contact () {
  const [formData, setFormData] = useState({name: "", email: "", message: "", subject: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Sujet: ${formData.subject}, Message: ${formData.message}`
    );
  };
  return (
    <div className='contact-container'>
      <div className='contact-header'>
        <img src='img/logo.png'></img>
      </div>
      <form className='contact-form-container'>
        <div className='contact-form'>
          <label htmlFor="name">Nom prénom*</label>
          <input type="text" id="name" name="name" value={formData.name} placeholder='Joe' onChange={handleChange} maxLength={32}/>

          <label htmlFor="email">Email*</label>
          <input type="email" id="email" name="email" value={formData.email} placeholder='Joe@example.com' onChange={handleChange} maxLength={32}/>

          <label htmlFor="subject">Sujet</label>
          <input type="subject" id="subject" name="subject" value={formData.subject} placeholder='Article ou autre' onChange={handleChange} maxLength={32}/>

          <label htmlFor="message">Message*</label>
          <textarea id="message" name="message" value={formData.message} placeholder='Votre message' onChange={handleChange} maxLength={512}/>

          <button type="submit" onClick={handleSubmit}>Envoyer</button> 
        </div>
        
      </form>
    </div>
  )
}

export default Contact;