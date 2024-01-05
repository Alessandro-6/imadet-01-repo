import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <NavLink to="/" className="navbar__logo">
          <img src="./images/Logo.svg" alt="Logo" className="logo" />
          <img src="./images/brand.svg" alt="" className="brand" />
        </NavLink>
        <Nav />
      </nav>
    </header>
  );
}

function Nav() {
  return (
    <ul className="navbar__nav">
      <li className="navbar__nav--item">
        <Dropdown />
      </li>
      <li className="navbar__nav--item">
        <NavLink to="/home" className="navbar__nav--link">
          Home
        </NavLink>
      </li>
      <li className="navbar__nav--item">
        <NavLink to="/company" className="navbar__nav--link">
          empresa
        </NavLink>
      </li>
      <li className="navbar__nav--item">
        <NavLink to="/" className="navbar__nav--link">
          clientes
        </NavLink>
      </li>
      <li className="navbar__nav--item">
        <NavLink to="/" className="navbar__nav--link">
          fornecedores
        </NavLink>
      </li>
      <li className="navbar__nav--item">
        <NavLink to="/" className="navbar__nav--link">
          faq
        </NavLink>
      </li>
    </ul>
  );
}

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="select" onClick={() => setIsOpen(!isOpen)}>
        <Link to="/home" className="navbar__nav--link selected">
          Categorias <span className="caret"></span>
        </Link>
      </div>
      {isOpen && (
        <ul className="dropdown__menu">
          <li className="dropdown__menu--item">
            <Link className="dropdown__menu--link">Ferramentas </Link>
          </li>
          <li className="dropdown__menu--item">
            <Link className="dropdown__menu--link">Equipamentos </Link>
          </li>
          <li className="dropdown__menu--item">
            <Link className="dropdown__menu--link">Máquinas </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
