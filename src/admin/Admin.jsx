import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Admin() {
  const [users, setUsers] = useState([
  ]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let token = localStorage.getItem("token");
        const response = await axios.get('http://localhost:8000/todos/all', {
          headers: { Authorization: `Bearer ${token}` },

        });
        setUsers(response.data.users);
      } catch (error) {
        console.error(' error users:', error);
      }
    };

    fetchUsers();
  }, []); 

  return (
    <div className="flex flex-col gap-4">
      {users.map((user) => (
        <div key={user.id} className="flex flex-col">
          <span>Name: {user.fname}</span>
          <span>Username: {user.username}</span>
          <span>password: {user.password}</span>
          <span>Email: {user.email ? user.email : 'No email provided'}</span>
          <span>Role: {user.role}</span>
        </div>
      ))}
    </div>
  );
}