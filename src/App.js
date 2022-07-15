import {BrowserRouter as Router, Redirect, Route, Switch, Link, useNavigate} from "react-router-dom";
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">       
      
      <div >      
      <LoginForm/>
      </div>

      </header>
    </div>
  );
}

export default App;
