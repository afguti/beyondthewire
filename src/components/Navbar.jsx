import { useState } from 'react'
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="header-container">
            <ThemeToggle />
            <h1 className="nav-title">Beyond the circuit</h1>       
        </div>
        
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="/">HOME</a></li>
          <li><a href="/categories">CATEGORIES</a></li>
          <li><a href="/tags">TAGS</a></li>
          <li><a href="/archives">ARCHIVES</a></li>
          <li><a href="/about">ABOUT</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar 