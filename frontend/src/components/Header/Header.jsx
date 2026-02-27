import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import Navigation from "./Navigation/Navigation";
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