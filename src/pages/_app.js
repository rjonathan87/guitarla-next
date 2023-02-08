import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const carritoLS = typeof window !== 'undefined' ? localStorage.getItem('carrito') ?? [] : []
  const [carrito, setCarrito] = useState(carritoLS)
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])
  
  const agregarCarrito = (guitarra) => {
    // Comprobar si la guitarra ya esta en el carrito...
    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      // Iterar para actualizar la cantidad
      const carritoActualizado = carrito.map((guitarraState) => {
        if (guitarraState.id === guitarra.id) {
          guitarraState.cantidad = guitarra.cantidad;
        }
        return guitarraState;
      });
      // Se asigna al array
      setCarrito([...carritoActualizado]);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    } else {
      // En caso de que el articulo no exista, es nuevo y se agrega
      setCarrito([...carrito, guitarra]);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  };
  const eliminarProducto = (id) => {
    if(confirm('Está seguro de eliminar?')){
      const carritoActualizado = carrito.filter((producto) => producto.id != id);
      setCarrito(carritoActualizado);
      window.localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  };
  const actualizarCantidad = (guitarra) => {
    const carritoActualizado = carrito.map((guitarraState) => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = parseInt(guitarra.cantidad);
      }
      return guitarraState;
    });
    setCarrito(carritoActualizado);
    window.localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  return (
    <Component
      {...pageProps}
      carrito={carrito}
      agregarCarrito={agregarCarrito}
      eliminarProducto={eliminarProducto}
      actualizarCantidad={actualizarCantidad}
    />
  );
}
