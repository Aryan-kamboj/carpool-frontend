import './App.css'
import { Outlet, Routes,Route } from 'react-router-dom'
import { LoginSignup } from './pages/LoginSignup'
import { CreateRide } from './pages/CreateRide.jsx';
import {Dashboard} from "./pages/Dashboard.jsx";
import { Navbar } from './components/Navbar.jsx';

function App() {

  return (
    <div className=''>
      <Navbar/>
      <Routes>
          <Route path="/" element={<div><Outlet/></div>}>
            <Route index element={<Dashboard/>}/>
            <Route path="/login" element={<LoginSignup/>}/>
            <Route path="/create" element={<CreateRide/>}/>
          </Route>
      </Routes>
    </div>
  )
}

export default App
