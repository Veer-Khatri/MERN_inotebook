import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Inotebook.png"
import "./Navbar.css"

function Navbar() {
    return (
        <>
            <nav id='nav'>
                <div id="Logo_Name">
                    <Link to="/" ><img src={logo} alt="logo" /></Link>
                    <p>I-NoteBook</p>
                </div>

                <div id="navLinks">
                    <Link className="links" to='/'>Home</Link>
                    <Link className="links" to='/about'>About Us</Link>
                    <Link className="links" to='/contact'>Contact Us</Link>
                    <Link className="links" to='/notes'>View Notes</Link>
                </div>

                <div id="searchBox">
                    <input id="searchInp" type="text" placeholder='Search Notes'/>
                    <button id="searchBtn" >Search</button>
                </div>
            </nav>

        </>
    )
}

export default Navbar


