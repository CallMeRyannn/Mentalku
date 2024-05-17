import { Route, Routes } from "react-router-dom"
// import { GlobalStyle } from './utils/GlobalStyle'
import Login from "./pages/Login"
import Registration from "./pages/Registration"

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
