import React, { useState } from 'react'
import './Css/LoginSignup.css'
import { Form, Link, useNavigate } from 'react-router-dom'
import { RegisterTypes } from '../Reducer/registerReducer';
import { useDispatch } from 'react-redux';

const LoginSignup = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [userType, setUserType] = useState('Customer');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate  = useNavigate ();
  const dispatch =useDispatch();


  const register = async (event) => {
    event.preventDefault();

    if (password !== repassword) {
      // Passwords don't match, set passwordsMatch to false
      setPasswordsMatch(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userName,
          password: password,
          usertype: userType,
        }),
      });

      if (response.ok) {
        // Registration successful
        // Redirect or show success message
        setPasswordsMatch(true);
        navigate('/loginPage');
      } else {
        // Handle registration failure
        // Show error message or take appropriate action
      }
    } catch (error) {
      console.log("signup");
      console.error('Error registering user:', error);
      // Handle error
    }
    console.log('name: ', userName);
    console.log('phone: ', password);
    console.log('zipcode: ', repassword);
    console.log('credit: ', userType);

    const newRegistration = {
      username: userName,
      password: password,
      repassword: repassword,
      usertype: userType,
    };

    // Dispatch the ADD_REGISTRATION action to add the new registration
    dispatch({ type: RegisterTypes.ADD_REGISTRATION, registration: newRegistration });



    //console.log("order state ", order);
   // console.log(" cart state", this.state);
  //  dispatch({ type: CartTypes.CLEAR });
  
  //  navigate('/loginPage');
  };
  return (
  
<form onSubmit={register} className='loginsignup'>
  <div className="loginsignup-container">
    <h1>Sign up</h1>
    <div className="loginsignup-fields">
      <div className='loginsignup-field'>
        <label htmlFor='username'>UserName:</label>
        <input type='text' value={userName} placeholder='User Name'  onChange={(event) => setUserName(event.target.value)} required/>
      </div>
      <div className='loginsignup-field'>
        <label htmlFor='password'>Password:</label>
        <input type='password' value={password} placeholder='Password'  onChange={(event) => setPassword(event.target.value)} required/>
      </div>
      <div className='loginsignup-field'>
        <label htmlFor='repassword'>Retype Password:</label>
        <input type="password" value={repassword} placeholder='Re-Password'  onChange={(event) => setRepassword(event.target.value)} required />
      </div>
      <div className='loginsignup-field'>
        <label htmlFor='usertype'>UserType:</label>
        <select value={userType} name='usertype'  onChange={(event) => setUserType(event.target.value)}>
          <option value='customer' selected>Customer</option>
          <option value='retailer'>Store Manager</option>
          <option value='manager'>Salesman</option>
        </select>
      </div>
    </div>
    {!passwordsMatch && <p className="error-message">Passwords do not match</p>}
    <button type='submit'>Continue</button>
    <p className="loginsignup-login">
      Already have an account? 
      <Link style={{textDecoration: 'none'}} to='/loginpage'>
        <span> Login here</span>
      </Link>
    </p>
  </div>
</form>
   
  )
}



export default LoginSignup