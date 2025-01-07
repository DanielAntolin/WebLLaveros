import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FiltersProvider } from './context/filters.jsx';
import { CartProvider } from './context/cart.jsx'; // Importa CartProvider
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* BrowserRouter debe envolver a ambos Providers */}
      <FiltersProvider>
        <CartProvider> {/* CartProvider también debe estar dentro de BrowserRouter */}
          <App />
        </CartProvider>
      </FiltersProvider>
    </BrowserRouter>
  </React.StrictMode>
);