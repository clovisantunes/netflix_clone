import React, { useEffect, useState } from "react";
import './nav.css';

function Nav () {
    const [show, setShow] = React.useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          setShow(window.scrollY > 10);
        });
      }, []);

    return (

      <div className={`nav-container ${show && "Nav_container_black"}`} id="nav_container">
        <img className="Nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="NetFlix">
            
        </img>
        <img className="Nav_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU" alt="Clovis">

        </img>
    </div>
    );
}
export default Nav;