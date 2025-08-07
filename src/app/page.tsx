import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductosNuevos';

export default function Home() {
  return (
    <>  
      <Header />
      <main>
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
    </>
  )
}
