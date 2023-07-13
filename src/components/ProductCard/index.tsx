import Image from 'next/image';
import {BsCartPlus} from 'react-icons/bs'

import { api } from '../../services/api'
import { useEffect, useState } from 'react';

interface ProductProps {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number,
  }
}

export default function ProductCard() {
  const [products, setProducts] = useState<ProductProps[]>([])

  useEffect(() => {
    async function getProducts(){
      const response = await api.get('/products')

      setProducts(response.data)
    }

    getProducts()
  }, [])

  return (
    <>
      {products.map((item, index) => {
        <section className='w-full' key={index}>
          <Image 
            alt={item.title} 
            src={item.image} 
            width={200} height={200} 
            className='w-full rounded-lg max-h-70 mb-2'
          />
          <p className='font-medium mt-1 mb-2'>
            {item.title}
          </p>
  
          <div className='flex gap-3 items-center'>
            <strong className='text-zinc-700/90'>
            R$ {item.price}
            </strong>
            <button className='bg-zinc-900 p-1 rounded'>
              <BsCartPlus size={20} color='#fff'/>
            </button>
          </div>
        </section>
      })}
    </>
  )
}
