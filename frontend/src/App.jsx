import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function obtenerProductos() {
      try {
        const respuesta = await axios.get(
          "http://localhost:3000/api/products"
        );
        setProductos(respuesta.data.data);
      } catch {
        setError("No se pudo cargar el catálogo. Inténtalo más tarde.");
      } finally {
        setCargando(false);
      }
    }

    obtenerProductos();
  }, []);

  return (
    <main>
      <h1>Catálogo de productos</h1>
      <p>Conoce nuestros productos disponibles.</p>

      {cargando && <p>Cargando productos...</p>}
      {error && <p>{error}</p>}

      {!cargando && !error && productos.length === 0 && (
        <p>Por el momento no hay productos disponibles.</p>
      )}

      <section>
        {productos.map((producto) => (
          <article key={producto.id}>
            <img src={producto.image} alt={producto.name} width="180" />
            <h2>{producto.name}</h2>
            <p>${Number(producto.price).toFixed(2)}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;