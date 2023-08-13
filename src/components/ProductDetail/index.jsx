import React, { useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { CartContext } from '../../context'

const ProductDetail = () => {
  const { closeDetailProduct, isProductDetailOpen } = useContext(CartContext);

  return (
    <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} w-[360px] flex-col fixed bg-white z-20 right-0 border border-black rounded-lg h-[calc(100vh-90px)] mt-1`}>
      <div className='flex justify-between items-center  p-6'>
        <h2 className='font-light text-lg'>Details</h2>
        <button className='' onClick={closeDetailProduct}>
          <AiOutlineClose />
        </button>
      </div>
    </aside>
  )
}

export default ProductDetail
