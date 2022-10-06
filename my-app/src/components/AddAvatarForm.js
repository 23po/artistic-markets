import React from "react";

function AddAvatarForm({handleChange, handleSubmit}) {

    return (
        <div className="ui segment">
      <form className="ui form">
        <div className="inline fields" >
          <input type="text" name="name" placeholder="name" onBlur ={handleChange}/>
          <input type="text" name="gender" placeholder="gender" onBlur = {handleChange}/>
          <input type="text" name="url" placeholder="url" onBlur = {handleChange}/>
        </div>
        <button onClick = {handleSubmit}>
          Add Avatar
        </button>
      </form>
    </div>
    );
}
export default AddAvatarForm