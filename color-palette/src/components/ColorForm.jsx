import "../css/color-form.css";

class Color {
  constructor(nombre, valor) {
    this.nombre = nombre;
    this.valor = valor;
  }
}

const ColorForm = () => {
  return (
    <div>
      <form className="color__form">
        <legend className="legend">Administrar colores</legend>
        <div className="input-group">
          <div className="input-color">
            <input type="color" className="input" name="" id="" />
          </div>
          <div className="input-text">
            <input
              type="text"
              className="input"
              placeholder="Ingrese un color ej Blue"
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
