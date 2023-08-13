import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaToolbox } from 'react-icons/fa'
import { CartContext } from '../../context'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const menuItemsList = [
  { id: 1, label: 'My Orders', to: '/orders' },
  { id: 2, label: 'My Account', to: '/account' },
  { id: 3, label: 'Sign In', to: '/sing-in' },
]

const menuItemsCategories = [
  { id: 1, label: 'Electric', to: '/electric' },
  { id: 2, label: 'Hydraulic', to: '/hydraulic' },
  { id: 3, label: 'Workshop', to: '/workshop' },
  { id: 4, label: 'Others', to: '/others' },
]

const Navbar = () => {
  const { count, categories } = useContext(CartContext)
  const [dropdown, setDropdown] = useState(false);
  const activeStyles = 'border-b-2 border-black pb-0.5 duration-100';

  const activeTitleStyle = (isActive) => {
    return `
      flex justify-between items-center
      [&>*:nth-child(1)]:${isActive ? 'scale-125' : 'scale-100'}
      [&>*:nth-child(1)]:duration-100
      [&>*:nth-child(2)]:${isActive ? 'scale-90' : 'scale-100'}
      [&>*:nth-child(2)]:duration-100
    `
  }

  return (
    <nav className='flex bg-white/80  justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-semibold'>
      <ul className='flex items-center gap-4'>
        <li>
          <NavLink to="/" className={({ isActive }) => activeTitleStyle(isActive)}>
            <FaToolbox className='mb-2' />
            <p className='text-2xl mb-2'>
              Toolshop
            </p>
          </NavLink>
        </li>
        <li
          className='hover:underline underline-offset-4'
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <button className='flex justify-center items-center text-sm' type='button'>
            Categories
            <svg className={`w-2.5 h-2.5 mt-1 ml-2 duration-100 ${dropdown ? 'rotate-180' : 'rotate-0'}  `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strok-width="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          <div className={`fixed pt-2 z-10 ${dropdown ? 'block' : 'hidden'} `}>
            <ul className='grid grid-cols-4 rounded-lg bg-white border border-black/30 gap-4 w-full p-2'>
              {categories.map(({ id, to, label }) => (
                <li key={'category-' + id} className='flex justify-center p-2'>
                  <NavLink to={to} className={({ isActive }) => isActive ? 'underline' : undefined}>
                    <p className='first-letter:uppercase'>{label?.replace('-', ' ')}</p>
                  </NavLink>
                </li>
              )
              )}
            </ul>
          </div>
        </li>
      </ul>

      <ul className='flex items-center gap-4 h-8'>
        {menuItemsList.map((link) => (
          <NavLink key={link.id} to={link.to} className={({ isActive }) => isActive ? activeStyles : undefined}>
            {link.label}
          </NavLink>
        ))}
        <li className='flex items-center justify-between w-8'>
          <AiOutlineShoppingCart className='text-xl' />
          {count}
        </li>
      </ul>
    </nav >
  )
}
export default Navbar
