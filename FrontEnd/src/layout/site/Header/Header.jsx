import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav>
        <div className="container">
            <img src="https://preview.colorlib.com/theme/wines/images/logo.png" alt="" />
            <div className="navBottom">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/admin'}>Admin</Link></li>
                    <li><Link to={'/basket'}>Basket</Link></li>
                    <li><Link to={'/wishlist'}>Wishlist</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header
