// import Input from "../components/Input";
// import Button from "../components/button";

import { Link } from "react-router-dom";

const Login = () => {
    return(
        <div className="login-container">
            <h1>SignUp Form</h1>
            <form action="/login">
                <label>Name:</label>
                <input type="text" placeholder="Enter Your Name"/>
                <label>Email:</label>
                <input type="text" placeholder="Enter your Email" required/>
                <label>Password:</label>
                <input type="password" placeholder="Enter your Password" required/>
                <button type="submit">SignUp</button>
            </form>
            <Link className="login-footer-text" to="/login">Login?</Link>
        </div>
    )
}

export default Login;