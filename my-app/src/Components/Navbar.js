import './Navbar.css'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav id="header">
      <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
      </ul>
    </nav>
  )
}