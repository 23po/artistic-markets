import logo from '../logo.svg';
import '../App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";
//import AvatarCollection from "./AvatarCollection";
//import AvatarCard from "./AvatarCard";
//import AddAvatarForm from "./AddAvatarForm";
import Marketplace from './Marketplace';
import About from './About';
import TopPage from './TopPage';
import UploadForm from './UploadForm';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element = {<TopPage/>}>
        </Route>
        <Route path="/Marketplace" element = {<Marketplace/>}>
        </Route>
        <Route path="/Login" element = {<Login/>}>
        </Route>
        <Route path="/About" element = {<About/>}> 
        </Route>
        <Route path="/UploadForm" element = {<UploadForm/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
