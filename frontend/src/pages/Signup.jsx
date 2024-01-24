// import Input from "../components/Input";
// import Button from "../components/button";

const Login = () => {
    return(
        <div className="login-container">
            <h1>SignUp Form</h1>
            <form action="">
                <label>UserName:</label>
                <input type="text" placeholder="Enter Your Username"/>
                <label>Email:</label>
                <input type="text" placeholder="Enter your Email" required/>
                <label>Password:</label>
                <input type="password" placeholder="Enter your Password" required/>
                <button type="submit">SignUp</button>
            </form>
            <p className="login-footer-text">Login?</p>
        </div>
    )
}

export default Login;