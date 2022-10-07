import { Card } from 'antd';
import React from 'react';

const AvatarCard = ({avatar}) => (
  <div className="site-card-border-less-wrapper">
    <Card
      title="Card title"
      bordered={false}
      style={{
        width: 300,
      }}
    >
      <p>Name: {avatar.name}</p>
      <p>Gender: {avatar.gender}</p>
      <img alt="oh no!" src={avatar.Avatar} />
    </Card>
  </div>
);


export default AvatarCard;

/*import React from "react";

function AvatarCard ({avatar}) {
console.log(avatar)
console.log (avatar.id)    

    return (
        <div>
            <div key = {avatar.id}>
            
                <div>
                    <h3>Name: {avatar.name}</h3>
                </div>
                <div>
                    <h3>Gender: {avatar.gender}</h3>
                </div>
                <div>
                    <img alt="oh no!" src={avatar.Avatar} />
                </div>
            </div>
        </div>
    )

}
export default AvatarCard
*/