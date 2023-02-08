import Layout from "@/components/layout";
import styles from "@/styles/carrito.module.css";
import Image from "next/image";

const Carrito = ({ carrito, actualizarCantidad }) => {
  return (
    <Layout title="Carrito de compras">
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>
        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Artículos</h2>
            {carrito.length === 0
              ? "Carrito Vacío"
              : carrito.map((producto) => (
                  <div key={producto.id} className={styles.producto}>
                    <div>
                      <Image
                        src={producto.imagen}
                        width={250}
                        height={480}
                        alt={producto.nombre}
                      />
                    </div>
                    <div>
                      <p className={styles.nombre}>{producto.nombre}</p>

                      <div className={styles.divCantidad}>
                        <label htmlFor="cantidad">Cantidad: </label>
                        <select
                          id="cantidad"
                          className={styles.select}
                          onChange={ e => actualizarCantidad({
                            id: producto.id,
                            cantidad: e.target.value
                          })}
                          value={producto.cantidad}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <p className={styles.precio}>
                        $<span>{producto.nombre}</span>
                      </p>
                      <p className={styles.subtotal}>
                        Subtotal:{" "}
                        <span>${producto.cantidad * producto.precio}</span>
                      </p>
                    </div>
                  </div>
                ))}
          </div>
          <aside className={styles.resumen}>
            <h3>Resumen del Pedido</h3>
            <p>Total a pagar: </p>
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default Carrito;
