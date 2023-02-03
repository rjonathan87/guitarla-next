import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/blog.module.css'
import { formatearFecha } from '@/utils'

const Post = ({post}) => {
  const {titulo, contenido, publishedAt, url}  = post.attributes
  const { url: imagen } = post.attributes.imagen.data.attributes.formats.medium
  return (
    <article>
      <Image src={imagen} width={600} height={400} alt={`Imagen Post ${titulo}`} />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>
        <Link href={`/blog/${url}`} className={styles.enlace}>Leer Post</Link>
      </div>
    </article>
  )
}

export default Post