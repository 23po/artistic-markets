import React from "react";

function AddAvatarForm({handleChange, handleSubmit}) {
  
 
    
  return (
        <div className="ui segment">
      <form className="ui form">
        <div className="inline fields" >
          <input type="text" name="name" placeholder="name" onBlur ={handleChange}/>
          <input type="text" name="description" placeholder="description" onBlur ={handleChange}/>
          <input type="text" name="url" placeholder="url" onBlur = {handleChange}/>
          <input type="file"name="image" onChange={handleChange}/>
        </div>
        <button onClick = {handleSubmit}>
          Upload
        </button>
      </form>
    </div>
    );
}
export default AddAvatarForm