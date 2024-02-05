
export function Layout({children}){
  
  return (
    <div className="bg-gray-200 p-4 md:p-8 lg:p-12 xl:p-16 h-screen">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Interfaz</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-md grid grid-cols-1">
            {children}
          </div>
          <div className="bg-white p-4 shadow-md">
            adadadad
          </div>
          <div className="bg-white p-4 shadow-md">
            adadadad
          </div>
        </div>
      </div>
    </div>
  );
}