import React from "react";
import { NavLink } from "react-router-dom";
import { Button,PageHeader } from 'antd';

//some styling navbar 
const linkStyles = {
  display: "inline-block",
  width: "auto",
  padding: "12px",
  margin: "6px 6px 6px",
  
  textDecoration: "none",
  color: "white",
};

function NavBar() {

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
        to="/contact"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
       <Button>
        Contact
        </Button>
      </NavLink>
    </div>
  );
}

export default NavBar;