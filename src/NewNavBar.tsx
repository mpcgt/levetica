import { NavLink } from 'react-router-dom';

const NavBar = ({ links }) => {
  return (
    <nav className="navbar">
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} className="nav-link">
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;