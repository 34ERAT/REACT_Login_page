import axios from "axios";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import React,{useState} from "react";

function App() {
  const [login,setLogin]=  useState(true)
  const Post = async(url,data)=>{
    try {
      await axios.post(url,data)
      alert("success")
    } catch (err) {
      console.error(err)
      alert(" data was not send successfull")
    }
  }
  return (
  <div className="wrapper">
     
      { login ? <Login post={Post} setlogin={setLogin}/> : <SignUp post={Post} setlogin={setLogin}/>}
      
    </div>
  );
}

export default App;
