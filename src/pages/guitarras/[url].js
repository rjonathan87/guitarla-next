import Image from "next/image"
import styles from '@/styles/guitarras.module.css'
import Layout from "@/components/layout"
import { useState } from "react"

const Producto = ({guitarra, agregarCarrito}) => {
  const [cantidad, setCantidad] = useState(0)
  const { nombre, descripcion, precio } = guitarra[0].attributes
  const { url: imagen } = guitarra[0].attributes.imagen.data.attributes.formats.medium

  const handleSubmit = e => {
    e.preventDefault()
    if(cantidad <= 0){
      alert('Cantidad no válida')
      return
    }

    // Construir el objeto
    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen,
      nombre,
      precio,
      cantidad
    }
    // pasando valores a context
    agregarCarrito(guitarraSeleccionada)
  }

  return (
    <Layout
      title={`Guitarra - ${nombre}`}
    >
      <div className={styles.guitarra}>
      <Image 
        src={imagen} 
        alt={`Imagen Guitarra ${nombre}`} 
        width={600}
        height={800}
      />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <form 
          className={styles.formulario}
          onSubmit={ handleSubmit }
        >
          <label htmlFor="cantidad">Cantidad: </label>
          <select 
            id="cantidad" 
            className="cantidad"
            onChange={ e => setCantidad(+e.target.value) }
          >
            <option value="0">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input 
            type="submit" 
            value="Agregar al Carrito" 
          />
        </form>
      </div>
    </div>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
  const { data } = await respuesta.json()
  const paths = data.map(guitarra => ({
    params: {
      url: guitarra.attributes.url
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({params: {url}}) => {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
  const {data: guitarra} = await respuesta.json()
  return { 
    props: {
      guitarra
    }
  }
}

export default Producto