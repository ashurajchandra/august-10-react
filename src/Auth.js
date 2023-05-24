import React from 'react';
import {Routes, Route } from "react-router-dom";
import Login from './Component/Login/Login';
import Signup from './Component/SignupForm/Signup';

export default function Auth(){

    return(
        <React.Fragment>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Signup/>}/>
          </Routes>
        </React.Fragment>
    )
}