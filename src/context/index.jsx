import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [categories, setCategories] = useState([]);
  const listCategories = []

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
  console.log(categories)

  return (
    <CartContext.Provider value={{
      count,
      setCount,
      categories
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
