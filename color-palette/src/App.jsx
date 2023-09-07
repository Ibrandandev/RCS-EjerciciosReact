import { useState } from "react";
import ColorForm from "./components/ColorForm";
import ColorList from "./components/ColorList";
import "./App.css";

function App() {
  const colorPaletteFromStorage =
    JSON.parse(localStorage.getItem("colorPalette")) || [];
  const [colorPalette, setColorPalette] = useState(colorPaletteFromStorage);

  return (
    <>
      <ColorForm
        colorPalette={colorPalette}
        setColorPalette={setColorPalette}
      />
      <ColorList
        colorPalette={colorPalette}
        setColorPalette={setColorPalette}
      />
    </>
  );
}

export default App;
