import React from "react";
import AntHeader from "./AntHeader";
import AntCarousel from "./AntCarousel";
import Footer from "./Footer";
import {Button} from 'antd'
import { useNavigate } from "react-router-dom";


function TopPage ({handleClick}) {
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
            <div className="landing">
            <Button key="1" type="primary" onClick = {handleUpload}>
          Upload a Pic
            </Button>
            <h3>Or</h3>
                <Button type="primary" onClick = {handleClick}>View Marketplace</Button>
            </div>
            <Footer />
        </div>
    )
}

export default TopPage;