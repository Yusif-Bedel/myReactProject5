import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav>
        <div className="container">
          <div className="navBottom">
                  <ul>
                      <li><Link to={'/'}>Home</Link></li>
                      <li><Link to={'/products'}>Products</Link></li>
                      <li><Link to={'/admin/add'}>Add</Link></li>
                  </ul>
              </div>
          </div>
    </nav>
  )
}

export default Header
