import React, {useEffect, useState} from "react";
import AvatarCard from "./AvatarCard";

function LandingPage() {
  
    const [avatars, setAvatars] = useState([])
    
    useEffect( () => {
    fetch("http://localhost:3000/Avatars")
        .then(res => res.json())
        .then(data => setAvatars(data))

    }, [])

    return (
    <div>
        {avatars.map((avatar) => {
            console.log(avatar)
        return <AvatarCard key = {avatar.id} avatar = {avatar}/>
    }
        )}
    </div>
  );
}

export default LandingPage;
