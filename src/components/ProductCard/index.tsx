import Image from 'next/image';
import {BsCartPlus} from 'react-icons/bs'

export default function ProductCard() {
  return (
    <section className='w-full'>
      <Image src={""} alt="" width={90} height={90} className='w-full rounded-lg max-h-70 mb-2' />
      <p className='font-medium mt-1 mb-2'>
        Airpods Pro
      </p>

      <div className='flex gap-3 items-center'>
        <strong className='text-zinc-700/90'>
          R$ 1000
        </strong>
        <button className='bg-zinc-900 p-1 rounded'>
          <BsCartPlus size={20} color='#fff'/>
        </button>
      </div>
    </section>
  )
}
