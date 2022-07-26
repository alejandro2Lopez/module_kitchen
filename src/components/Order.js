import React, {useState, useEffect} from "react";
import App from "../App.css";
import { getFetch } from './GetUser';
import IsLoading from "./IsLoading";
import List from "./List";

function Order () {

    var UserName = sessionStorage.getItem("UserName");
    const LoadingList = IsLoading(List);
    const[appStateLoading, setAppStateLoading] = useState(false)
    const[appStateObject, setAppStateObject] = useState(null)
    const[refresh, setRefresh] = useState(true);

    useEffect(() => {
        if(refresh){
            setAppStateLoading(true);
            getFetch("api/orders").then(val => setAppStateObject(val))        
            setAppStateLoading(false);
            setRefresh(false);
          }
        }, [setAppStateObject, setAppStateLoading,refresh])


        return(
            
            <div className="Menu-App">
                <h1> Lista de Ordenes</h1>
                <h2>Usuario: {UserName}</h2>
                <LoadingList isLoading={appStateLoading} contents={appStateObject}/>
                
            
            </div>
        )

}  

export default Order;