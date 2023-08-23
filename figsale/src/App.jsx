import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import NavBar from './components/navbar/NavBar';
import Products from './pages/products/Products';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='contact' element={<Contact />} />
          <Route path='login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>   
  );
}

export default App;
