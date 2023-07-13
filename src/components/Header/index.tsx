import { CartContext } from '@/context/CartContext'
import Link from 'next/link'
import { useContext } from 'react'
import { FiShoppingCart } from 'react-icons/fi' 

export default function Header() {
  const { cartAmount } = useContext(CartContext)

  return (
    <header className='w-full px-1 bg-slate-200 fixed top-0'>
      <nav className='w-full max-w-7xl h-14 flex items-center justify-between px-5 mx-auto'>
        <Link href={'/'} className='font-bold text-2xl'>
          Dev Shop
        </Link>

        <Link href={'/CartPage'} className='relative'>
          <FiShoppingCart size={24} color='#121212' />
          {cartAmount > 0 && (
            <span 
              className='
                absolute -top-3 -right-3 px-2.5 w-6 h-6 rounded-full flex items-center justify-center 
                bg-sky-500 text-white text-xs
              '>
              {cartAmount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  )
}