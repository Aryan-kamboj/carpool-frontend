import {useNavigate} from "react-router-dom";

export const Dashboard = ()=>{
  // const token = document?.cookie
  document.cookie = "name=some random cookie; expires=Wed, 18 Dec 2024 12:00:00 UTC;; path=/";
  const navigator = useNavigate();
  const authToken  = document.cookie.split("=")[1];
  if(!(authToken.length>0)){
    navigator("/login");
  }
  return <div>
    Dashboard
  </div>
}