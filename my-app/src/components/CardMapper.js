import React from "react";
import Card from "antd/lib/card/Card";
import Avatar from "antd/lib/avatar/avatar";
import './Card.css'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';


import Meta from "antd/lib/card/Meta"

//const {Meta}  = Card;
function CardMapper({pictures}) {

//produces cards content using array map
return (
    <div className="site-card-border-less-wrapper ui four column grid">
        <div className="row">
        {pictures.map((picture) => {
            console.log(picture)
        return <Card key = {picture.id} picture = {picture}
        bordered={true}
        style={{
          width: 300,
        }}
        cover={
          <img
            alt="oops"
            src={ picture.loc}
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
        >
             <Meta 
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title= {picture.name}
      description={picture.desc}
    />
        </Card>
    }
        )}
        </div>
    </div>
  );
}

export default CardMapper;

// code below is for my future reference

/*div className="ui four column grid">
      <p>Collection of Bots</p>
      <div className="row">
        {botsLister}
      </div>
    </div>*/


    
/*import { Avatar, Card } from 'antd';


const App = () => (
  <Card
    style={{
      width: 300,
    }}
   cover={
      <img
        alt="oops"
        src={ picture.loc}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
);

export default App;
*/