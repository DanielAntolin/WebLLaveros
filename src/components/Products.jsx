import { products as initialProducts } from '../mocks/products.json';
import './Products.css';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx';
import { useCart } from '../hooks/useCart.js';
import { Filters } from '../components/Filters.jsx'; // Importa el componente Filters
import { useFilters } from '../hooks/useFilters.js';

export function LoadPageProducts() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);
  return (
    <div className="page-container"> {/* Envuelve Products y Filters */}
      <Filters /> {/* Renderiza el componente Filters aquí */}
      <Products products={filteredProducts} />
    </div>
  );
}

export function Products({ products }) {
  const { addToCart, removeFromCart, cart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => {
          const isProductInCart = checkProductInCart(product);

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }}
                  onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product);
                  }}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}