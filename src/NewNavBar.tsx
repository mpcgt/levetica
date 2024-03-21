import { NavLink } from 'react-router-dom';
import imagePathWhite from '../src/assets/lvtcw.png'

const NavBar = ({ links }) => {
  return (
    <nav className="navbar">
        <img src={imagePathWhite} height="25" width="30" className="logo" alt="Levetica" />
        <h3>Levetica</h3>
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