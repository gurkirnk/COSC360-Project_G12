import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import Navigation from "./HeaderNav/HeaderNav";
import "./Header.css";

export default function Header() {
  return (
    <header>
        <Breadcrumbs />
        <Navigation />
        <hr />
    </header>
  );
}