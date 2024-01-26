// import Input from "../components/Input";
// import Button from "../components/button";

import { Link } from "react-router-dom";

const Login = () => {
    return(
        <div className="login-container">
            <h1>SignUp Form</h1>
            <form action="/login">
                <label className="mr-8">Name:</label>
                <input className="text-center" type="text" placeholder="Enter Name"/>
                <label className="mr-9">Email:</label>
                <input className="text-center" type="text" placeholder="Enter Email" required/>
                <label>Password:</label>
                <input className="text-center" type="password" placeholder="Enter Password" required/>
                <button type="submit">SignUp</button>
            </form>
            <Link className="login-footer-text" to="/login">Login?</Link>
        </div>
    )
}

export default Login;