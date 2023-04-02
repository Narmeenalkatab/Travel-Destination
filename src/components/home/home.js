import React from "react";
import Header from "../header/Header.js";
import Tours from "../tours/Tours.js";
import Footer from "../footer/Footer.js";
const Data1= require("../../data/db.json");
function Home (){

    return(
        <>


<Header/>

 {  Data1.map(element=>{
          return(
            <Tours name ={element.name} image_url={element.image}/>
          )
        })}

<Footer/>



 </>
)}

export default Home;