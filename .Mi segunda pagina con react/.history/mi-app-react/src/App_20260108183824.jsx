const products = [
  { id: 1, name: "Auriculares Gamer", price: 25 },
  { id: 2, name: "Mouse RGB", price: 15 },
  { id: 3, name: "Teclado Mecánico", price: 45 },
  { id: 4, name: "Control Gaming", price: 30 },
];

// 1️⃣ Componente para cada producto
function ProductCard({ product }) {
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
      <button>Agregar al carrito</button>
    </div>
  );
}

// 2️⃣ Componente principal
export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Tienda en React 🛍️</h1>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}