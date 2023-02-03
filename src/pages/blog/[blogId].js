import Layout from "@/components/layout"
import styles from '@/styles/blog.module.css'
import { formatearFecha } from "@/utils"
import Image from "next/image"


const Post = ({post}) => {
  const { titulo, contenido, publishedAt} = post[0].attributes
  const { url: imagen } = post[0].attributes.imagen.data.attributes.formats.medium
  return (
    <Layout
      title={`Post ${titulo}`}
    >
      <article className={`${styles.post} ${styles['mt-3']}`}> 
        <Image src={imagen} width={1000} height={400} alt={`Imagen post ${titulo}`} />
        <h1 className={styles.heading}>{titulo}</h1> 
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p> 
        <p className={styles.texto}>{contenido}</p>
      </article>
    </Layout>
  )
}

export default Post

export const getServerSideProps = async ({query: {blogId}}) => {

  const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${blogId}&populate=imagen`)
  const { data: post } = await respuesta.json()
  return {
    props: {
      post
    }
  }
}