import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  //Categories menu
  const [categories, setCategories] = useState([]);
  //Product Detail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  //Open & Close
  const openDetailProduct = () => {
    setIsProductDetailOpen(true);
    setisCheckOutSideMenuetailOpen(false)
  }
  const closeDetailProduct = () => setIsProductDetailOpen(false);
  //Product to Show
  const [productToShow, setProductToShow] = useState({
    title: "",
    price: "",
    description: "",
    images: [],
  })
  const [cartProducts, setCartProducts] = useState([])

  //Product Detail
  const [isCheckOutSideMenuOpen, setisCheckOutSideMenuetailOpen] = useState(false)
  //Open & Close
  const openCheckOutSideMenu = () => {
    setisCheckOutSideMenuetailOpen(true);
    setIsProductDetailOpen(false);
  }
  const closeCheckOutSideMenu = () => setisCheckOutSideMenuetailOpen(false);

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
      categories,
      openDetailProduct,
      closeDetailProduct,
      isProductDetailOpen,
      cartProducts,
      setCartProducts,
      productToShow,
      setProductToShow,
      isCheckOutSideMenuOpen,
      openCheckOutSideMenu,
      closeCheckOutSideMenu
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
