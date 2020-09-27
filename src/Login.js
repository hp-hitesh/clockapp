import React, { useState } from 'react';
import {
  Redirect,
  withRouter
} from 'react-router-dom';

import './login.css';


const Login = props => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  
  const [isAdminLogin, setIsAdminLogin] = useState(false);


  const handlechange = (val, name) => {
    if (name === 'user') {
      setUser(val);
    } else if (name === 'pass') {
      setPass(val);
    }

    console.log(val);
  };

  const login = e => {
    e.preventDefault();
    if (user === 'admin' && pass === 'admin_123') {
      setIsAdminLogin(true);
    }  else {
      alert('Incorrect credentials, please try again.');
    }
  };
  return (
    <React.Fragment>
 

   <div className = "login_card">
      <form onSubmit={login} className="form">
          
            <h3 className="logo">User login</h3>
           
           <label> User Name:</label>
           <input type="text"          
              onChange={event => handlechange(event.target.value, 'user')}/>       
            <br />
            <br />

           <label>Password  : </label>
           <input type="password"           
             onChange={event => handlechange(event.target.value, 'pass')}/>
            <br />
            <br />


    

            
     <button type="submit" className="btn1" onClick={e => login(e)}>Login </button>
        <button type="reset"className="btn2" value="Reset">Reset</button>

         
    
       
       </form>
    </div>
      {isAdminLogin && <Redirect to="/home" />}
    </React.Fragment>
  );
};

export default withRouter(Login);
