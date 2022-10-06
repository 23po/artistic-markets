import React, {useEffect, useState} from "react";
import AvatarCollection from "./AvatarCollection";
import AvatarCard from "./AvatarCard";
import AddAvatarForm from "./AddAvatarForm";

function LandingPage() {
  
    const [avatars, setAvatars] = useState([])
    const [formData, setFormData] = useState([])

    useEffect( () => {
    fetch("http://localhost:3000/Avatars")
        .then(res => res.json())
        .then(data => setAvatars(data))

    }, [])

function handleChange (e) {
    
    setFormData({
        ...formData,
        [e.target.name]: e.target.value 
    })


    //setAvatars(avatars.map(avatar => avatar === avatarTarget ? {...avatar, new: true} : avatar))     

}    

function handleSubmit () {
        fetch("http://localhost:3000/Avatars", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
    <div>
         <AddAvatarForm handleChange = {handleChange} handleSubmit = {handleSubmit}/>
        <AvatarCollection avatars = {avatars}/>
       </div>
  );
}

export default LandingPage;
