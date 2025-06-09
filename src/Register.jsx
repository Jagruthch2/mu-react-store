import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Register() {
  const [user, setUser] = useState({});
  const [count, setCount] = useState(0);
  const handleClick = () => {
      alert("Hello World");
    };
    const updateCount = () => {
        setCount(count + 1);
    };
    const [num,setNum]=useState(0);
    const plusNum=()=>{
        setNum(num+1);
    }
    const minusNum=()=>{
        setNum(num-1);
    }
    const[num1,setNum1]=useState(0);
    const[num2,setNum2]=useState(0);
    const[res,setRes]=useState(0);
    const sum=()=>{
        setRes(num1+num2);
    }
  return (
    <div>
      <h2>Register</h2>
      <p>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </p>
      <p>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter Email Address"
        />
      </p>
      <p>
        <input
          type="password"
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
          placeholder="New Password"
        />
      </p>
      <p>
        <button>Submit</button>
      </p>
      <hr />
      <p>
        <Link to="/login">Aready a member? Login Here...</Link>
      </p>
      <hr />
      <button onClick={handleClick}>Click</button>
      <hr />
      <p>
        {count}<br></br>
        <button onClick={updateCount}>Update Count</button>
      </p>
      <hr />
      <p>
        <button onClick={minusNum}>-</button>
        {num}
        <button onClick={plusNum}>+</button>
      </p>
      <hr />
      <p>
        <input type="number" onChange={(e) => setNum1(Number(e.target.value))}
        placeholder="Enter number1" />
        <input type="number" onChange={(e) => setNum2(Number(e.target.value))} placeholder="Enter number2" />
        <button onClick={sum}>Sum</button>
        <p>Sum:{res}</p>
      </p>
    </div>
  );
}