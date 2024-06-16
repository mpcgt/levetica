"use client";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { Footer } from "flowbite-react";
import Lvtc from "../lvtcw-letters.png"

export function FooterNew() {
  return (
    <Footer container>
      <div className="w-full text-center bg-dark">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <div className="ms-5 mt-3">
          <Footer.Brand
            href="https://github.com/mpcgt/levetica"
            src={Lvtc}
            alt="Levetica Logo"
          />
          </div>
          <Footer.LinkGroup>
            <FooterLink to="/"><i className="fa-solid fa-house"></i>&nbsp;Accueil</FooterLink>&nbsp;&nbsp;
            <FooterLink to="/products"><i className="fa-solid fa-book"></i>&nbsp;Outils</FooterLink>&nbsp;&nbsp;
            <FooterLink to="/articles"><i className="fa-solid fa-newspaper"></i>&nbsp;Articles</FooterLink>&nbsp;&nbsp;
            <FooterLink to="/about"><i className="fa-solid fa-circle-info"></i>&nbsp;À propos</FooterLink>&nbsp;&nbsp;
            <FooterLink to="https://github.com/mpcgt/levetica" target="_blank"><i className="fa-brands fa-github"></i>&nbsp;GitHub</FooterLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
      </div>
    </Footer>
  );
}

function FooterLink({ to, children, ...props }) {
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

export default FooterNew