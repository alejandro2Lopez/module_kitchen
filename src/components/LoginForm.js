import React, {useState, useEffect} from "react";
import { getFetch, postFetch } from "./GetUser";
import {useNavigate} from "react-router-dom";
import Login_1 from "../img/Login_1.png";
import Background from "../img/Background.webp";

function LoginForm() {
        
    const navigate = useNavigate();

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
            postFetch("api/users", {name: name, password: password}).then(val =>{
                if (val.isValidate.isValidate === true) {
                    sessionStorage.setItem("UserName", name);
                    redirect();
                } else {
                    alert("Error de autentificacion")
                }})                  
            //redirect();
        } catch (err) {
            console.log(err)
        }
    }

    const redirect =() =>{        
        console.log("test");
        navigate('/menu')
    }

    return(
        <body className="App">
            <header className="App-header" >
            <div></div>
                <div className="Form-box">
                <img src={Login_1}  width="255px"/>
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
                <br/>
                <input 
                    className="Form-Login"
                    type= "password"
                    value={password}
                    placeholder= "Contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <br/>
                <button                   
                    type="submit" 
                    className="Form-Buttom"
                >Entrar</button>                   
                </form>

               {/* <button onClick={redirect}
                    className="Form-Buttom"
                    width= "10px"> </button>*/}
                </div>
        
            </header>        
        </body>



);

};

export default LoginForm;