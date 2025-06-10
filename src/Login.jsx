import React from "react";
import { Link,useNavigate } from "react-router-dom";
import {useState} from 'react';
import {useContext} from 'react';
import {AppContext} from './App';
export default function Login() {
  const {users} =useContext(AppContext);
  const [user,setUser]=useState({});
  const [error,setError]=useState();
  const Navigate=useNavigate();
  const handleSubmit=()=>{
    const found=users.find(ele=>ele.email===user.email && ele.pass===user.pass);
    console.log(users);
    if(!found){
      setError("Access Denied");
    }else{
      Navigate("/");
    }
  }
  return (
    <div>
      <h2>Login Form</h2>
      {error}
      <p><input type="text" onChange={(e)=>setUser({...user,email:e.target.value})}/></p>
      <p><input type="password" onChange={(e)=>setUser({...user,pass:e.target.value})}/></p>
      <p><button onClick={handleSubmit}>Submit</button></p>
      <hr />
      <p>
        <Link to="/register">Create Account</Link>
      </p>
    </div>
  );
}