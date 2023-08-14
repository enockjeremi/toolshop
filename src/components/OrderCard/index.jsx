import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const OrderCard = ({ data, handleDelete }) => {

  return (
    <div className='p-2'>
      <div className='flex flex-col justify-between border p-1 rounded-lg border-dashed border-black'>
        <div className='flex justify-between items-center gap-2'>
          <figure className='w-14 h-14'>
            <img className='w-full h-full rounded-lg object-cover' src={data.images[0]} alt={data.title} />
          </figure>
          <h4 className='text-sm font-light pr-1'>{data.title}</h4>
        </div>
        <div className='flex justify-between items-center px-2 py-0.5 mt-2 bg-green-500 rounded-lg text-white'>
          <p className='text-md font-medium'>${data.price}</p>

          <AiOutlineCloseCircle onClick={() => handleDelete(data.id)} className='text-lg hover:text-red-900 cursor-pointer' />
        </div>
      </div>
    </div>

  )
}

export default OrderCard
