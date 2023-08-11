import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'

const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products/')
      .then(response => response.json())
      .then(data => setItems(data.products))
  }, [])
  return (
    <>
      <div className='my-10'>Home</div>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {items?.map((items) => (
          <Card key={items.id} data={items} />
        ))}
      </div>
    </>
  )
}

export default Home
