import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="main-navigation" aria-label="main navigation">
      <ul className="main-navigation-list">
        <li className="main-navigation-item"><a href="/">Home</a></li>
        <li className="main-navigation-item"><a href="/books/list">Make A Listing</a></li>
        <li className="main-navigation-item"><a href="/books">Browse</a></li>
        <li className="main-navigation-item"><a href="/contact">Account</a></li>
      </ul>
    </nav>
  );
}