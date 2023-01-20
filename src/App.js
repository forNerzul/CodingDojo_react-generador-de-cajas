import { useState } from "react";

const ColorForm = (props) => {
    const [colors, setColors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.sendColor(colors);
        console.log(`Colores desde ColorForm: ${colors}`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Ingrese un color: </label>
                <input
                    type="text"
                    name="color"
                    onChange={(e) => setColors(e.target.value)}
                    value={colors}
                />
                <button type="submit">Agregar</button>
            </form>
        </div>
    );
};

const Blocks = ({ colors }) => {
    console.log(`Colores desde Blocks: ${colors}`);
    let listItems = colors.map((color) => {
        console.log(`Colores desde map: ${color}`);
        return <Block color={color} />;
    });
    return listItems;
};

const Block = ({ color }) => {
    console.log(`Colores desde Block: ${color}`);
    return (
        <div
            style={{
                backgroundColor: color,
                width: "100px",
                height: "100px",
            }}
        ></div>
    );
};

const App = () => {
    const [colors, setColors] = useState([]);
    console.log(`Colores desde App: ${colors}`);

    const addColor = (color) => {
        setColors([...colors, color]);
    };

    return (
        <div>
            <ColorForm sendColor={addColor} />
            <Blocks colors={colors} />
        </div>
    );
};

export default App;
