import { NavLink } from 'react-router-dom';
import imagePath from '../src/assets/lvtcw.png'
import '../src/index.css'

const NavBar = ({ links }) => {
  return (
    <nav className="navbar">
        <img src={imagePath} height="30" width="35" alt="Levetica" />
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