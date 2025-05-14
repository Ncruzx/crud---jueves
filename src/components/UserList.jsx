import React from 'react';

function UserList({ users, onEdit, onDelete }) {
  return (
    <div>
      <h2>Usuarios Registrados</h2>
      {users.length === 0 ? (
        <p className='p'>No hay usuarios registrados.</p>
      ) : (
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id} className="user-item">
              <div className="user-item-info">
                <strong>{user.name}</strong> - {user.email}
              </div>
              <div className="action-buttons">
                <button className="edit" onClick={() => onEdit(user)}>Editar</button>
                <button className="delete" onClick={() => onDelete(user.id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
