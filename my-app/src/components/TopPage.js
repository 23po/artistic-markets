import React from "react";
import AntHeader from "./AntHeader";
import {Button} from 'antd'
import UploadForm from "./UploadForm";
import { useNavigate } from "react-router-dom";


function TopPage ({handleClick}) {
    const navigate = useNavigate();
    
    function handleUpload () {
        navigate("/uploadform")
    }

    function handleClick () {
        //console.log("clicked")
        navigate("/marketplace");
    }

    return (
        <div>
            <AntHeader/>
            <div className="landing">
            <h3>SELECT WHAT YOU'D LIKE:</h3>
            <Button key="1" type="primary" onClick = {handleUpload}>
          Upload a Pic
        </Button>
                <h3>Or</h3>
                <Button type="primary" onClick = {handleClick}>View Marketplace</Button>
            </div>
        </div>
    )
}

export default TopPage;