
import { useState } from "react";

export function MyForm({initialIsAuthenticated=true}) {

  const [isAuthenticated, setAuthentificated] = useState(initialIsAuthenticated);

  const authClick = () => {
    if(values.password != '' && values.email != ''){
      setAuthentificated(!isAuthenticated);
    }else{
      alert('Se encuentra algún campo vacio');
    }
  }

  const signOut = () => {
    setAuthentificated(!isAuthenticated);
  }

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  function handleChange(evt) {

    const { target } = evt;

    const { name, value } = target;

    const newValues = {
      ...values,
      [name]: value,
    };

    setValues(newValues);
  }
  
  if(isAuthenticated === true){
    return (
      <div className="grid grid-cols-1 content-center">
        <form className="mx-auto max-w-md space-y-3" onSubmit={handleSubmit}>
          <div className="">
            <label className="block text-sm font-bold text-gray-700" htmlFor="email">
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700" htmlFor="password">
              Contraseña:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="text-center">
            <button 
            className="bg-red-500 text-white rounded-lg px-4 py-2" 
            type="submit"
            onClick={authClick}>
              Ingresar
            </button>
          </div>
        </form>
      </div>
    );
  }else{
    return(
      <>
        <h1>Bienvenido</h1>
        <button
         onClick={signOut}
         className="bg-red-500 text-white rounded-lg px-4 py-2">
          Salir
        </button>
      </>
    )
  }

}

