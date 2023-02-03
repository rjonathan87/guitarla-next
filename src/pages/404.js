import Layout from "@/components/layout"
import Link from "next/link"

const Pagina404 = () => {
  return (
    <Layout
      title='Página no encontrada'
    >
      <div className="contenedor">
        
        <h2 className="heading">Página no encontrada</h2>
        
        <Link href='/' className="enlace">Ir al Inicio</Link>
      </div>
    </Layout>
  )
}

export default Pagina404