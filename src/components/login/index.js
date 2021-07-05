import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import TopBar from '../topbar';
const Login = (props) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("");
  
  const loginToNextPage = (e) =>{
    e.preventDefault();
    if(usertype.toLowerCase() === "admin"){
      if(username === "test-admin" && password === "test-admin"){
        props.changePage();
        props.changePath("storemanager");
        console.log("welcome admin")
      }
      else alert("Please enter valid user or correct password")
    }
    else{
      if(username === "test-sales" && password === "test-sales"){
        props.changePage();
        props.changePath("salesexecutive");
        console.log("welcome sales manager")
      }
      else alert("Please enter valid user or correct password")
    }
  }

    return ( <>
    <TopBar />
    {props.redirectToNextPage && <Redirect to={`/${props.redirectedPage}`} />}
    <div className="App">
    <h1 className="heading">Login To Pharmacy</h1>
    <form className="login-form" onSubmit={(e) => loginToNextPage(e)}>
      <label>Username:
        <input type="text" name="username" required placeholder="Enter username here..." onChange={(e)=>setUsername(e.target.value)} />
      </label><br/>
      <label>Password:
        <input type="password" name="password" required placeholder="Enter password here..." onChange={(e)=>setPassword(e.target.value)} />
      </label><br />
      <label>Type:
        <input list="user-type" required placeholder="Enter user type here..." onChange={(e)=>setUsertype(e.target.value)} />
        <datalist  id="user-type">
          <option value="Admin" />
          <option value="Sales Executive" />
        </datalist>
      </label><br />
      <button>Login</button>
    </form>
  </div> 
  </>);
}
 
export default Login;