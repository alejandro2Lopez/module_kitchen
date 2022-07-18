import './App.css';
import LoginForm from './components/LoginForm';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Menu from "./components/Menu";
import Order from './components/Order';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <LoginForm/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='*' element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
