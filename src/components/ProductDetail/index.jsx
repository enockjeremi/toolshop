import React, { useContext } from 'react'
import { AiOutlineClose, AiFillStar } from 'react-icons/ai'

import { CartContext } from '../../context'

const ProductDetail = () => {
  const { closeDetailProduct, isProductDetailOpen, productToShow } = useContext(CartContext);

  return (
    <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} w-[280px] flex-col fixed bg-white z-20 right-2 overflow-auto border border-black rounded-lg h-[calc(100vh-90px)] mt-1`}>
      <figure className='relative p-6'>
        <button
          onClick={closeDetailProduct}
          className='absolute top-2 right-2 flex justify-center items-center bg-transparent w-6 h-6 rounded-full text-bold hover:scale-110 duration-100' type='button'>
          <AiOutlineClose />
        </button>
        <img className='w-full h-full object-cover' src={productToShow.images[0]} alt={productToShow.tltle} />
      </figure>
      <div className='flex flex-col p-6 space-y-4'>
        <span className='border-b border-black/50'>{productToShow.title}</span>
        <p className='flex justify-between items-center'>
          <span>${productToShow.price}</span>
          <span className='flex items-center  gap-1'>
            <AiFillStar className='text-yellow-500' />
            {productToShow.rating}
          </span>
        </p>

        <span className='w-full bg-green-600 text-center text-white rounded-lg'>
          <span className='font-light'>in Stock:</span> {productToShow.stock}
        </span>
        <span className=''>{productToShow.description}</span>
      </div>
    </aside>
  )
}

export default ProductDetail
