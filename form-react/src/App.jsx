import { useState } from "react";
import "./App.css";

function App() {
  const [formValues, setFormValues] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formValues.nombre &&
      formValues.apellido &&
      formValues.dni &&
      formValues.email
    ) {
      alert("Datos Enviados");
      setFormValues({
        nombre: "",
        apellido: "",
        dni: "",
        email: "",
      });
    } else {
      alert("Debe Completar los Datos");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={formValues.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            name="apellido"
            id="apellido"
            value={formValues.apellido}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="dni">Dni</label>
          <input
            type="number"
            name="dni"
            id="dni"
            value={formValues.dni}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </>
  );
}

export default App;
