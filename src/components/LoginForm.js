import React, {useState, useEffect} from "react";
import { getFetch, postFetch } from "./GetUser";
import {Link, useNavigate} from "react-router-dom";
import Login_1 from "../img/Login_1.png"
import Menu from "./Menu";

function LoginForm() {
        

    const[name, setName] = useState("");
    const[password, setPassword] =useState("");

    const[appStateLoading, setAppStateLoading] = useState(false)
    const[appStateObject, setAppStateObject] = useState(null)
    const[refresh, setRefresh] = useState(true);

    useEffect(() => {
      if(refresh){
          setAppStateLoading(true);
          getFetch("api/users").then(val => setAppStateObject(val))        
          setAppStateLoading(false);
          setRefresh(false);
        }
      }, [setAppStateObject, setAppStateLoading,refresh])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            console.log("Working on it")
            let result = postFetch("api/users", {name: name, password: password}).then(val => console.log(val))
            console.log(result.value)    
            test();
        } catch (err) {
            console.log(err)
        }
    }

    const test =() =>{        
        console.log("test");
    }

    return(
    <div className="Form-box">
        <img src={Login_1}  width="225px"/>
        <h3 className="Form-Text">Login</h3>
            <form onSubmit={handleSubmit}>
            <input 
                className="Form-Login"
                type= "text"
                value={name}
                placeholder= "Nombre de Usuario"
                onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <input 
                className="Form-Login"
                type= "password"
                value={password}
                placeholder= "Contraseña"
                onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <button                   
                type="submit" 
                className="Form-Buttom"
            >Crear</button>                        
            </form>
                        
            <button onClick={test}
            className="Form-Buttom"
            width= "10px"> </button>
    </div>

);

};

export default LoginForm;