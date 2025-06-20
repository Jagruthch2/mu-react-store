import React from "react";
import "./Home.css";
import { Link,useNavigate } from "react-router-dom";
import {AppContext} from './App';
import {useContext} from 'react';
export default function Home() {
  const navigate=useNavigate();
  const {cart,setCart,email,setEmail} =useContext(AppContext);
  
  const products = [
    {
      id: 1,
      name: "Product 1",
      desc: "This is the description of the product",
      price: 45,
      imgUrl: "https://picsum.photos/id/1/300/300",
    },
    {
      id: 2,
      name: "Product 2",
      desc: "This is the description of the product",
      price: 50,
      imgUrl: "https://picsum.photos/id/2/300/300",
    },
    {
      id: 3,
      name: "Product 3",
      desc: "This is the description of the product",
      price: 75,
      imgUrl: "https://picsum.photos/id/3/300/300",
    },
  ];
  const buyNow=(obj)=>{
    setCart({
      id:obj.id,
      name:obj.name,
      price:obj.price,
      desc:obj.desc,
      email:email,
      qty:1})
    navigate("/cart");
  }
  return (
    <div className="App-Home-Row">
      {products.map((product) => (
        <div>
          <img src={product.imgUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.desc}</p>
          <h4>{product.price}</h4>
          <p><button onClick={()=>buyNow(product)}>Buy Now</button></p>
        </div>
      ))}
    </div>
  );
}