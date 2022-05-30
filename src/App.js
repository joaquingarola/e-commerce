import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact.js';
import Home from './pages/Home.js';
import Products from './pages/Products.js';
import Detail from './pages/Detail.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Productos' element={<Products />} />
          <Route path='/Productos/:id' element={<Detail />} />
          <Route path='/Contacto' element={<Contact />} />
          <Route path='*' element={<h1 style={{textAlign: 'center'}}>404 - Página no encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

