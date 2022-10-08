import React, {useEffect, useState} from "react";
//import AvatarCard from "./AvatarCard";
import AddAvatarForm from "./AddAvatarForm";
import Card from "antd/lib/card/Card";
import './Card.css'

function AvatarCollection({pictures}) {
  
return (
    <div className="site-card-border-less-wrapper ui four column grid">
        <div className="row">
        {pictures.map((picture) => {
            console.log(picture)
        return <Card key = {picture.id} picture = {picture}
        bordered={false}
        style={{
          width: 300,
        }}>
            <p>Name: {picture.name}</p>
      <img src = {picture.loc}/>
      <span>description: {picture.desc}</span>
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
