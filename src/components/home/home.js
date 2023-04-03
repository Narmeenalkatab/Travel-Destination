import React from "react";
import Header from "../header/Header.js";
import Tours from "../tours/Tours.js";
import Footer from "../footer/Footer.js";

function Home (props){
const data = props.data;
    return(
        <>


<Header/>

 {  data.map(element=>{
          return(
            <Tours name ={element.name} image_url={element.image}/>
          )
        })}

<Footer/>



 </>
)}

export default Home;