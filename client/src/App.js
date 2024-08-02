import LandingPage from "./pages/LandingPage"
import Dashboard from "./pages/Dashboard"
import "./styles/global.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/adminlogin" element={<LandingPage/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
