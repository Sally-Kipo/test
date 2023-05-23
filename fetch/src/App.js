import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="wrapper">
      {users.length > 0 && (
        <>
          <div className="heading">
            <span>Customer Name</span>
            <span>Company</span>
            <span>Phone Number</span>
            <span>Email</span>
            <span>Street</span>
          </div>
          {users.map(user => (
            <div className="container" key={user.id}>
              <span>{user.name}</span>
              <span>{user.company.name}</span>
              <span>{user.phone}</span>
              <span>{user.email}</span>
              <span>{user.address.street}</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default App;
