import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  } 
  return (
    <nav className='nav-bar'>
      <div className='nav-logo'>
      <a href="/">PAU</a>
      </div>
      <div className='nav-text'> Ricardo Salas Letelier </div>
      <div className='home-icon'>
        <NavLink
          className={navLinkClass}
          to='/'
        >
          <HomeIcon />
        </NavLink>
      </div>
      
    </nav>
  )
}
 
export default NavBar
