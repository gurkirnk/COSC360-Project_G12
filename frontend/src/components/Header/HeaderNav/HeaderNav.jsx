import RegistrationSwitcher from '../../RegistrationSwitcher/RegistrationSwitcher';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="main-navigation" aria-label="main navigation">
      <RegistrationSwitcher
        registeredComponent={
          <ul className="main-navigation-list">
            <li className="main-navigation-item"><NavLink to="/">Home</NavLink></li>
            <li className="main-navigation-item"><NavLink to="/browse/list">Make A Listing</NavLink></li>
            <li className="main-navigation-item"><NavLink to="/browse">Browse</NavLink></li>
            <li className="main-navigation-item"><NavLink to="/account">Account</NavLink></li>
          </ul>}
        unregisteredComponent={

          <ul className="main-navigation-list">
            <li className="main-navigation-item"><NavLink to="/about">Browse</NavLink></li>
            <li className="main-navigation-item"><NavLink to="/contact">Login</NavLink></li>
            <li className="main-navigation-item"><NavLink to="/contact">Register</NavLink></li>
          </ul>
        }
      />
    </nav>
  );
}