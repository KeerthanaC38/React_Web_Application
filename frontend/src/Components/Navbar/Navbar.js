

import React, { useContext, useState } from 'react'
import './Navbar.css';
import { ShopContext } from '../../Context/ShopContext';
import logo from '../Assets/site/SmartHome.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { CartTypes, getTotalCartItems } from '../../Reducer/cartReducer';
import { connect, useDispatch } from 'react-redux';
import { AuthTypes } from '../../Reducer/authReducer';
import allProducts from '../Assets/all_product';
import { type } from '@testing-library/user-event/dist/type';
import Product from '../../Pages/Product';

const Navbar = (props) => {
    const[menu,setMenu]= useState("home");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const { filterProducts, filteredProducts } = useContext(ShopContext);


    const onChange = (event) =>{
      setValue(event.target.value);
      filterProducts(event.target.value);
    }

    const handlelogout=()=>{
      console.log("logout ",props.islogin.islogin);
     dispatch({ type: AuthTypes.LOGOUT , islogin: !props.islogin.islogin});
     dispatch({type: CartTypes.CLEAR});
      console.log(props.islogin);
      console.log('b');
      navigate('/login'); 
    };
  return (
    <div className='navbar'>
    <div className="nav-logo">
        <img src={logo} alt=""/>
        <p> SmartHome</p>
    </div>
    <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}> <Link style={{textDecoration: 'none',  }} to='/'>Home</Link> {menu==="home"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("smartdoorbell")}}> <Link style={{textDecoration: 'none'}} to='/smartdoorbell'>Smart Doorbell</Link> {menu==="smartdoorbell"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("smartdoorlock")}}> <Link style={{textDecoration: 'none'}} to ='/smartdoorlock'>Smart Doorlock </Link> {menu==="smartdoorlock"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("smartspeaker")}}> <Link style={{textDecoration: 'none'}} to ='/smartspeaker'>Smart Speaker</Link>{menu==="smartspeaker"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("smartlighting")}}> <Link style={{textDecoration: 'none'}} to ='/smartlighting'>Smart Lighting</Link >{menu==="smartlighting"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("smartthermostat")}}> <Link style={{textDecoration: 'none'}} to ='/smartthermostat'>Smart Thermostat</Link>{menu==="smartthermostat"?<hr/>:<></>}</li>
    </ul>
    <div className="nav-login-cart">
    { props.islogin.islogin ? (
          <button onClick={handlelogout}>Logout</button>
        ) : (
          <Link style={{ textDecoration: 'none' }} to='/login'>
            <button>Login/SignUp</button>
          </Link>
        )}
        <Link style={{textDecoration: 'none'}} to ='/cart'> <p>Cart</p> </Link>
        <div className="nav-cart-count">{props.totalCartItems}</div>
    </div>
    <div className="search-container">
          <div className="search-inner">
            <input type="text" value={value} onChange={onChange} />
            <button onClick={()=>filterProducts(value)}>Search</button>
          </div>
          <div className="dropdown">
            {allProducts.filter(item => {
              const searchTerm = value.toLowerCase();
              const productName = item.name.toLowerCase();
              return searchTerm && productName.startsWith(searchTerm) && productName !== searchTerm;
            })
            .map((item)=> (
              <Link to={`/product/${item.id}`} className ="dropdown-row" key={item.id}>{item.name}</Link>
            // <div onClick={()=>filterProducts(item.name)}className="dropdown-row" key={item.id}>
            //     {item.name}
            //   </div>
            ))}
          </div>
    </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    totalCartItems: getTotalCartItems(state.cart),
    islogin: state.islogin, // Get total cart items from the Redux store
  };
};

export default connect(mapStateToProps)(Navbar);
