import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './App.css';


function Userlist(){
    const [users , setUsers]= useState([]) ;
    useEffect(()=>
    {
       axios
       .get('https://jsonplaceholder.typicode.com/users')
       .then((response) => setUsers(response.data))
      
    },[]);

      return (
      <div className="App">
          <header className="App-header">
            <div>
               <h1>Welcome To Users Profile</h1>
               <ul className="users-list">
                  {users.map(user=>
                  <li className="card"  key= {user.id}>
                  Name: {user.name}<br/>
                  Email: {user.email}</li>) }
               </ul>

            </div>
          </header>
       </div>
);

}
export default  Userlist  ;