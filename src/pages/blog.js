import Layout from "@/components/layout"
import Post from "@/components/post"
import styles from '@/styles/grid.module.css'

const Blog = ({posts}) => {
  return (
    <>
      <Layout
        title="Blog"
        description="Blog de música, ventar de guitarra, consejos, GuitarLA"
      >
        <main className="contenedor">
          <h2 className="heading">Blog</h2>
          <div className={styles.grid}>
            {posts?.map( post => (
              <Post 
                key={post.id}
                post={post}
              />
            ))}
          </div>
        </main>
      </Layout>
    </>
  )
}


export default Blog

export const getStaticProps = async () => {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  const {data: posts } = await respuesta.json()
  return {
    props: {
      posts
    }
  }
}