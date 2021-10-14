import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useHistory } from 'react-router'
import logo from "../assets/Inotebook.png"
import "./Navbar.css"

function Navbar() {
    let location = useLocation();
    useEffect(() => {

    }, [location])
    let history = useHistory()
    return (
        <>
            <nav id='nav'>
                <div id="Logo_Name">
                    <Link to="/" ><img src={logo} alt="logo" /></Link>
                    <p>I-NoteBook</p>
                </div>

                <div id="navLinks">
                    <Link id="homeBTN" className="links" to='/'>Home</Link>
                    <Link id="aboutBTN" className="links" to='/about'>About Us</Link>
                    <Link id="contactBTN" className="links" to='/contact'>Contact Us</Link>
                    <Link id="notesBTN" className="links" to='/notes'>View Notes</Link>
                </div>
                {
                    !localStorage.getItem("token") && localStorage.getItem("token")!==undefined ? <div id="login_signup_div" className="login_signup_div">
                        <Link className="login_signup" to="/signup" id="signup">SignUp</Link>
                        <Link className="login_signup" to="/login" id="login">Login</Link>
                    </div> : <button className="login_signup" onClick={() => { localStorage.removeItem("token"); history.push("/login") }}>Log out</button>
                }


                <div id="searchBox">
                    <input id="searchInp" type="text" placeholder='Search Notes' />
                    <button id="searchBtn" >Search</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar


