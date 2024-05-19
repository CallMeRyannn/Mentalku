import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { GlobalStyle } from './utils/GlobalStyle'
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import KonsultasiOnline from "./pages/KonsultasiOnline";
import Penyakit from "./pages/Penyakit"
const App = () => {

  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/konsultasi" element={<KonsultasiOnline />}/>
        <Route path="/penyakit" element={<Penyakit />}/>
      </Routes>
    </div>
  )
}

export default App
