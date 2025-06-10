import React from 'react'
import App, { AppContext } from './App';
import {useContext} from 'react';
import {useNavigate } from 'react-router-dom';
export default function Logout() {
    const {email,setEmail,setLogin}=useContext(AppContext);
    const Navigate=useNavigate();
    setEmail(null);
    setLogin(null);
    Navigate("/");
  return (
    <div>Logout</div>
    
  )
}
