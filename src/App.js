import { useState } from "react";
import ColorForm from "./components/ColorForm";
import Blocks from "./components/Blocks";
import "./App.css";

const App = () => {
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    console.log(`Colores desde App: ${colors}`);

    const addColor = (color) => {
        setColors([...colors, color]);
    };

    const addSize = (size) => {
        setSizes([...sizes, size]);
    };

    return (
        <div className="container">
            <ColorForm sendColor={addColor} sendSize={addSize} />
            <Blocks colors={colors} sizes={sizes} />
        </div>
    );
};

export default App;
