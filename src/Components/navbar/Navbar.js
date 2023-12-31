import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import './Navbar.css'
// import { click } from "@testing-library/user-event/dist/click";
import { Button } from "../Button";
class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">TranCongBach<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}>

                    </i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((items, index) => {
                        return (
                            <li key={index}>
                                <a className={items.cName} href={items.url}>
                                    {items.title}
                                </a>
                            </li>
                        )
                    })}

                </ul>
                <Button>Sign Up</Button>
            </nav>
        )
    }
}
export default Navbar;