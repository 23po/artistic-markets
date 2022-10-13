import React, {useEffect, useState} from "react";
import CardMapper from "./CardMapper";
import {Input} from 'antd'
import './Marketplace.css'
 const {Search} = Input

// 
function Marketplace() {
  
const [pictures, setPictures] = useState([])

//get request to database
useEffect( () => {
  fetch(`${process.env.REACT_APP_API_URL}/pictures`)
      .then(res => res.json())
      .then(data => setPictures(data))
                  }, 
                  [])

//send payload to CardMapper and also adds Search component
return (
    <div class = "flexbox-container">
         <Search
            placeholder="input search text"
            //onSearch={onSearch}
            style={{
            width: 200,
                  }}/>
        <CardMapper pictures = {pictures}/>
       
    </div>
  );
}

export default Marketplace;
