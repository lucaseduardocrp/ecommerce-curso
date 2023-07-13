import CartItem from '@/components/CartItem';
import { CartContext } from '@/context/CartContext';
import Link from 'next/link';
import { useContext } from 'react';

export default function CartPage() {
  const { cart, total } = useContext(CartContext)

  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className='font-medium text-2xl text-center my-4'></h1>

     {cart.length === 0 && (
        <div className='flex flex-col items-center justify-center'>
          <p className='font-medium'>Ops seu carrinho está vazio...</p>
          <Link href={'/'} className='bg-slate-600 text-white font-medium my-3 py-1 px-3 rounded'>
            Acessar Produtos
          </Link>
        </div> 
      )}

      <CartItem />

      {cart.length !== 0 && (
        <p className='font-bold mt-4'>
          Total: {total}
        </p>
      )}
    </div>
  )
}