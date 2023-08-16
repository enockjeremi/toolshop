import React, { useContext, useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import ProductDetail from '../../components/ProductDetail';
import { CartContext } from '../../context';

const Home = () => {
  const {items, filterItems, setSearchByTitle } = useContext(CartContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchByTitle(value);
  }
  const renderList = () => {

    if (filterItems?.length > 0) {
      return (
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {filterItems?.map((items) => (
            <Card key={items.id} data={items} />
          ))}
        </div>
      )
    } else {
      return (
          <p className='text-md font-mono'>We don't have anything.</p>
      )
    }
  }


  return (
    <>
      <div className='mt-10 text-lg uppercase'>Best shop times</div>
      <input type="search" onChange={handleChange} className='w-[360px] py-2 px-2 border rounded-lg border-black border-dashed my-10 focus:outline-none' name='search' placeholder='Search a product...' />
      <ProductDetail />
      {renderList()}
    </>
  )
}

export default Home
