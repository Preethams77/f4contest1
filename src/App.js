import React,{useState} from 'react'
import './App.css';


function App() {
  const[data,setData] =useState({
    username : '',
    email:'',
    password:'',
    confirmpassword:'',
  })
  const{username,email,password,confirmpassword}=data;
  const changeHandler =e=>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  return (
    <div>
        <h1>Signup</h1>
        
        <input type="text" id="name" placeholder="Full Name"value={username} onChange={changeHandler}/><br/>
        <input type="email" id="email" placeholder="Email"value={email} onChange={changeHandler}/><br/>
        <input type="password" id="password" placeholder="Password"value={password} onChange={changeHandler}/><br/>
        <input type="password" id="confirm_password" placeholder="Confirm Password"value={confirmpassword} onChange={changeHandler}/><br/>
        
        <p id="error"></p>
        <button id="submit">Signup</button>
    </div>
    
  );
}

export default App;
