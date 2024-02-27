import { useState } from "react"
import { LoginForm } from "../components/LoginForm"
import { SignUpForm } from "../components/SignUpForm";
import bg_1 from "../assets/bg_1.jpg"
export const LoginSignup = () => {

  document.addEventListener("keydown",(e)=>{
    if(e.key==="Tab"){
      e.preventDefault();
    }
  })
  const [showSignup,setShowSignup] = useState(false);
  return (
    <div className="flex flex-row-reverse overflow-hidden">
      <div
        className="flex flex-col w-[50%] h-[100vh] bg-[rgba(255,255,255,0.2)] backdrop-blur bg-transparent absolute  p-[8rem] max-md:p-[1rem] max-md:w-[100%] space-y-4 ">
        <div className="flex flex-col ">
          <span className="text-[3rem] font-[700] leading-[3rem]">Manipal University Jaipur</span>
          <span className="text-[3rem] font-[700] leading-[3rem] text-orange">Travel Buddy</span>
        </div>
        <span className="text-richblack-800 text-lg">This platform is an exclusive resource for the people of MUJ. It provides an easy and accessible way to pool vehicles and get co-passengers for the go.</span>
        <div className=" transition-all flex">
          <div
            className={`${showSignup ? " w-0 opacity-0 " : " w-[100%] opacity-100 "} inline-block  duration-[700ms] ease-in-out `}>
            <LoginForm switcher={setShowSignup}/>
          </div>
          <div
            className={`${showSignup ? " w-[100%] opacity-100  " : " w-0 opacity-0 "}  inline-block  duration-[700ms] ease-in-out  `}>
            <SignUpForm switcher={setShowSignup}/>
          </div>
        </div>
      </div>
      <img className={"w-screen object-cover h-screen"}
           src={bg_1}/>
    </div>
  )
}
