const ColorCard = ({ color }) => {
  return (
    <div className="card">
      <div className="card-header">
        <p className="paragraph">{color.nombre}</p>
      </div>
      <div className="card-body">
        <div
          style={{
            backgroundColor: color.valor,
            width: "200px",
            height: "150px",
            margin: "0 auto",
          }}
        ></div>
      </div>
      <div className="container-btn">
        <button type="submit" className="btn">
          Borrar
        </button>
      </div>
    </div>
  );
};

export default ColorCard;
