import { useLocation } from "react-router-dom"

export const Error404 = () => {
    const path = useLocation();
    console.log(path);
  return (
    <div className="flex-1 backdrop-blur justify-center flex items-center text-4xl "><div className="flex-col h-[40vh] flex items-center w-[40vw] justify-around bg-[rgba(255,255,255,0.7)] p-8 rounded-lg text-center"><span>404</span><span>Welcome to AB-1, 6th floor</span><span>"{path.pathname}" ???</span></div></div>
  )
}
