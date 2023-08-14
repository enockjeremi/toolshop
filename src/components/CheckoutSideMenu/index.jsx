import React, { useContext, useState } from 'react'
import { AiOutlineClose, AiFillStar } from 'react-icons/ai'

import { CartContext } from '../../context'
import OrderCard from '../OrderCard';

const CheckoutSideMenu = () => {
  const { closeCheckOutSideMenu, isCheckOutSideMenuOpen, cartProducts, setCartProducts } = useContext(CartContext);
  const prices = cartProducts.map((price) => price.price)
  const totalPrice = prices.reduce((prev, next) => prev + next, 0);

  const handleDelete = (id) => {
    const filterProducts = cartProducts.filter((product) => id !== product.id);
    setCartProducts(filterProducts);
  }

  return (
    <aside className={`${isCheckOutSideMenuOpen ? 'flex' : 'hidden'} w-[280px] flex-col fixed bg-white z-20 right-2 border border-black rounded-lg h-[calc(100vh-90px)] mt-1`}>
      <div className='flex justify-between items-center p-4 border-b border-black'>
        <h2 className=''>My Order</h2>
        <button
          onClick={closeCheckOutSideMenu}
          className='absolute top-2 right-2 flex justify-center items-center bg-transparent w-6 h-6 rounded-full text-bold hover:scale-110 duration-100' type='button'>
          <AiOutlineClose />
        </button>
      </div>
      <div className='overflow-y-scroll mb-8'>
        {cartProducts.map((product) => {
          return (
            <div key={product.title} >
              <OrderCard data={product} handleDelete={handleDelete} />
            </div>
          )
        })}
      </div>
      <div className='absolute bottom-0 w-full rounded-b-lg px-2 py-1 border-t border-black bg-white'>
        <p className='flex items-center justify-between'>
          <span className='font-light text-sm'>Total: </span>
          <span className='font-medium'>$ {totalPrice}</span>
        </p>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu
