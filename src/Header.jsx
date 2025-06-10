import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import {useContext} from 'react';
import { AppContext } from './App';
export default function Header({name}) {
  const {login}=useContext(AppContext);
  return (
    <div className="App-Header-Row" style={{backgroundColor:"darkblue",color:"white" }}>
        <div><h1>{name}</h1></div>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>{login?<p>Logout</p>:<Link to="/login">Login</Link>}</li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </div>
    </div>
  );
}
