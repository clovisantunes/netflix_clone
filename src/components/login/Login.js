import React from "react";
import "./Login.css";
import { useState } from "react";
import { Navigate } from "react-router";

const Login = () => {
  let [userName, setUser] = useState("dito");

  const onChangeHandler = (user) => {
    setUser(user.target.value);
  };

  
  const onClickChange = () => {
    window.localStorage.setItem(userName, setUser);
    console.log("Usuario: ", userName);
  };


  const Setlogo =
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";

  return (
    <div className="Login_background">
      <img className="Nav_logo" src={Setlogo} alt="NetFlix"></img>

      <div className="Login_container_black"></div>
      <div className="Login_container">
        <div>
          <h2 className="Login_card">Entrar</h2>
          <input
            type="text"
            id="nome"
            placeholder="Digite seu nome de usuario"
            onChange={onChangeHandler}
          ></input>
          <button className="button_card" onClick={ Navigate("mini_netflix_v2/menu") || onClickChange}>
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
