import {  Routes,Route } from 'react-router-dom'
import { LoginSignup } from './pages/LoginSignup'
import { CreateRide } from './pages/CreateRide.jsx';
import {Dashboard} from "./pages/Dashboard.jsx";
import { Navbar } from './components/Navbar.jsx';
import { SearchRide } from './pages/SearchRide.jsx';
import { useLocation } from 'react-router-dom';
import { MyRides } from './pages/MyRides.jsx';
import MyRequests from './pages/MyRequests.jsx';

function App() {
  const location = useLocation();
  const {pathname} = location;
  return (
    // <div className='bg-bg min-h-[100vh] h-screen'>
    <div className='bg-bg h-screen w-screen flex flex-col'>
      {pathname !== '/login' && <Navbar/>}
      <Routes>
            <Route index element={<SearchRide/>}/>
            <Route path="/login" element={<LoginSignup/>}/>
            <Route path="/create" element={<CreateRide/>}/>
            <Route path="/search" element={<SearchRide/>}/>
            <Route path='my-rides' element={<MyRides/>}/>
            <Route path="/my-requests" element={<MyRequests />}/>
      </Routes>
    </div>
  )
}

export default App
