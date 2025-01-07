import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Cart } from './components/Cart.jsx';
import { CartProvider } from './context/cart.jsx';
import { FiltersProvider } from './context/filters.jsx'; // Asegúrate de importar FiltersProvider
import { IS_DEVELOPMENT } from './config.js';

import { LoadPageProducts } from './components/Products.jsx'; // Importa el componente de la lista de productos
import { Home } from './pages/Home.jsx';

function App() {
  return (
    <CartProvider>
      <FiltersProvider> {/* Envuelve el contenido con FiltersProvider */}
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} /> {/* Ruta para la página de inicio */}
          <Route path="/products" element={<LoadPageProducts />} /> {/* Ruta para la lista de productos */}
        </Routes>
        {IS_DEVELOPMENT && <Footer />}
      </FiltersProvider>
    </CartProvider>
  );
}

export default App;