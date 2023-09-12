import Hero from '@/components/hero'
import Industry from '@/components/industry'
import Product from '@/components/product'
import Overview from '@/components/overview'

export default function Home() {
  return (
    <div className='px-4'>
      <Hero/>
      <Industry/>
      {/* <Mostpopular/> */}
      {/* <Services/> */}
      {/* <Promotion/> */}
      <Product/>
      <Overview/>
      {/* <BestSelling/> */}
    </div>
  )
}
