import { Link } from 'react-router'
import './nav.css'

export default function Nav() {
  return (
    <div>
        <nav>
        <div id="name">
            <h1>Aidan Youell</h1>
        </div>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/portfolio">Portfolio</Link>
            </li>
        </ul>
        </nav>
    </div>
  )
}
