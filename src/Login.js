import React from "react";
import "./Login.css";
import {updateURL} from "./spotify";
export let clientID = "";
function Login() {
  let loginurl = ""
  
  const handleChange = ()=>{
    clientID = document.getElementById("clientID").value
  }
  const handleClick = ()=>{
    document.getElementById("loginBtn").setAttribute('href',updateURL(clientID));
  }
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <input type="text" placeholder="Enter your Client ID" id ="clientID" onChange={()=>{handleChange()}}/>
      <a onClick={()=>{handleClick()}} id = "loginBtn">LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;