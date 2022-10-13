import React from "react";
import Card from "antd/lib/card/Card";
import Avatar from "antd/lib/avatar/avatar";
import './Card.css'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {Button, Row, Col} from 'antd';

import Meta from "antd/lib/card/Meta"

//const {Meta}  = Card;
function CardMapper({pictures}) {

//produces cards content using array map
return (
  <Col>
    <Row>
        {pictures.map((picture) => {
            console.log(picture)
        return <Card key = {picture.id} picture = {picture}
        bordered={true}
        style={{
          width: 150,
          height:272,
          
        }}
        cover={
          <img
            alt="oops"
            src={ picture.loc}
            
            
          />
        }
        
        actions={
          
          [
          
          <Button size={"small"} key = "2" type = "primary" style = {{objectFit: 'contain'}} ghost danger>
            Buy
          </Button>
        
          //<SettingOutlined key="setting" />,
          //<EditOutlined key="edit" />,
          //<EllipsisOutlined key="ellipsis" />,
        ]}
        >
             <Meta  style = {{width: 100, height: 22,}}
      //avatar={<Avatar style = {{width: 50, height: 50,}} src="https://joeschmoe.io/api/v1/random" />}
      description={picture.name}

    />
        </Card>
    }
        )}
        </Row>
    </Col>
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