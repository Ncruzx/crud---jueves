import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    user.id = Date.now();
    setUsers([...users, user]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
    setEditingUser(null);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const editUser = (user) => {
    setEditingUser(user);
  };

  return (
    <div className="container">
      <h1>USUARIOS</h1>
      <UserForm onSave={editingUser ? updateUser : addUser} editingUser={editingUser} />
      <UserList users={users} onEdit={editUser} onDelete={deleteUser} />
    </div>
  );
}

export default App;
