import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Logo from "../levetica-logo.png"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
      <img src={Logo} width={250} />
      </Link>
      <ul>
        <CustomLink to="/"><i className="fa-solid fa-house"></i>&nbsp;Accueil</CustomLink>
        <CustomLink to="/products"><i className="fa-solid fa-book"></i>&nbsp;Produits</CustomLink>
        <CustomLink to="/articles"><i className="fa-solid fa-newspaper"></i>&nbsp;Articles</CustomLink>
        <CustomLink to="/about"><i className="fa-solid fa-circle-info"></i>&nbsp;À propos</CustomLink>
        <CustomLink to="https://github.com/mpcgt/levetica" target="_blank"><i className="fa-brands fa-github"></i>&nbsp;GitHub</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}