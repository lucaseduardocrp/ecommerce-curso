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
      const response = await api.get(`/products/${id}`) 

      setProducts(response.data)
    }

    getProducts();
    
  }, [id])

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
      {products && (
        <section className='w-full'>
          <div className='flex flex-col lg:flex-row'>
            <Image src={products.image} alt='' width={400} height={400} />
          </div>

          <div className="flex-1">
            <p className="font-bold text-2xl mt-4 mb-2">Title</p>
            <p className="my-4">Description</p>
            <strong>Price</strong>
            <button className='bg-zinc-900 p-1 rounded ml-3'>
              <BsCartPlus size={20} color='#fff' />
            </button>
          </div>

        </section>
      )}
    </>
  )
}