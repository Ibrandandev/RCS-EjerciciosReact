import ColorCard from "./ColorCard";
import "../css/color-list.css";

const colors = [
  { nombre: "Nombre Color", valor: "#361ba1" },
  { nombre: "Nombre Color", valor: "#ffa382" },
  { nombre: "Nombre Color", valor: "#f06e9c" },
];

const ColorList = () => {
  return (
    <div className="row">
      {colors.map((color, index) => (
        <ColorCard color={color} key={index + 1} />
      ))}
    </div>
  );
};

export default ColorList;
