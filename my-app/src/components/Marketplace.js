import React, {useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";
import CardMapper from "./CardMapper";
//import AvatarCard from "./AvatarCard";
import UploadForm from "./UploadForm";
import {Input} from 'antd'
 const {Search} = Input

function Marketplace() {
  
    const [pictures, setPictures] = useState([])
    

    useEffect( () => {
    fetch(`${process.env.REACT_APP_API_URL}/pictures`)
        .then(res => res.json())
        .then(data => setPictures(data))

    }, [])



    return (
    <div>
         <Search
      placeholder="input search text"
      //onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
        <CardMapper pictures = {pictures}/>
       
    </div>
  );
}

export default Marketplace;
