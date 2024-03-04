import React from 'react';
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";

function LogOutModal({setModal}) {
  const navigator = useNavigate();
  const logOutHandler = ()=>{
    Cookies.remove('secret-token',{path:""});
    navigator("/login");
  }
  return (
    <div className={"h-screen w-screen backdrop-blur-2xl flex items-center justify-center absolute z-[1000]"}>
      <div className={"w-fit h-fit border-[2px] border-black space-y-3 rounded-lg p-8 "}>
        <h1>Do you want to log out ?</h1>
        <div className={"flex justify-evenly text-white"}>
          <button onClick={logOutHandler} className={"border rounded py-2 p-4 bg-orange"}>Yes</button>
          <button onClick={()=>{setModal(false)}} className={"border rounded py-2 p-4 bg-richblack-600 "}>No</button>
        </div>
      </div>
    </div>
  );
}

export default LogOutModal;