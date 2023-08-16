import React from 'react'
import { AiOutlineShoppingCart, AiTwotoneCalendar } from 'react-icons/ai'


const OrdersCard = ({ data }) => {
  const { totalProducts, totalPrice, date } = data;
  return (
    <div className='p-2'>
      <div className='flex flex-col justify-between border p-1 rounded-lg border-dashed border-black'>
        <p className='flex justify-between items-center px-3 pb-2'>
          <span className='flex items-center gap-2 justify-center'>
            <AiOutlineShoppingCart className='text-md' />
            {totalProducts}</span>
          <span className='flex items-center gap-2 justify-center'>
            <AiTwotoneCalendar />
            {date}
          </span>
        </p>
        <p className='flex items-center justify-center w-full bg-black rounded-lg'>
          <span className='text-white font-mono text-sm '>$ {totalPrice}</span>
        </p>
      </div>
    </div>

  )
}

export default OrdersCard
