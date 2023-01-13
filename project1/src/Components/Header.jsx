import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from "react-router-hash-link"
function Header() {
  return (
     <nav>
        <h2>reactTech</h2>
        <main>
            <HashLink to="/#home">Home</HashLink>
            <HashLink to="/#about">About</HashLink>
            <Link to="/service">Service</Link>
            <HashLink to="/#brand">Brand</HashLink>
            <Link to="/contact">Contact</Link>
        </main>
     </nav>
  )
}

export default Header