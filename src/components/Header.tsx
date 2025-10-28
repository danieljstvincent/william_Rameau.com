import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo">
          William Rameau
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className={isActive('/') ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-book" className={isActive('/about-book') ? 'active' : ''}>
              About the Book
            </Link>
          </li>
          <li>
            <Link to="/about-will" className={isActive('/about-will') ? 'active' : ''}>
              About Will
            </Link>
          </li>
          <li>
            <Link to="/book-tour" className={isActive('/book-tour') ? 'active' : ''}>
              Book Tour
            </Link>
          </li>
          <li>
            <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

