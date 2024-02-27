import './App.css'
import { Outlet, Routes,Route } from 'react-router-dom'
import { LoginSignup } from './pages/LoginSignup'
import {Dashboard} from "./pages/Dashboard.jsx";

function App() {

  return (
    <div className=''>
      <Routes>
          <Route path="/" element={<div><Outlet/></div>}>
            <Route index element={<Dashboard/>}/>
            <Route path="/login" element={<LoginSignup/>}/>
          </Route>
      </Routes>
    </div>
  )
}

export default App
