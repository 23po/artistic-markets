import React from "react";

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