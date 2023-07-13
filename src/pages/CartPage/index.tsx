import CartItem from '@/components/CartItem';

export default function CartPage() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className='font-medium text-2xl text-center my-4'></h1>

     <CartItem />

      <p className='font-bold mt-4'>Total: R$1.000</p>
    </div>
  )
}