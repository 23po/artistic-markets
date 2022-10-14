import React, {useState, useEffect} from 'react'
import { Carousel, Row, Col, Card } from 'antd';
import './AntCarousel.css'
import { fixControlledValue } from 'antd/lib/input/Input';
const contentStyle = {
    height: '100px',
    textAlign: 'center',
    lineHeight: '100px',
    background: 'aliceblue',
  };

  

function AntCarousel() {
    //const [joe, setJoe] = useState([]);

    //fetch("https://joeschmoe.io/api/v1/random",{ mode: 'no-cors'})
    //.then (res => res.json())
    //.then (data => setJoe(data));

  return (
    <Col>
      <Row>
   <Carousel autoplay style ={contentStyle}>
   <div>
  <img src = "https://www.pngmart.com/files/22/African-Art-PNG-Isolated-HD.png"/>
   </div>
   <div>
     <img src = "https://www.pngmart.com/files/22/African-Art-PNG-Photo.png"/>
   </div>
   <div>
     <img src = "https://www.pngmart.com/files/22/African-Art-PNG-Picture.png"/>
   </div>
 </Carousel>
 </Row>
 <Row>
 <Carousel autoplay style ={contentStyle}>
   <div>
  <img src = "https://www.pngmart.com/files/22/African-Art-PNG-Isolated-HD.png"/>
   </div>
   <div>
     <img src = "https://www.pngmart.com/files/22/African-Art-PNG-Photo.png"/>
   </div>
   <div>
     <img src = "https://www.pngmart.com/files/22/African-Art-PNG-Picture.png"/>
   </div>
 </Carousel>
 </Row>
  </Col>
  )
}

export default AntCarousel