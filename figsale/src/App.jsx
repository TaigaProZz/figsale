import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import NavBar from './components/navbar/NavBar';
import Products from './pages/products/Products';
import Contact from './pages/contact/Contact';
import './App.scss';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
     
    </div>
    
  );
}

export default App;
