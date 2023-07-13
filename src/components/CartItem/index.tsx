import Image from 'next/image'

export default function CartItem() {
  return (
    <section className='flex items-center justify-between border-b-2 border-gray-300'>
      <Image src={''} alt='' width={28} height={28} />

      <strong>
        Preço: R$1.000
      </strong>

      <div className="flex items-center justify-center gap-3">
        <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
          -
        </button>
        
        2
        
        <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
          +
        </button>
      </div>

      <strong className="float-right">
        SubTotal: R$1.000
      </strong>
    </section>
  )
}