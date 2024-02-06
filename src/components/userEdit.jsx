import { useState } from "react";
import axios from 'axios';

export function UserEdit({ user, onUpdateUser, onClose }) {
  // Estado local para los datos del usuario editado
  const [editedUser, setEditedUser] = useState({ ...user });

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Actualizar el estado local con los nuevos valores del usuario editado
    setEditedUser({ ...editedUser, [name]: value });
  };

  // Manejar el envío del formulario para actualizar el usuario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Enviar una solicitud PUT para actualizar el usuario en el servidor
      const response = await axios.put(
        `https://dummyapi.io/data/v1/user/${user.id}`,
        editedUser,
        {
          headers: {
            'app-id': '63473330c1927d386ca6a3a5',
          },
        }
      );
      
      console.log('Usuario actualizado:', response.data);
      // Actualizar el estado local con la nueva información del usuario
      onUpdateUser(editedUser);
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
    } finally {
      // Cerrar el modal después de la actualización
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white max-w-md p-8 rounded shadow-lg">
        {/* Botón para cerrar el modal */}
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
          onClick={onClose}
        >
          Cerrar
        </button>
        {/* Título del modal */}
        <h2 className="text-2xl font-bold mb-4">
          Editar Detalles de {user.title} {user.firstName} {user.lastName}
        </h2>
        {/* Formulario de edición */}
        <form onSubmit={handleSubmit}>
          {/* Campo para editar el título */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
              Título:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={editedUser.title}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3"
            />
          </div>
          {/* Nuevo campo para editar el correo electrónico */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Correo Electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={editedUser.email}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3"
            />
          </div>
          {/* Botones para guardar cambios y cerrar el modal */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mr-2"
          >
            Guardar Cambios
          </button>
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={onClose}
          >
            Cerrar
          </button>
        </form>
      </div>
    </div>
  );
}
