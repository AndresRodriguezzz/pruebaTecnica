import React, { useState } from 'react';
import axios from 'axios';

export function Layout({ children }) {
  const [user, setUser] = useState(null); // Estado para manejar el usuario (sesión)
  const [showCreateUserForm, setShowCreateUserForm] = useState(false); // Estado para mostrar/ocultar el formulario de creación de usuario
  const [newUser, setNewUser] = useState({
    title: '',
    firstName: '',
    lastName: '',
    picture: '',
    gender: '',
    email: '',
    dateOfBirth: '',
    phone: '',
  }); // Estado para almacenar los datos del nuevo usuario

  const handleLogin = () => {
    setUser({ nombre: 'UsuarioPrueba' }); // Simulación de inicio de sesión
  };

  const handleLogout = () => {
    setUser(null); // Cerrar sesión
  };

  const handleCreateUser = async () => {
    try {
      const response = await axios.post(
        'https://dummyapi.io/data/v1/user?',
        {
          title: newUser.title,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          picture: newUser.picture,
          gender: newUser.gender,
          email: newUser.email,
          dateOfBirth: newUser.dateOfBirth,
          phone: newUser.phone,
        },
        {
          headers: {
            'app-id': '63473330c1927d386ca6a3a5',
          },
        }
      );
      console.log('Usuario creado:', response.data);
      setNewUser({
        title: '',
        firstName: '',
        lastName: '',
        picture: '',
        gender: '',
        email: '',
        dateOfBirth: '',
        phone: '',
      }); // Limpiar los datos del nuevo usuario después de la creación exitosa
    } catch (error) {
      console.error('Error al crear usuario:', error);
    } finally {
      setShowCreateUserForm(false); // Ocultar el formulario después de la creación o en caso de error
    }
  };

  const cancelCreateUser = () => {
    setShowCreateUserForm(false); // Cancelar la creación del usuario y ocultar el formulario
  };

  return (
    <div className="bg-slate-300 text-white min-h-screen">
      <header className="bg-indigo-500 p-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold">
            Módulo de consulta y Registro de Usuarios al Sistema
          </div>
          <ul className="flex space-x-4 items-center">
            <li className="cursor-pointer">Inicio</li>
            {user ? (
              <>
                <li className="cursor-pointer" onClick={handleLogout}>
                  Cerrar sesión
                </li>
                {user.nombre && (
                  <li className="flex items-center">{user.nombre}</li>
                )}
              </>
            ) : (
              <li className="cursor-pointer" onClick={handleLogin}>
                Iniciar sesión
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main className="flex-flexcol-col-3p-4 text-black items-center">
        <br />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white ml-4 font-bold py-2 px-4 rounded"
          onClick={() => setShowCreateUserForm(true)}
        >
          Crear usuario
        </button>
        {showCreateUserForm && (
          <div className="mt-4 max-w-md mx-auto bg-white rounded overflow-hidden shadow-lg p-6">
            <h2 className="text-lg font-bold mb-4">Nuevo Usuario</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Título:
                </label>
                <input
                  type="text"
                  value={newUser.title}
                  onChange={(e) =>
                    setNewUser({ ...newUser, title: e.target.value })
                  }
                  className="border rounded w-full py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Nombre:
                </label>
                <input
                  type="text"
                  value={newUser.firstName}
                  onChange={(e) =>
                    setNewUser({ ...newUser, firstName: e.target.value })
                  }
                  className="border rounded w-full py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Apellido:
                </label>
                <input
                  type="text"
                  value={newUser.lastName}
                  onChange={(e) =>
                    setNewUser({ ...newUser, lastName: e.target.value })
                  }
                  className="border rounded w-full py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Imagen URL:
                </label>
                <input
                  type="text"
                  value={newUser.picture}
                  onChange={(e) =>
                    setNewUser({ ...newUser, picture: e.target.value })
                  }
                  className="border rounded w-full py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Género:
                </label>
                <input
                  type="text"
                  value={newUser.gender}
                  onChange={(e) =>
                    setNewUser({ ...newUser, gender: e.target.value })
                  }
                  className="border rounded w-full py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Correo Electrónico:
                </label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                  className="border rounded w-full py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Fecha de Nacimiento:
                </label>
                <input
                  type="date"
                  value={newUser.dateOfBirth}
                  onChange={(e) =>
                    setNewUser({ ...newUser, dateOfBirth: e.target.value })
                  }
                  className="border rounded w-full py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Teléfono:
                </label>
                <input
                  type="text"
                  value={newUser.phone}
                  onChange={(e) =>
                    setNewUser({ ...newUser, phone: e.target.value })
                  }
                  className="border rounded w-full py-2 px-3"
                />
              </div>
              <button
                type="button"
                onClick={handleCreateUser}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Crear
              </button>
              <button
                type="button"
                onClick={cancelCreateUser}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancelar
              </button>
            </form>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-center w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
