import React, {useEffect, useState} from "react";
import AvatarCard from "./AvatarCard";
import AddAvatarForm from "./AddAvatarForm";

function AvatarCollection({avatars}) {
  
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

export default AvatarCollection;