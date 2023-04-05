import React, { useEffect, useState } from "react";
import "./nav.css";
import "./HiddenNav";
import Hide from "./HiddenNav";
import ShowNav from "./ShowNav";
import "../login/Login";

function Nav() {
  const user = Object.keys(localStorage);

  const [show, setShow] = React.useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 100);
    });
  }, []);

  return (
    <div
      className={`nav-container ${show && "Nav_container_black"}`}
      id="nav_container"
    >
      <img
        className="Nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="NetFlix"
      ></img>
      <button className="Nav_avatar" onClick={ShowNav} alt="Clovis" />

      <div className="NavMenu">
        <button className="close_card" onClick={Hide} />
        <h2 className="user" value={user}>{user}</h2>
        <button className="exit_card">Sair</button>
      </div>
    </div>
  );
}
export default Nav;
