// Componente UserInfo para mostrar detalles del usuario
export function UserInfo({ user, onClose }) {
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
          {/* Título del modal con el nombre del usuario */}
          <h2 className="text-2xl font-bold mb-4">
            Detalles de {user.title} {user.firstName} {user.lastName}
          </h2>
          {/* Mostrar la fotografía del usuario */}
          <strong>Fotografía:</strong>
          <img
            className="w-full h-64 object-cover object-center mb-4"
            src={user.picture}
            alt={`${user.firstName} ${user.lastName}`}
          />
          {/* Mostrar información detallada del usuario */}
          <p>
            <strong>ID:</strong> {user.id}
          </p>
          <p>
            <strong>Título:</strong> {user.title}
          </p>
          <p>
            <strong>Nombres:</strong> {user.firstName}
          </p>
          <p>
            <strong>Apellidos:</strong> {user.lastName}
          </p>
          <p>
            <strong>Género:</strong> {user.gender}
          </p>
          <p>
            <strong>Correo Electrónico:</strong> {user.email}
          </p>
          <p>
            <strong>Fecha de Nacimiento:</strong> {user.dateOfBirth}
          </p>
          <p>
            <strong>Teléfono:</strong> {user.phone}
          </p>
          {/* Botón para cerrar el modal */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    );
}
  