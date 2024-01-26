// import Input from "../components/Input";
// import Button from "../components/button";

import { Link } from "react-router-dom";

const Login = () => {
    return(
        <div className="login-container">
            <h1>Login Form</h1>
            <form action="/">
                <label className="mr-9">Email:</label>
                <input className="text-center" type="text" placeholder="Enter your Email" required/>
                <label>Password:</label>
                <input className="text-center" type="password" placeholder="Enter your Password" required/>
                <button type="submit">Login</button>
            </form>
            <Link className="login-footer-text" to="/">forget password</Link>
            <Link className="login-footer-text" to="/signup">New user?</Link>
        </div>
    )
}

export default Login;