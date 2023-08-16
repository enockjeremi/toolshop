import React, { useContext } from 'react'
import { CartContext } from '../../context';
import OrderCard from '../../components/OrderCard';
import { useParams } from 'react-router-dom';


const Order = () => {
  const { order } = useContext(CartContext);
  const params = useParams();
  const id = Number(params.id);
  const filterById = order?.filter((orders) => orders.id === id)[0];

  return (
    <>
      <div className='mt-10 mb-4'>Order</div>
      <div className='flex flex-col w-80 py-6'>
        {id ? filterById?.products.map((product) => (
          <OrderCard key={product.id} data={product} />
        )) :
          order?.slice(-1)[0].products.map((product) => (
            <OrderCard key={product.id} data={product} />
          ))
        }
      </div>
    </>
  )
}

export default Order
