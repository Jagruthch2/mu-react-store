import React from 'react'
import {AppContext} from './App'
import {useState,useContext} from 'react'
export default function Cart() {
    const {cart,setCart,email}=useContext(AppContext);
    const incrementQty=()=>{
        setCart({...cart,qty:cart.qty+1});
    }
    const decrementQty=()=>{
        setCart({...cart,qty:cart.qty-1});
    }
  return (
    <div>
        <h1>Cart</h1>
        <p>{cart.email}</p>
        <p>{cart.name}</p>
        <p><button onClick={decrementQty}>-</button>{cart.qty}<button onClick={incrementQty}>+</button></p>
        <p>{cart.price}</p>
        <p>{cart.desc}</p>
        <hr />
        <h2>Order Value:{cart.price*cart.qty}</h2>
        <hr />
        <p>
            {email?<button>Place order</button>:<button>Login to order</button>}
        </p>
    </div>
  )
}
