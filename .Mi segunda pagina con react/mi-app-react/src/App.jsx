import { useState } from "react";
import ProductCard from "./components/ProductCard";
import products from "./data/products";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Tienda en React 🛍️</h1>

      <h2>Productos</h2>
      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={addToCart}
          />
        ))}
      </div>

      <hr />

      <h2>🛒 Carrito</h2>
      {cart.length === 0 && <p>El carrito está vacío</p>}
      <ul>
        {cart.map((item, i) => (
          <li key={i}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>

      <h3>Total: ${total}</h3>
    </div>
  );
}