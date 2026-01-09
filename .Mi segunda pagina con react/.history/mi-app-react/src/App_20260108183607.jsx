const products = [
  { id: 1, name: "Auriculares Gamer", price: 25 },
  { id: 2, name: "Mouse RGB", price: 15 },
  { id: 3, name: "Teclado Mecánico", price: 45 },
  { id: 4, name: "Control Gaming", price: 30 },
];

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Tienda en React 🛍️</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}