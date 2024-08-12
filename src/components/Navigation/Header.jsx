import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <nav>
      <h3>Mk Events</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/find-events">Find Events</Link></li>

      </ul>
    </nav>

  )
}

export default Header