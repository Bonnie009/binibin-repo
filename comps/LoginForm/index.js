import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import axios from "axios";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  //   const [cookie, setCookie] = useCookies["user"];
  const router = useRouter();

  // const handleSignIn = async () => {
  //   try {
  //     const response = await yourLoginFunction(username); //handle API call to sign in here.
  //     const data = response.data;

  //     setCookie("user", JSON.stringify(data), {
  //       path: "/",
  //       maxAge: 7200, // Expires after 1hr
  //       sameSite: true,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // get functions to build form with useForm() hook

  async function onSubmit(e) {
    e.preventDefault();
    console.log(e.target.username.value);
    const result = await fetch(
      "http://localhost:8080/auth/login",
      // "https://binibin-server.herokuapp.com/auth/login",
      {
        credentials: "include",
        method: "POST",
        body: JSON.stringify({
          username: e.target.username.value,
          password: e.target.password.value,
        }),
        headers: { "Content-Type": "application/json" },
      }
    ).then((response) => {
      console.log(response);
    });
    console.log("--------------------------------------------");
  }

  // async function onSubmit(e) {
  //   debugger;
  //   e.preventDefault();
  //   console.log(e.target.username.value);
  //   axios.post;
  //   const result = await axios({
  //     // `https://binibin-server.herokuapp.com/auth/login`,
  //     url: "http://localhost:8080/auth/login",
  //     withCredentials: true,
  //     method: "POST",
  //     body: {
  //       username: e.target.username.value,
  //       password: e.target.password.value,
  //     },
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     // headers: { "Content-Type": "application/json" },
  //   });
  //   debugger;
  //   console.log(result.data);
  //   console.log("--------------------------------------------");

  //   // get return url from query parameters or default to '/'
  //   // const returnUrl = router.query.returnUrl || "/";
  //   // router.push(returnUrl);
  // }


  //------Bonnie's Test----------

  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({ value: "" });
  // const history = useHistory();
  //console.log("auth", localStorage.getItem("isAuthenticated"));

  const handleInputChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //if username or password field is empty, return error message
    if (userData.username === "" || userData.password === "") {
      setErrorMessage((prevState) => ({
        value: "Empty username/password field",
      }));
    } else if (userData.username == "admin" && userData.password == "123456") {
      //Signin Success
      localStorage.setItem("isAuthenticated", "true");
      window.location.pathname = "/";
    } else {
      //If credentials entered is invalid
      setErrorMessage((prevState) => ({ value: "Invalid username/password" }));
    }
  };


  return (
    <form onSubmit={onSubmit} method="post">
      <div className="form-group">
        <input 
        name="username" 
        type="text" 
        placeholder="Username"
        onChange={(e)=>handleInputChange(e)}
        
        />
      </div>
      <div className="form-group">
        <input 
        name="password" 
        type="password" 
        placeholder="Password" 
        onChange={(e)=>handleInputChange(e)}
        
        />
      </div>
      <button 
      type="submit"
      className="btn btn-primary loginBtn"
      onClick={handleSubmit}
      >  
        Login</button>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        input {
          width: 400px;
          height: 52px;
          color: black;
          font-size: 18px;
          border: 5px solid #0e73aa;
          border-radius: 10px;
          padding: 10px;
        }
        .loginBtn {
          background:#2C5489;
          color: #fff;
          height:60px;
          width:200px;
          cursor: pointer;
          margin-bottom: 0;
          border-radius: 10px;
          border-color: transparent;
          text-align: center;
          font-size:24px;
          font-family: font-family: 'Hind', sans-serif;
        }
        .form-group {
          padding: 10px;
        }
      `}</style>
    </form>
  );
};

export default LoginForm;
