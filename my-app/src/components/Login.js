import React from "react";
import '../Login.css';

//this component was not integrated to MVP
function Login() {

  //const [logins SetLogins] = useState([])
  


  return (
    <div classname = "login-wrapper">
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;