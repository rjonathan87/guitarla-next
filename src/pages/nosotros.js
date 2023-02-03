import Layout from "@/components/layout"
import Image from "next/image"
import styles from '@/styles/nosotros.module.css'

const Nosotros = () => {
  return (
    <>
      <Layout
        title="Nosotros"
        description="Sobre nosotros, guitarLA tienda de música"
      >
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>
          <div className={styles.contenido}>
            <Image 
              src="/img/nosotros.jpg"
              alt='GuitarLA - Logo' 
              width={1000}
              height={800}
            />
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem inventore officiis deleniti minima modi quod voluptates quibusdam maiores, ab repudiandae, earum saepe deserunt hic dignissimos placeat. Expedita aut qui voluptatibus.</p>
              <p>Architecto suscipit atque dolore pariatur consequuntur aliquid illum, voluptate ex doloribus hic itaque error culpa. Iure quaerat tempora amet optio inventore, distinctio molestiae et culpa atque reprehenderit, voluptatem ipsum doloribus?</p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default Nosotros