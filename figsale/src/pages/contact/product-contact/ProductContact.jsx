import { useEffect, useState } from 'react';
import './ProductContact.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Contact (user) {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state ? location.state.product : null;
  const [formData, setFormData] = useState({name: "", email: "", message: '', subject: product ? product.title : ''});

  // redirect to contact page if no product is selected
  useEffect(() => {
    if (!product) {
      navigate('/contact'); 
    }
  }, [product, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (checkFormData(formData)) {
      await sendData();
    }
  };

  const sendData = async () => {
    console.log(formData);
    try {
      const conversationId = Date.now();
      await axios.put('http://localhost:3307/message', {conversation_id: conversationId, send_date: Date(), message_content: formData.message});
      await axios.put('http://localhost:3307/conversation', 
        { conversation_id: conversationId,
          creator_id: user.user.id,
          product_id: product.id,
          subject: formData.subject,
          status: 1,
          last_activity: Date()
        });
      navigate('/confirmation-page');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='contact-container'>
      <div className='contact-header'>
        <img src='img/logo.png' alt='logo'></img>
      </div>
      <form className='contact-form-container'>
        <div className='contact-form'>
          <label htmlFor="name">Nom prénom*</label>
          <input type="text" id="name" name="name" value={formData.name} placeholder='Joe' onChange={handleChange} maxLength={32}/>

          <label htmlFor="email">Email*</label>
          <input type="email" id="email" name="email" value={formData.email} placeholder='Joe@example.com' onChange={handleChange} maxLength={32}/>

          <label htmlFor="subject">Sujet</label>
          <input type="subject" id="subject" name="subject" defaultValue={product ? product.title : ''} disabled/>

          <label htmlFor="message">Message*</label>
          <textarea id="message" name="message" value={formData.message} placeholder='Votre message' onChange={handleChange} maxLength={512}/>

          <button type="submit" onClick={handleSubmit}>Envoyer</button> 
        </div>
        
      </form>
    </div>
  )
}

function checkFormData(formData) {
  if (formData.name === '') {
    alert('Veuillez entrer votre nom et prénom');
    return false;
  }
  if (formData.email === '') {
    alert('Veuillez entrer votre email');
    return false;
  }
  if (formData.message === '') {
    alert('Veuillez entrer votre message');
    return false;
  }
  return true;
}

export default Contact;