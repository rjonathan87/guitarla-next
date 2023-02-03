import Image from "next/image"
import styles from '@/styles/guitarras.module.css'
import Layout from "@/components/layout"

const Producto = ({guitarra}) => {
  const { nombre, descripcion, precio } = guitarra[0].attributes
  const { url: imagen } = guitarra[0].attributes.imagen.data.attributes.formats.medium

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
        <p className={styles.precio}>{precio}</p>
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