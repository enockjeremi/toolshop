import React, { useContext, useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import ProductDetail from '../../components/ProductDetail';
import { CartContext } from '../../context';

const Home = () => {
  const [items, setItems] = useState(null);
  const { isProductDetailOpen } = useContext(CartContext);

  useEffect(() => {
    fetch('https://dummyjson.com/products/')
      .then(response => response.json())
      .then(data => setItems(data.products))
  }, [])
  return (
    <>
      <div className='my-10'>Home</div>
      <ProductDetail />

      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {items?.map((items) => (
          <Card key={items.id} data={items} />
        ))}
      </div>
    </>
  )
}

export default Home
