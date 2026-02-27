import './HeaderNav.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="main-navigation" aria-label="main navigation">
      <ul className="main-navigation-list">
        <li className="main-navigation-item"><NavLink to="/">Home</NavLink></li>
        <li className="main-navigation-item"><NavLink to="/browse">Browse</NavLink></li>
      </ul>
    </nav>
  );
}