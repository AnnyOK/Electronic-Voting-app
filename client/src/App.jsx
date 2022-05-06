import React from "react"

import{BrowserRouter as Router,Route,Routes} from "react-router-dom";

//pages
import Register from "./pages/Register";
import Home from "./pages/Home";
import AspirantDashboard from "./pages/AspirantDashboard";
import Login from "./pages/Login";
import VoterDashboard from "./pages/VoterDashboard"
import Header from "./pages/header";
import NavBar from './pages/NavBar'
function App (){
    
        return(<>
        <Header/>
        <Router>
        <NavBar/>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Register" element={<Register/>}/>
    <Route path="/AspirantDashboard" element={<AspirantDashboard/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/VoterDashboard" element={<VoterDashboard/>}/>
</Routes>
        </Router>
        </>       
        )
    }

export default App;