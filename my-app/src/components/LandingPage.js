import React, {useEffect, useState} from "react";
import AvatarCollection from "./AvatarCollection";
import AvatarCard from "./AvatarCard";
import AddAvatarForm from "./AddAvatarForm";

function LandingPage() {
  
    const [avatars, setAvatars] = useState([])
    
    useEffect( () => {
    fetch("http://localhost:3000/Avatars")
        .then(res => res.json())
        .then(data => setAvatars(data))

    }, [])

    return (
    <div>
         <AddAvatarForm/>
        <AvatarCollection avatars = {avatars}/>
       </div>
  );
}

export default LandingPage;
