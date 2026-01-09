import { useState } from "react";

const products = [
  { id: 1, name: "Auriculares Gamer", price: 25 },
  { id: 2, name: "Mouse RGB", price: 15 },
  { id: 3, name: "Teclado Mecánico", price: 45 },
  { id: 4, name: "Control Gaming", price: 30 },
];

// 🧩 Producto
function ProductCard({ product, onAdd }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "10px",
        width: "200px",
      }}
    >
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <button onClick={() => onAdd(product)}>
        Agregar al carrito
      </button>
    </div>
  );
}

// 🧩 App principal
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
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>

      <h3>Total: ${total}</h3>
    </div>
  );
}