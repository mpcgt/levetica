import { useState } from "react";
interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: string[];
}

function Navbar({ brandName, imageSrcPath , navItems}: NavBarProps) {
    const [selectedIndex, setSelectedIndex] =useState(-1);
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={imageSrcPath}
            alt="Levetica"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          {brandName}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div 
        className="collapse
        navbar-collapse
        align-items-start
        flex-column
        flex-md-row" 
        id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-md-1">
            {navItems.map((items,index)=>
            (
            <li key={items}
            className="nav-item"
            onClick={()=>setSelectedIndex(index)}
            >
            <a className={selectedIndex == index 
                ? "nav-link active fw-bold"
                : "nav-link"}
            href="#"
            >
                {items}
            </a>
        </li>
            ))}
            </ul>
         </div>
      </div>
    </nav>
  );
}

export default Navbar;