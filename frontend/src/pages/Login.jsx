// import Input from "../components/Input";
// import Button from "../components/button";

const Login = () => {
    return(
        <div className="login-container">
            <h1>Login Form</h1>
            <form action="">
                <label>Email:</label>
                <input type="text" placeholder="Enter your Email" required/>
                <label>Password:</label>
                <input type="password" placeholder="Enter your Password" required/>
                <button type="submit">Login</button>
            </form>
            <p className="login-footer-text">forget password</p>
            <p className="login-footer-text">New user?</p>
        </div>
    )
}

export default Login;