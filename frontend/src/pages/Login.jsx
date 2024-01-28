// import Input from "../components/Input";
// import Button from "../components/button";

import { useState } from "react";
import { Link,Navigate } from "react-router-dom";
const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [navigate,setNavigate] = useState(false);
    const data = {
        'email' : email,
        'password' : password
    }

    const loginUser = async(e)=>{
        e.preventDefault();

        try {
            const res = await fetch(`${backendUrl}/login`,{
                method : 'POST',
                headers: {"Content-Type": "application/json"},
                body : JSON.stringify(data),
                credentials : "include"
            });

            if(res.status === 300){
                alert("Please enter correct email");
            }

            setEmail('');
            setPassword('');
            setNavigate(true);
            console.log(res);
        } catch (error) {
            
            alert(error.message);
        }
    }

    if(navigate){
        return <Navigate to={'/'} />
    }
    return(
        <div className="login-container bg-gray-800">
            <h1 className="underline">Login Form</h1>
            <form >
                <label className="mr-9">Email:</label>
                <input className="text-center" type="text" placeholder="Enter your Email" required value={email} onChange={(e)=> setEmail(e.target.value)} />
                <label>Password:</label>
                <input className="text-center" type="password" placeholder="Enter your Password" required value={password} onChange = {(e)=> setPassword(e.target.value)} />
                <button onClick={loginUser} >Login</button>
            </form>
            <Link className="login-footer-text" to="/">forget password</Link>
            <Link className="login-footer-text" to="/signup">New user?</Link>
        </div>
    )
}

export default Login;