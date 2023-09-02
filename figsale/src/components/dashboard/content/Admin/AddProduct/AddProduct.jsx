import './AddProduct.scss';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

function AddProduct() {
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [licences, setLicences] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    availability: '0', 
    licence: '', 
    size: '',
    matter: '',
    images: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const licenceResponse = await axios.get('http://localhost:3307/sort/licence');
        setLicences(licenceResponse.data);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des licences :', error);
        toast.error('Une erreur s\'est produite lors de la récupération des licences.');
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImagesChange = (event, index) => {
    // check if file is an image
    if (!isValidImageFile(event.target.files[0])) {
      event.target.value = null;
      return toast.error('Le fichier doit être une image');
    }
  
    const files = event.target.files;
    const image = files[0]; 
  
    const reader = new FileReader();
    reader.onload = () => {
      const imageDataUrl = reader.result;
  
      setPreviewImages((prevImages) => {
        const updatedImages = [...prevImages];
        updatedImages[index] = imageDataUrl;
        return updatedImages;
      });
  
      setImages((prevImages) => {
        const updatedImages = [...prevImages];
        updatedImages[index] = image;
        return updatedImages;
      });
    };
    toast.success('Image ajoutée');
    reader.readAsDataURL(image);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkInputs(formData)) {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('availability', formData.availability);
      formDataToSend.append('licence', formData.licence);
      formDataToSend.append('size', formData.size);
      formDataToSend.append('matter', formData.matter);
  
      for (let i = 0; i < images.length; i++) {
        formDataToSend.append('images', images[i]);
      }
  
      try {
        await axios.post('http://localhost:3307/product', formDataToSend);
        toast.success('Produit ajouté avec succès !');
      } catch (error) {
        console.error('Une erreur s\'est produite lors de l\'ajout du produit :', error);
        toast.error('Une erreur s\'est produite lors de l\'ajout du produit.');
      }
    }
  };
 
  return (
    <form className='dashboard-add-product-form' onSubmit={handleSubmit}>
      <div className='dashboard-add-product-form-title dashboard-add-product-form-item'>
        <h2>Ajouter un produit</h2>
      </div>
      <div className='dashboard-add-product-form-title dashboard-add-product-form-item'>
        <label htmlFor='title'>Titre</label>
        <input type='text' id='title' name='title' value={formData.title} onChange={handleChange}/>
      </div>
      <div className='dashboard-add-product-form-price dashboard-add-product-form-item'>
        <label htmlFor='price'>Prix</label>
        <input type='text' id='price' name='price' value={formData.price} onChange={handleChange} />
      </div>
      <div className='dashboard-add-product-form-description dashboard-add-product-form-item'>
        <label htmlFor='description'>Description</label>
        <textarea id='description' name='description' value={formData.description} onChange={handleChange}/>
      </div>
      <div className='dashboard-add-product-form-label dashboard-add-product-form-item'>
        <label htmlFor='label'>Statut</label>
        <select id='label' name='label' value={formData.label} onChange={handleChange}>
          <option value='0'>Standard</option>
          <option value='1'>Nouveau</option>
          <option value='2'>Promotion</option>
          <option value='3'>Précommande</option>
        </select>
      </div>
      <div className='dashboard-add-product-form-licence dashboard-add-product-form-item'>
        <label htmlFor='licence'>Licence</label>
        <select id='licence' name='licence' value={formData.licence} onChange={handleChange}>
          {licences.map((licence, index) => (
            <option key={index} value={licence.licence_name}>{licence.licence_name}</option>
           ))}
        </select>
      </div>
      <div className='dashboard-add-product-form-size dashboard-add-product-form-item'>
        <label htmlFor='size'>Taille</label>
        <input type='text' id='size' name='size' value={formData.size} onChange={handleChange}/>
      </div>
      <div className='dashboard-add-product-form-matter dashboard-add-product-form-item'>
        <label htmlFor='matter'>Matiere</label>
        <input type='text' id='matter' name='matter' value={formData.matter} onChange={handleChange}/>
      </div>
      <div className='dashboard-add-product-form-img dashboard-add-product-form-item'>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="image-input">
            <span key={index}>Image {index + 1}</span>
            <label htmlFor={`image${index + 1}`}>
              {previewImages[index] ? (
                <img className='preview-image' src={previewImages[index]} alt={`Preview ${index + 1}`} />
              ) : (
                <input
                  type="file"
                  accept="image/jpeg, image/png, image/jpg"
                  size="5242880"
                  id={`image${index + 1}`}
                  onChange={(event) => handleImagesChange(event, index)}
                />
              )}
            </label>
          </div>
        ))}
      </div>
      <div className='dashboard-add-product-form-submit dashboard-add-product-form-item'>
        <button type='submit'>Ajouter</button>
      </div>
      <ToastContainer 
        position= "bottom-right" 
        theme='dark'
      />
    </form>
  );
}

function isValidImageFile(file) {
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
  const fileName = file.name.toLowerCase();
  return allowedExtensions.some(extension => fileName.endsWith(extension));
}

function checkInputs (values) {
  if (!values.title.trim()) {
    alert('Le titre est requis');
    return false;
  }

  if (!values.price.trim()) {
    return alert('Le prix est requis');
  } else if (isNaN(values.price)) {
    return alert('Le prix doit être un nombre');
  }

  if (!values.description.trim()) {
    return alert('La description est requise');
  }

  if (!values.size.trim()) {
    return alert('La taille est requise');
  } else if (isNaN(values.size)) {
    return alert('La taille doit être un nombre');
  }
  return true;
}

export default AddProduct;