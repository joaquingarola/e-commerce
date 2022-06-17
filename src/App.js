import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact.js';
import Home from './pages/Home.js';
import Cart from './pages/Cart.js';
import Footer from './components/Footer/Footer.js'
import { CartProvider } from './context/CartContext.js';

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/category/:id' element={<ItemListContainer />} />
            <Route path='/Contacto' element={<Contact />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='*' element={<h1 style={{textAlign: 'center'}}>404 - Página no encontrada</h1>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;

