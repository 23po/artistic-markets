import React, {useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";
import AvatarCollection from "./AvatarCollection";
//import AvatarCard from "./AvatarCard";
import AddAvatarForm from "./AddAvatarForm";

function Marketplace() {
  
    const [pictures, setPictures] = useState([])
    const [formData, setFormData] = useState([])

    useEffect( () => {
    fetch(`${process.env.REACT_APP_API_URL}/pictures`)
        .then(res => res.json())
        .then(data => setPictures(data))

    }, [])

function handleChange (e) {
    
    setFormData({
        ...formData,
        [e.target.name]: e.target.value 
    })


    //setAvatars(avatars.map(avatar => avatar === avatarTarget ? {...avatar, new: true} : avatar))     

}    

function handleSubmit () {
        fetch("http://localhost:3000/pictures", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }, ProgressEvent => {
            console.log('Upload Progress:' + Math.round(ProgressEvent.loaded/ProgressEvent.total * 100) + '%' )
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
    <div>
        <div className="ui large fluid icon input">
        <input
        //value = {search}  
        type="text"
        placeholder="Search"       
        //onChange={e => onSearchChange(e.target.value)}
      />
       <i className="circular search link icon"></i>
        </div>
        <AvatarCollection pictures = {pictures}/>
    </div>
  );
}

export default Marketplace;
