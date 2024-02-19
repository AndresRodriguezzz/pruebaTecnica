import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { UserCard } from './components/userCard';
import { UserInfo } from './components/userinfo';
import { UserEdit } from './components/userEdit';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // Estado para rastrear si se está editando
  const [editMode, setEditMode] = useState(false); // Estado para rastrear si está en modo de edición
  const [selectedUser, setSelectedUser] = useState(null);
 const [dateSet, setDate] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyapi.io/data/v1/user?', {
          headers: {
            'app-id': '63473330c1927d386ca6a3a5',
          },
        });
        setUsers(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const openEditModal = (user) => {
    setSelectedUser(user);
    setIsEditing(true);
    setEditMode(!editMode); // Cambiar el modo de edición al abrir el modal de edición
  };

  const closeEditModal = () => {
    setSelectedUser(null);
    setIsEditing(!isEditing); // Cambiar el estado de edición al cerrar el modal
    setEditMode(!editMode); // Cambiar el modo de edición al cerrar el modal
  };

  const updateUser = (editedUser) => {
    closeEditModal();
  };

  return (
    <Layout>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          id={user.id}
          firstName={user.firstName}
          lastName={user.lastName}
          picture={user.picture}
          title={user.title}
          onView={() => setSelectedUser(user)}
          onEdit={() => {
            setEditMode(true);
            setSelectedUser(user);
          }}
        />
      ))}
      {selectedUser && (
        editMode ? (
          <UserEdit
            user={selectedUser}
            onUpdateUser={openEditModal} // Al actualizar, abrir el modal de edición
            onClose={updateUser}
          />
        ) : (
          <UserInfo
            user={selectedUser}
            onClose={() => setSelectedUser(null)}
          />
        )
      )}
    </Layout>
  );
}

export default App;
