import { useState } from 'react';

export function Layout({ children}) {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setUser({ nombre: 'UsuarioPrueba' }); 
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="bg-slate-300 text-white min-h-screen">
      <header className="bg-indigo-500 p-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold">
            Módulo de consulta y Registro de Usuarios al Sistema
          </div>
          <ul className="flex space-x-4 items-center">
            <li className="cursor-pointer" >Inicio</li>
            {user ? (
              <>
                <li className="cursor-pointer" onClick={handleLogout}>
                  Cerrar sesión
                </li>
                {user.nombre && (
                  <li className="flex items-center">
                    {user.nombre}
                  </li>
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
      <main className="flex-flexcol-col-3p-4 text-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {children}
        </div>
      </main>
    </div>
  );
}