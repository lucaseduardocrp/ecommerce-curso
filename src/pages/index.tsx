import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <div>
      <main className='w-full max-w-7xl px-4 mx-auto'>
        <h1 className='font-bold text-4xl my-24 text-center'> Produtos em alta</h1>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5'>
         <ProductCard />
        </div>
      </main>
    </div>
  )
}
