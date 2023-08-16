import React, { useContext, } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'

import moment from 'moment';

import { CartContext } from '../../context'
import OrderCard from '../OrderCard';
import { isEmpytArray } from '../../utils';

const CheckoutSideMenu = () => {
  const { closeCheckOutSideMenu, isCheckOutSideMenuOpen, cartProducts, setCartProducts, totalPrice, setOrder, order } = useContext(CartContext);

  const handleDelete = (id) => {
    const filterProducts = cartProducts.filter((product) => id !== product.id);
    setCartProducts(filterProducts);
  }

  const empytCart = isEmpytArray(cartProducts);

  const handleCheckOut = () => {
    const orderToAdd = {
      id: Date.now(),
      date: moment().format('l'),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice
    }
    setOrder([...order, orderToAdd]);
    setCartProducts([]);
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
      <div className='overflow-y-scroll flex-1'>
        {cartProducts.map((product) => {
          return (
            <div key={product.title} >
              <OrderCard data={product} handleDelete={handleDelete} />
            </div>
          )
        })}
      </div>

      <div className=' w-full rounded-b-lg px-2 py-1 border-t border-black bg-white'>
        <Link to='orders/last'>
          <button onClick={() => handleCheckOut()} className={`bg-black hover:bg-gray-900 duration-100 w-full mb-1 justify-center items-center rounded-lg ${empytCart ? 'hidden' : 'flex'}`}>
            <span className='text-white font-mono uppercase text-md'>Checkout</span>
          </button>
        </Link>
        <p className={`flex items-center justify-between ${empytCart ? 'border-0' : 'border-t'}  border-black`}>
          <span className='font-light text-sm'>Total: </span>
          <span className='font-medium font-mono'>$ {totalPrice}</span>
        </p>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu
