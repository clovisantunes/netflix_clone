import React from "react";
import NavMenu from "./Nav";


export default function Hide(){
    if(Hide)
    var elems = document.getElementsByClassName('NavMenu');
    for (var i=0;i<elems.length;i+=1){
     elems[i].style.display = 'none';
     console.log("escondeu")
    }
};
