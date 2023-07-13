import Image from 'next/image';
import { toast } from 'react-hot-toast';
import { BsCartPlus } from 'react-icons/bs';

import { api } from '@/services/api';

import { ProductTypes } from '@/types/products-types';
import { CartContext } from '@/context/CartContext';
import { useContext, useEffect, useState } from 'react';

export default function ProductDetail() {
  const [products, setProducts] = useState<ProductTypes[]>([])
  const { addItemCart } = useContext(CartContext)

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('/products') 

      setProducts(response.data)
    }

    getProducts();
    
  }, [])

  const handleAddCartItem = (product: ProductTypes) => {
    toast.success('Item adicionado no carrinho', {
      style: {
        borderRadius: 12,
      }
    })
    addItemCart(product)
  }

  return (
    <>
      {products.map((item) => (
        <div key={item.id}>
          <Image src={item.image} alt={item.title} width={400} height={400} />

          <div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <div>
              <p>{item.price}</p>
              <button className='bg-zinc-900 p-1 rounded' onClick={() => handleAddCartItem(item)}>
                <BsCartPlus size={20} color='#fff'/>
              </button>
            </div>
          </div> 
        </div>
      ))}
    </>
  )
}