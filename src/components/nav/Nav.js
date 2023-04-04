import React, { useEffect, useState } from "react";
import './nav.css';
import './HiddenNav';
import Hide from "./HiddenNav";
import ShowNav from "./ShowNav";
import userName from "../login/Login";

function Nav () {
    const [show, setShow] = React.useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          setShow(window.scrollY > 50);
        });
      }, []);
      const Name = () => {
        let [getName, ] = useState ("none")
      }
      const onChangeUser = (getName) => {
       window.localStorage.getItem(userName,getName )
      }
    
    return (

      <div className={`nav-container ${show && "Nav_container_black"}`} id="nav_container">
        <img className="Nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="NetFlix">
            
        </img>
        <button className="Nav_avatar" onClick={ShowNav} alt="Clovis" />
        
          <div className="NavMenu">
            <button className="close_card" onClick={Hide} />
            

          </div>

        
    </div>
    );
}
export default Nav;