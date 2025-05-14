import React, { useEffect, useState } from 'react';

function UserForm({ onSave, editingUser }) {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    } else {
      setUser({ name: '', email: '' });
    }
  }, [editingUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.email) return alert('Completa todos los campos');
    onSave(user);
    setUser({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingUser ? 'Editar Usuario' : 'Agregar Usuario'}</h2>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={user.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Correo"
        value={user.email}
        onChange={handleChange}
      />
      <button type="submit">{editingUser ? 'Actualizar' : 'Crear'}</button>
    </form>
  );
}

export default UserForm;
