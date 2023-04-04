import React from "react";
import NavMenu from  "./Nav";


export default function ShowNav(){ 
    if (ShowNav) 
    var elems = document.getElementsByClassName('NavMenu');
     for (var i=0;i<elems.length;i+=1){
    elems[i].style.display = 'block';
    }
};