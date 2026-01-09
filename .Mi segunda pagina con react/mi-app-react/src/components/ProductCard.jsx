export default function ProductCard({ product, onAdd }) {
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