import { useState,createContext } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Login from'./Login';
import Register from './Register';
import Cart from './Cart';
import Logout from './Logout'
import Order from './Order';
import Product from './Product';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
export const AppContext=createContext();
function App() {
  // const [user, setUser] = useState({});
  const [users, setUsers]=useState([]);
  const [cart, setCart]=useState({});
  const [email,setEmail]=useState();
  const [login,setLogin]=useState(false);
  const [orders,setOrders]=useState([]);
  return (
    <div>
      {/* <AppContext.Provider value={{user,setUser,users,setUsers}}> */}
      <AppContext.Provider value={{users,setUsers,cart,setCart,cart,setCart,email,setEmail,login,setLogin,orders,setOrders}}>
      <BrowserRouter>
        <Header name="Mu-react-store"/>
        <Routes>
          <Route index element={<Product />}></Route>
          <Route path="/" element={<Product />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App
