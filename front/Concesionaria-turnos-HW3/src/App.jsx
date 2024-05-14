
import './App.css'
import Navbar from './components/navbar/Navbar'
import Register from './views/Register/Register'
import Home from './views/Home/Home'
import MisTurnos from './views/Mis Turnos/MisTurnos'
import Login from './views/Login/Login'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
    <>
    <Navbar />
    <div style={{width: "90vw", margin: "auto"}}>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/mis-turnos" element={<MisTurnos/>}/>
    </Routes>
    </div>

    </>)
}

export default App
