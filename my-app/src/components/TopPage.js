import React from "react";
import AntHeader from "./AntHeader";
import {Button} from 'antd'
function TopPage () {

    return (
        <div>
            <AntHeader/>
            <div className="landing">
            <h3>SELECT WHAT YOU'D LIKE:</h3>
            <Button key="1" type="primary">
          Upload a Pic
        </Button>
                <h3>Or</h3>
                <Button type="primary">View Marketplace</Button>
            </div>
        </div>
    )
}

export default TopPage;