import { Component } from "react";
import { MenuData } from "./MenuData";
import './NavbarStyles.css';
import LvtcLogo from '../lvtcw-letters.png';

class Navbar extends Component {
    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <img src={LvtcLogo} height={50} width={300} />
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}/>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuData.map((item, index)=>{
                        return (
                            <li key={index}>
                                <a href={item.url}
                                className={item.cName}>
                                    <i className={item.icon} />{item.title}
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
            </nav>
        )
    }
}

export default Navbar;