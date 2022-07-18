import React, {useState, useEffect} from "react";
import App from "../App.css";

function Order () {

    var UserName = sessionStorage.getItem("UserName");


        return(
            
            <div className="Menu-App">
                <h1> Orders goes here</h1>
                <h2>{UserName}</h2>
            
                
            
            </div>
        )

}  

export default Order;