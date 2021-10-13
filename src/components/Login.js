import React ,{useState}from 'react'
import { useHistory } from 'react-router'


const Login = () => {
    
    const [creditionals, setcreditionals] = useState({email:"",password:""})
    const onChange = (eventObj) => {
        setcreditionals({ ...creditionals, [eventObj.target.name]: eventObj.target.value })
    }
    let history = useHistory();
    
    let handelSubmit = async (e) => {
        e.preventDefault();
        let url = "http://localhost:5000/api/auth/userLogin";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email:creditionals.email,password: creditionals.password })
        });
        console.log(creditionals.email, creditionals.password);
        const json = await response.json()
        console.log(json);
        if(json.success){
            // Save the auth tokenand redirect
            localStorage.setItem("token",json.authtoken) // saving token in local storage 
            history.push('/')
        }
        else{
            alert("invalid creditionals")
        }
    
    }
    return (
        <>
            <form action="POST" onSubmit={handelSubmit} id="LoginForm" className="form">
                <input className="loginInput" type="text" name="email" value={creditionals.email} onChange={onChange} id="email"  placeholder="Enter Your Email Here" />
                <input type="password" name="password" id="password" value={creditionals.password} onChange={onChange} className="loginInput" placeholder="Enter Your Password Here" />
                <button id="loginButton" >Login</button>

            </form>
        </>
    )
}

export default Login
