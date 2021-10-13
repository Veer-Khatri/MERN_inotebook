import React, { useState } from 'react'
import { useHistory } from 'react-router'

const Signup = () => {
    const [creditionals, setcreditionals] = useState({ Firstname: "", Lastname: "", email: "", Setpassword: "", Confirmpassword: "" })
    const onChange = (eventObj) => {
        setcreditionals({ ...creditionals, [eventObj.target.name]: eventObj.target.value })
    }
    let history = useHistory();
    let handelSubmit = async (e) => {
        e.preventDefault();
        let fullName = `${creditionals.Firstname} ${creditionals.Lastname}`
        if (creditionals.Setpassword === creditionals.Confirmpassword) {
            let url = "http://localhost:5000/api/auth/createuser";
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: fullName, email: creditionals.email, password: creditionals.Setpassword })
            });
            console.log(fullName, creditionals.email, creditionals.Setpassword);
            const json = await response.json()
            console.log(json);
            if (json.success) {
                // Save the auth tokenand redirect
                localStorage.setItem("token", json.authtoken) // saving token in local storage 
                history.push('/')
            }
            else {
                alert("invalid creditionals")
            }
        }
        else {
            console.log(fullName, creditionals.email, creditionals.Setpassword);
            alert("please enter same passwords in 'password' and 'confirm-password' fields")
        }
    }

    return (
        <form action="POST" onSubmit={handelSubmit} id="SignupForm" className="form">
            <div>
                <i className="fas fa-user fa-2x"></i>
                <input className="loginInput" type="text" name="Firstname" value={creditionals.Firstname} onChange={onChange} id="Firstname" placeholder="Enter Your Firstname Here" />
                <input className="loginInput" type="text" name="Lastname" value={creditionals.Lastname} onChange={onChange} id="Lastname" placeholder="Enter Your Lastname Here" />
            </div>

            <div>
                <i className="fas fa-envelope fa-2x"></i>
                <input className="loginInput" type="text" name="email" value={creditionals.email} onChange={onChange} id="email" placeholder="Enter Your Email Here" />
            </div>

            <div>
                <i className="fas fa-lock fa-2x"></i>
                <input className="loginInput" type="password" name="Setpassword" value={creditionals.Setpassword} onChange={onChange} id="Setpassword" placeholder="Set password" minLength = {10} />
                <input className="loginInput" type="password" name="Confirmpassword" value={creditionals.Confirmpassword} onChange={onChange} id="Confirmpassword" placeholder="Confirm password" />
            </div>

            <button id="loginButton" >Signup</button>

        </form>
    )
}

export default Signup
