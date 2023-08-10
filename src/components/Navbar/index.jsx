import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaToolbox } from 'react-icons/fa'
const Navbar = () => {
  const activeStyles = 'underline duration-300';

  return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-semibold'>
      <ul className='flex items-center gap-4'>
        <li>
          <NavLink to="/" className='flex justify-between items-center'>
            <FaToolbox />
            <p className='text-2xl'>
              Toolshop
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/electric" className={({ isActive }) => isActive ? activeStyles : undefined}>
            Electric
          </NavLink>
        </li>
        <li>
          <NavLink to="/hydraulic" className={({ isActive }) => isActive ? activeStyles : undefined}>
            Hydraulic
          </NavLink>
        </li>
        <li>
          <NavLink to="/workshop" className={({ isActive }) => isActive ? activeStyles : undefined}>
            Workshop
          </NavLink>
        </li>
        <li>
          <NavLink to="/othres" className={({ isActive }) => isActive ? activeStyles : undefined}>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-4'>
        <li>
          <NavLink to="/my-orders">
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-account">
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-in">
            Sign In
          </NavLink>
        </li>
        <li>
          0
        </li>
      </ul>
    </nav>
  )
}
export default Navbar