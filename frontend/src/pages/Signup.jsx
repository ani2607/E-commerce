// import Input from "../components/Input";
// import Button from "../components/button";

import { useState } from "react";
import { Link } from "react-router-dom";

const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const Signup = () => {

    const [username , setUserName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const data = {
        'username' : username,
        'password' : password,
        'email' : email
    }

    const signUpUser = async(e)=>{
        e.preventDefault();
        
        try {
            const res = await fetch(`${backendUrl}/signup`,{
                method : 'POST',
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify(data)
            })
            console.log(res);
            setUserName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            alert(error.message);
        }

    }
    return(
        <div className="login-container">
            <h1>SignUp Form</h1>
            <form action="/login">
                <label className="mr-8">Name:</label>
                <input className="text-center" type="text" placeholder="Enter Name" required value={username}   onChange={(e)=> setUserName(e.target.value)} />

                <label  className="mr-9">Email:</label>
                <input className="text-center" type="text" placeholder="Enter Email" value={email} onChange={(e)=> setEmail(e.target.value)}  required/>

                <label>Password:</label>
                <input className="text-center" type="password" placeholder="Enter Password" required value={password}  onChange={(e)=> setPassword(e.target.value)}  />
                <button onClick={signUpUser} >SignUp</button>
            </form>
            <Link className="login-footer-text" to="/login">Login?</Link>
        </div>
    )
}

export default Signup;