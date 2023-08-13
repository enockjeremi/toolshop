import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openDetailProduct = () => setIsProductDetailOpen(true);
  const closeDetailProduct = () => setIsProductDetailOpen(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories/')
      .then(response => response.json())
      .then(data => {
        data.map((category, index) => {
          if (categories.length <= 19) {
            setCategories([
              ...categories,
              categories.push({ id: index, label: category, to: '/' + category })
            ]);
          }
        });
      })
  }, [])

  return (
    <CartContext.Provider value={{
      count,
      setCount,
      openDetailProduct,
      closeDetailProduct,
      isProductDetailOpen,
      categories
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
