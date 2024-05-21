import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { GlobalStyle } from './utils/GlobalStyle'
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import KonsultasiOnline from "./pages/KonsultasiOnline";
import Penyakit from "./pages/Penyakit"
import Penyakit1 from "./pages/Penyakit1"
import Penyakit2 from "./pages/Penyakit2"
import Penyakit3 from "./pages/Penyakit3"
import Penyakit4 from "./pages/Penyakit4"
import Penyakit5 from "./pages/Penyakit5"
import Penyakit6 from "./pages/Penyakit6"
const App = () => {

  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  )
}

export default App
