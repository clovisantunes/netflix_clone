import React from "react";
import Login from './components/login/Login';
import Menu from './components/index'
import{ BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function Rotas () {
    return (
        <Router>    
            <Routes>
                    <Route  path='/mini_netflix_v2' element={<Login />}/> 
                    <Route  path='/mini_netflix_v2/menu' element={<Menu />}/> 
            </Routes>
        </Router>
        
    );
}
export default Rotas;