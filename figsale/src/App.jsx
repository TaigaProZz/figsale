import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/home/Home';
import NavBar from './components/navbar/NavBar';
import Products from './pages/products/Products';
import SingleProduct from './pages/single-product/SingleProduct';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  const [user, setUser] = useState({email: '', isAdmin: false});

  const getUser = () => {
    try {
      const us = {email: 'fzf@gmail.com', isAdmin: true};
      setUser(us);
    } catch (error) {
      console.log('error getting user: ', error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login setUser={setUser}/>} />
        <Route path='/dashboard' element={<Dashboard user={user} setUser={setUser} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
