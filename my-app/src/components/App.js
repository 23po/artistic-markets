import logo from '../logo.svg';
import '../App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";
//import AvatarCollection from "./AvatarCollection";
//import AvatarCard from "./AvatarCard";
//import AddAvatarForm from "./AddAvatarForm";
import LandingPage from './LandingPage';
import About from './About';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element = {<Login/>}>
        </Route>
        <Route path="/LandingPage" element = {<LandingPage/>}>
        </Route>
        <Route path="/About" element = {<About/>}> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
