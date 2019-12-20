import React, {useState} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = (props) => {
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: ""
  });
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const loginForm = e => {
    e.preventDefault()
    axiosWithAuth()
    .post("/login", userLogin)
    .then(res => {
      console.log(res)
      localStorage.setItem("token", res.data.payload)
      props.history.push('/bubbles')
    })
    .catch(err => console.log(err))
    }
  

    const handleChanges = e => {
      e.preventDefault()
      setUserLogin({...userLogin, [e.target.name]: e.target.value })
    }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      {/* <p>Build a login page here</p> */}
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userLogin.username}
          onChange={handleChanges}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userLogin.password}
          onChange={handleChanges}
        />
      <button onClick={loginForm}>Log In</button>

      </form>
      
    </>
  );
};

export default Login;
