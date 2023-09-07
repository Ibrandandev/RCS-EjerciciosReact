import ColorCard from "./ColorCard";
import "../css/color-list.css";

const ColorList = ({ colorPalette, setColorPalette }) => {
  return (
    <div className="row">
      {colorPalette.map((color, index) => {
        return (
          <ColorCard
            color={color}
            colorPalette={colorPalette}
            setColorPalette={setColorPalette}
            key={index + 1}
          />
        );
      })}
    </div>
  );
};

export default ColorList;
