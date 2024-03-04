import { useNavigate } from "react-router-dom"
import { loginApi } from "../services/auth/authApis";
import { useState } from "react";
import { testAuth } from "../services/auth/authApis";
export const LoginForm = ({switcher}) => {
    const navigator = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const submitHandler = async (e)=>{
        e.preventDefault()
        // console.log(email,password)
        const data = await loginApi(email,password);
        console.log(data);
        if(data?.success===true){
          navigator('/search')
        }
    }
    const test = async()=>{
      await testAuth();
    }
  return (
    <div className="max-w-[100%] pr-2 overflow-x-hidden">
        {/*<form onSubmit={submitHandler} className="border-black grid grid-rows-2 ">*/}
        <form onSubmit={submitHandler} className="border-black flex flex-col">
            <label className="mt-2">Email:</label>
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} className="bg-[rgba(0,0,0,0)] text-lg  border-[1px] border-black  outline-none rounded-md px-2 py-1" id={"email"} required={true} value={email}/>
            <label className="mt-2">Password:</label>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} className="bg-[rgba(0,0,0,0)] text-lg  border-[1px] border-black  outline-none rounded-md px-2 py-1" id={"password"} required={true} value={password}/>
            <button type="submit" className="bg-orange text-[rgb(255,255,255)] rounded-lg py-2 mt-4 overflow-clip">LogIn</button>
        </form>
            <button onClick={()=>{switcher(prev => !prev)}} className="text-nowrap text-lg">SignUp ?</button>
    </div>
  )
}
