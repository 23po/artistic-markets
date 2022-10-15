import React, {useState, useEffect} from 'react'
import { Carousel, Row, Col, Card } from 'antd';
import './AntCarousel.css'
import { fixControlledValue } from 'antd/lib/input/Input';

const contentStyle = {
    height: '300px',
    marginLeft: '500px',
    width: '300px',
    textAlign: 'center',
    lineHeight: '160px',
    
  };

  const carouselContainer = {
    background: 'aliceblue',
  }

  const contentStyleTwo = {
    height: '160px',
    marginTop: '200px',
    marginLeft: '100px',
    lineHeight: '160px'
    
  }

  

function AntCarousel() {
    //const [joe, setJoe] = useState([]);

    //fetch("https://joeschmoe.io/api/v1/random",{ mode: 'no-cors'})
    //.then (res => res.json())
    //.then (data => setJoe(data));

  return (
<div class="container">
  <div class="box">
    <img src="https://source.unsplash.com/1000x800"/>
    <span>CSS</span>
  </div>
  <div class="box">
    <img src="https://source.unsplash.com/1000x802"/>
    <span>Image</span>
  </div>
  <div class="box">
    <img src="https://source.unsplash.com/1000x804"/>
    <span>Hover</span>
  </div>
  <div class="box">
    <img src="https://source.unsplash.com/1000x806"/>
    <span>Effect</span>
  </div>
</div>
  )
}

export default AntCarousel



/*
<div style = {carouselContainer}>
    
<Carousel autoplay>
<div>
<img style = {contentStyle} src = "https://www.pngmart.com/files/22/African-Art-PNG-Isolated-HD.png"/>
</div>
<div>
 <img style = {contentStyle} src = "https://www.pngmart.com/files/22/African-Art-PNG-Photo.png"/>
</div>
<div>
 <img style = {contentStyle} src = "https://www.pngmart.com/files/22/African-Art-PNG-Picture.png"/>
</div>  
</Carousel>
</div>
*/