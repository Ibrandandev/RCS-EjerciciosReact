import { useState } from "react";
import "../css/color-form.css";

class Color {
  constructor(nombre, valor) {
    this.nombre = nombre;
    this.valor = valor;
  }
}

const ColorForm = () => {
  const [formValues, setFormValues] = useState({
    nombre: "",
    valor: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValues.nombre) {
      alert("Debe ingresar el nombre");
    }
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form className="color__form" onSubmit={handleSubmit}>
        <legend className="legend">Administrar colores</legend>
        <div className="input-group">
          <div className="input-color">
            <input
              type="color"
              className="input"
              name="valor"
              id=""
              value={formValues.valor}
              onChange={handleChange}
            />
          </div>
          <div className="input-text">
            <input
              type="text"
              className="input"
              placeholder="Ingrese un color ej Blue"
              name="nombre"
              value={formValues.nombre}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="container-btn">
          <button type="submit" className="btn">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ColorForm;
