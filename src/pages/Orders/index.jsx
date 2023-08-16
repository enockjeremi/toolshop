import React, { useContext } from 'react'
import OrdersCard from '../../components/OrdersCard'
import { CartContext } from '../../context'
import { Link } from 'react-router-dom';

const Orders = () => {
  const { order } = useContext(CartContext);
  const date = new Date();
  console.log()
  return (
    <>
      <div className='mt-10 mb-4'>Order</div>
      <div className='flex flex-col w-80 py-6'>
        {order.slice(1).map((orders) => (
          <Link key={orders.id} to={`/orders/${orders.id}`} >
            <OrdersCard data={orders} />
          </Link >
        ))}
      </div>
    </>
  )
}

export default Orders
