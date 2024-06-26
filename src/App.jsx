import {Routes, Route, useNavigate} from 'react-router-dom'
import { LoginSignup } from './pages/LoginSignup'
import { CreateRide } from './pages/CreateRide.jsx';
import { Navbar } from './components/Navbar.jsx';
import { SearchRide } from './pages/SearchRide.jsx';
import { useLocation } from 'react-router-dom';
import { MyRides } from './pages/MyRides.jsx';
import MyRequests from './pages/MyRequests.jsx';
import { RideDetails } from './pages/RideDetails.jsx';
import { HostRide } from './pages/HostRide.jsx';
import { Error404 } from './pages/Error404.jsx';
import Cookies from "js-cookie"
import {useEffect} from "react";

function App() {
  const location = useLocation();
  const {pathname} = location;
  // console.log(Cookies.get("secret-token"));
  // console.log(document.cookie);
  const navigator = useNavigate();
  // const authToken = Cookies.get("secret-token");
  const authToken = localStorage.getItem("token");
  useEffect(() => {
    if (!(authToken?.length > 0)) {
      navigator("/login");
    }
  }, [authToken]);
  return (
    // <div className='bg-bg min-h-[100vh] h-screen'>
    <div className=' h-screen w-screen flex flex-col'>
      {pathname !== '/login' && <Navbar/>}
      <Routes>
        <Route index element={<SearchRide/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
        <Route path="/create" element={<CreateRide/>}/>
        <Route path="/search" element={<SearchRide/>}/>
        <Route path='/ride-details' element={<RideDetails/>}/>
        <Route path='/my-rides' element={<MyRides/>}/>
        <Route path='/my-rides/:id' element={<HostRide/>}/>
        <Route path="/my-requests" element={<MyRequests />}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </div>
  )
}

export default App
