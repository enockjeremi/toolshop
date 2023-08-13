import React, { useContext } from 'react'
import { BiPlus } from 'react-icons/bi'
import { CartContext } from '../../context'

const Card = ({ data }) => {
  const { count, setCount, openDetailProduct } = useContext(CartContext);

  return (
    <div onClick={openDetailProduct} className='bg-white cursor-pointer w-56 h-60 border border-black/50 border-dashed p-2 rounded-lg'>
      <figure className='relative mb-4 w-full h-4/5'>
        <img className='w-full h-full object-cover rounded-lg' src={data.images[0]} alt={data.title} />
        <div className='absolute bottom-2 left-2 rounded-lg bg-white/60 text-black text-sm px-2'>{data.category}</div>
        <button
          onClick={() => setCount(count + 1)}
          className='absolute top-2 right-2 flex justify-center items-center bg-gray-100 w-6 h-6 rounded-full text-bold hover:scale-110 duration-100' type='button'>
          <BiPlus />
        </button>
        <p className='flex justify-between items-center mt-4'>
          <span className='text-sm font-light'>{data.title}</span>
          <span className='text-sm font-medium'>{data.price}</span>
        </p>
      </figure>
    </div>
  )
}

export default Card
