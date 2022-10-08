import React, {useEffect, useState} from "react";
//import AvatarCard from "./AvatarCard";
import AddAvatarForm from "./AddAvatarForm";
import Card from "antd/lib/card/Card";
import './Card.css'

function AvatarCollection({avatars}) {
  
return (
    <div className="site-card-border-less-wrapper ui four column grid">
        <div className="row">
        {avatars.map((avatar) => {
            console.log(avatar)
        return <Card key = {avatar.id} avatar = {avatar}
        bordered={false}
        style={{
          width: 300,
        }}>
            <p>Name: {avatar.name}</p>
      <p>Gender: {avatar.gender}</p>
      <img src = {avatar.Avatar}/>
        </Card>
    }
        )}
        </div>
    </div>
  );
}

export default AvatarCollection;

/*div className="ui four column grid">
      <p>Collection of Bots</p>
      <div className="row">
        {botsLister}
      </div>
    </div>*/
