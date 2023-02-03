import Layout from "@/components/layout"
import Guitarra from "@/components/guitarra"
import styles from '@/styles/grid.module.css'

const Tienda = ({guitarras}) => {
  return (
    <>
      <Layout
        title="Tienda"
        description="Tienda virtual, venta de instrumentos, GuitarLA"
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra Colección</h1>
          <div className={styles.grid}>
            {guitarras?.map(guitarra => (
              <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
            ))}
          </div>
        </main>
      </Layout>
    </>
  )
}

// export const getStaticProps = async () => {
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//   const {data: guitarras } = await respuesta.json()
//   return {
//     props: {
//       guitarras
//     }
//   }
// }
export const getServerSideProps = async () => {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const {data: guitarras } = await respuesta.json()
  return {
    props: {
      guitarras
    }
  }
}

export default Tienda