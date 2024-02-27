import './App.css'
import { Outlet, Routes,Route } from 'react-router-dom'
import { LoginSignup } from './pages/LoginSignup'
import { CreateRide } from './pages/CreateRide.jsx';
import {Dashboard} from "./pages/Dashboard.jsx";
import { Navbar } from './components/Navbar.jsx';
import { SearchRide } from './pages/SearchRide.jsx';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const {pathname} = location;
  return (
    <div className=''>
      {pathname !== '/login' && <Navbar/>}
      <Routes>
          <Route path="/" element={<div><Outlet/></div>}>
            <Route index element={<Dashboard/>}/>
            <Route path="/login" element={<LoginSignup/>}/>
            <Route path="/create" element={<CreateRide/>}/>
            <Route path="/search" element={<SearchRide/>}/>
          </Route>
      </Routes>
    </div>
  )
}

export default App
