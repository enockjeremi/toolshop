import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { totalSum } from '../utils';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  //Show items
  const [items, setItems] = useState(null);
  // Filter items
  const [filterItems, setFilterItems] = useState(null);

  //Seach by Title
  const [searchByTitle, setSearchByTitle] = useState('');
  //search by Category
  const [searchByCategory, setSearchByCategory] = useState('');

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

  //Total Price
  const prices = cartProducts.map((price) => price.price)
  const totalPrice = totalSum(prices);

  //CheckOut Orders
  const [order, setOrder] = useState([{
    date: '',
    products: [],
    totalProducts: 0,
    totalPrice: 0
  }]);

  const filteredItemsByTitle = (items, searchBy) => {
    return items?.filter(items => items.title.toLowerCase().includes(searchBy.toLowerCase()))
  }

  const filteredItemsByCategory = (items, searchBy) => {
    return items?.filter(items => items.category.toLowerCase().includes(searchBy.toLowerCase()))
  }

  const filterBy = (type, items, searchByTitle, searchByCategory) => {
    if (type === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle)
    } else if (type === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory)
    } else if (type === 'BY_CATEGORY_AND_TITLE') {
      return filteredItemsByCategory(items, searchByCategory).filter(items => items.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    } else if (!type){
      return items;
    }
  }

  useEffect(() => {
    fetch('https://dummyjson.com/products/')
      .then(response => response.json())
      .then(data => setItems(data.products))

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

  useEffect(() => {
    if (searchByTitle && !searchByCategory) setFilterItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilterItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))

    if (searchByTitle && searchByCategory) setFilterItems(filterBy('BY_CATEGORY_AND_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilterItems(filterBy(null, items, searchByTitle, searchByCategory))


  }, [items, searchByTitle, searchByCategory]);


  return (
    <CartContext.Provider value={{
      items,
      filterItems,
      searchByTitle,
      setSearchByTitle,
      setSearchByCategory,
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
      closeCheckOutSideMenu,
      totalPrice,
      order,
      setOrder,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
