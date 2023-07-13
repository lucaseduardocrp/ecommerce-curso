import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import Image from 'next/image'

export default function CartItem() {
  const { cart } = useContext(CartContext)

  return (
    <>
      {cart.map((item, index) => (
        <section className='flex items-center justify-between border-b-2 border-gray-300 h-32' key={index}>
          <Image src={item.image} alt={item.title} width={70} height={70} />
    
          <strong>
            Preço: R$ {item.price}
          </strong>
    
          <div className="flex items-center justify-center gap-3">
            <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
              -
            </button>
            
            {item.amount}
            
            <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
              +
            </button>
          </div>
    
          <strong className="float-right">
            SubTotal: R$ {item.total}
          </strong>
        </section>
      ))}
    </>
  )
}