import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Login from "./pages/Login"
import Registration from "./pages/Registration"
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
