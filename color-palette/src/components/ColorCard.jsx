const ColorCard = ({ color, colorPalette, setColorPalette }) => {
  return (
    <div className="card">
      <div className="card-header">
        <p className="paragraph" style={{ color: color.valor }}>
          {color.nombre}
        </p>
      </div>
      <div className="card-body">
        <div
          style={{
            backgroundColor: color.valor,
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            margin: "0 auto",
          }}
        ></div>
      </div>
      <div className="container-btn">
        <button
          type="submit"
          className="btn"
          style={{
            backgroundColor: color.valor,
          }}
          onClick={() => {
            const newColorPalette = colorPalette.filter(
              (colorPalette) => colorPalette.nombre !== color.nombre
            );
            setColorPalette(newColorPalette);
            localStorage.setItem(
              "colorPalette",
              JSON.stringify(newColorPalette)
            );
          }}
        >
          Borrar
        </button>
      </div>
    </div>
  );
};

export default ColorCard;
