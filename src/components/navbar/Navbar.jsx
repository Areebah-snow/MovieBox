import React from 'react';
import Logo from "../../images/MovieBoxLogo.png"
import Menu from "../../images/Menu.png"
import Search from '../search/Search';
import "./navbar.css"

const Navbar = ({searchTerm, apiKey}) => {
    return (
        <div className="navbar">
            <div className="navLeft">
                <img src={Logo} alt="SiteLogo" />
             
            </div>

            <Search apiKey={apiKey} />

            <div className="navRight">
                {/* <a href="" className="signIn">Sign In</a> */}
                <img src={Menu} alt="" />
            </div>

        </div>
    )
    }

export default Navbar;