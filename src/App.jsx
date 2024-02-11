import './App.css'
import { Outlet, Routes,Route } from 'react-router-dom'
import { LoginSignup } from './pages/LoginSignup'
function App() {

  return (
    <div className=''>
      <Routes>
          <Route path="/" element={<div><Outlet/></div>}>
            <Route index element={<LoginSignup/>}/>
          </Route>
      </Routes>
    </div>
  )
}

export default App
