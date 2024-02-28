import {useRef} from "react";
import {signupApi} from "../services/auth/authApis.js";

export const SignUpForm = ({switcher}) => {
  const refFname = useRef();
  const refLname = useRef();
  const refEmail = useRef();
  const refPass = useRef();
  const handleSignUp = async () => {
    const data = await signupApi(refFname.current.value, refLname.current.value, refEmail.current.value, refPass.current.value);
    // console.log(data);
    if(data?.success===true){
      switcher(prev => !prev);
    }
  }
  return (
    <div className="max-w-[100%] pr-2 overflow-x-hidden">
      <form className="flex flex-col text-nowrap ">

        <div className={"flex flex-col sm:flex-row w-full space-x-0 sm:space-x-4 mt-2 max-sm:mt-0"}>
          <div className="flex flex-col flex-1">
            <label className={"text-lg"}> First Name:</label>
            <input className="bg-[rgba(0,0,0,0)] border-black border-[1px]  bg-transparent outline-none rounded-md px-2 py-1"
                   ref={refFname} type="text" required={true}/>
          </div>

          <div className="flex flex-col flex-1">
            <label className={"text-lg"}>Last Name:</label>
            <input className="bg-[rgba(0,0,0,0)] border-black border-[1px]  bg-transparent outline-none rounded-md px-2 py-1"
                   ref={refLname} type="text" required={true}/>
          </div>
        </div>

        <div className={"flex flex-col sm:flex-row w-full space-x-0 sm:space-x-4 mt-2 max-sm:mt-0"}>
          <div className="flex flex-col flex-1">
            <label className={"text-lg"}>Email:</label>
            <input className="bg-[rgba(0,0,0,0)] border-black border-[1px]  bg-transparent outline-none rounded-md px-2 py-1"
                   ref={refEmail} type="email" required={true}/>
          </div>

          <div className="flex flex-col flex-1">
            <label className={"text-lg"}>Password:</label>
            <input className="bg-[rgba(0,0,0,0)] border-black border-[1px]  bg-transparent outline-none rounded-md px-2 py-1"
                   ref={refPass} type="password" required={true}/>
          </div>
        </div>
      </form>
      <button onClick={handleSignUp}
              className="bg-orange text-[rgb(255,255,255)] w-[100%] overflow-clip rounded-lg py-2 mt-4">SignUp
      </button>
      <button onClick={() => {
        // console.log("clicked");
        switcher(prev => !prev);
      }} className="text-lg text-nowrap">LogIn ?
      </button>
    </div>
  )
}
