import React from "react";
import TopPage from "./TopPage";
import { NavLink } from "react-router-dom";
import { Button,PageHeader } from 'antd';
import { useNavigate } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "auto",
  padding: "12px",
  margin: "6px 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {

  //const navigate = useNavigate();
    
    
  //function handleClick () {
    //  navigate.push("/marketplace");
  //}


  return (
    <div>
      <NavLink
        
        to="/"
        exact
        style={linkStyles}

      >
        <Button>
        Home
        </Button>
        
      </NavLink>
      <NavLink
        to="/marketplace"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        <Button>
        Markeplace
        </Button>
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
       <Button>
        About
        </Button>
      </NavLink>
    </div>
  );
}

export default NavBar;