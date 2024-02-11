import { useNavigate, useSearchParams } from "react-router-dom"
import { loginApi } from "../services/auth/authApis";
import { useState } from "react";

export const LoginForm = () => {
    const navigator = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const submitHandler = async (e)=>{
        e.preventDefault()
        console.log(email,password)
        const data = await loginApi(email,password);

    }
  return (
    <div>
        <form onSubmit={submitHandler} className="border-black flex flex-col ">
            <label className="mt-2">Email:</label>
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} className="border-richblack-100 border-[1px] outline-none rounded-md px-2 py-1" id={"eamil"} required={true} value={email}/>
            <label className="mt-2">Password:</label>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} className="border-richblack-100 border-[1px] outline-none rounded-md px-2 py-1" id={"password"} required={true} value={password}/>
            <button type="submit" className="bg-orange rounded-lg py-2 mt-4">LogIn</button>
        </form>
    </div>
  )
}
