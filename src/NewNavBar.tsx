import { NavLink } from 'react-router-dom';

const NavBar = ({ links }) => {
  return (
    <nav className="navbar">
      <img src="https://github.com/mpcgt/levetica/blob/main/src/assets/levetica.png?raw=true" alt="Levetica" width="30" height="24">Levetica</img>
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