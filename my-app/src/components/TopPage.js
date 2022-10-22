import React from "react";
import AntHeader from "./AntHeader";
import AntCarousel from "./AntCarousel";
import Footer from "./Footer";
import {Button} from 'antd'
import { useNavigate } from "react-router-dom";


function TopPage ({handleClick}) {

   const buttonStyle = {
        background: 'red'
    }

    const navigate = useNavigate();
    
    //implementing programmatic navigation for uploading
    function handleUpload () {
        navigate("/uploadform")
    }
    //programmatic nav for going to marketplace
    function handleClick () {
        navigate("/marketplace");
    }

    return (
        <div>
            <AntHeader/>
            <AntCarousel/>
            <Button key="1" style = {buttonStyle} type="primary" onClick = {handleUpload}>
          Upload a Pic
            </Button>
            
                
    
            <Footer />
        </div>
    )
}

export default TopPage;

/*
<Button type="primary" onClick = {handleClick}>View Marketplace</Button>
*/