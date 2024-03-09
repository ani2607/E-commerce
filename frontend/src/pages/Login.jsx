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
    <div className="bg-gray-900 w-full md:w-96 h-auto mx-auto mt-10 border-3 border-black rounded-3xl shadow-2xl p-6">
        <h1 className="font-bold text-4xl text-center mt-2 mb-5">E-commerce</h1>
        <form>
            <div className="mb-3">
            <label className=" text-2xl mb-1 block">Email:</label>
            <input
                className=" text-xl w-full border-2 border-black rounded-md px-4 py-2 text-gray-800"
                type="text"
                placeholder="example@gmail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className="mb-3">
            <label className=" text-2xl mb-1 block">Password:</label>
            <input
                className=" text-xl w-full border-2 border-black rounded-md px-4 py-2 text-gray-800"
                id="hs-toggle-password-multi-toggle-np"
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button
            className="text-2xl block border-3 border-black bg-gray-700 hover:bg-gray-600 rounded-md w-full mb-2 mt-6 py-2 focus:outline-none"
            onClick={loginUser}
            >
            Login
            </button>
        </form>
        <div className="mx-10 flex flex-col md:flex-row items-center">
            <Link className="text-xl hover:text-blue-600 mb-0" to="/">
            Forgot password
            </Link>
            <span className="mx-2 text-gray-400 hidden md:inline"> | </span>
            <Link className=" text-xl md:text-xl hover:text-blue-600" to="/signup">
            New User
            </Link>
        </div>
    </div>
    )
}

export default Login;