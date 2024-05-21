import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import Home from "./pages/Home"
import JadwalDokter from './pages/JadwalDokter'
import ResetPw from './pages/LupaKataSandi';
// import ProfileWebsite from "./pages/ProfileWebsite"

const App = () => {

  return (
    <div className="app">
      <Routes>
        {/* <Route path="/profile" element={<ProfileWebsite />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<Home/>} />
        <Route path="/jadwal" element={<JadwalDokter/>} />
        <Route path="/lupapassword" element={<ResetPw />} />
      </Routes>
    </div>
  )
}

export default App
