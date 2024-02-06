export function UserCard({ id, firstName, lastName, title, picture, onDelete, onEdit, onView }) {
    return (
      <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img className="w-full h-48 object-cover object-center" src={picture} alt={`${firstName} ${lastName}`} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{`${title} ${firstName} ${lastName}`}</div>
          <p className="text-gray-700 text-base">ID: {id}</p>
        </div>
        <div className="px-6 py-4">
          <button
            onClick={() => onDelete(id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Eliminar
          </button>
          <button
            onClick={onEdit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Editar
          </button>
          <button
            onClick={onView}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Observar
          </button>
        </div>
      </div>
    );
}
  