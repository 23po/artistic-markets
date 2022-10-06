import React from "react";

function AddAvatarForm() {

    return (
        <div className="ui segment">
      <form className="ui form">
        <div className="inline fields">
          <input type="text" name="name"/>
          <input type="text" name="gender" placeholder="gender"/>
          <input type="url" name="url" placeholder="url"/>
        </div>
        <button>
          Add Avatar
        </button>
      </form>
    </div>
    );
}
export default AddAvatarForm