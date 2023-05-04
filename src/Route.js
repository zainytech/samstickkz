import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from './comp/Signup';
import Login from './comp/Login';
import Home from './comp/Home';
import Dashboard from './comp/Dashboard';

function RouteConfig() {
 
  return <>
	<div>
      <BrowserRouter>

        <Routes>
      
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
            
    </BrowserRouter>
        
	</div>
  </>
  }
  
  export default RouteConfig;
