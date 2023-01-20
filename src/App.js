import { useState } from "react";

const ColorForm = (props) => {
    return (
        <div>
            <form>
                <label htmlFor="color">Ingrese un color: </label>
                <input type="text" name="color" />
            </form>
        </div>
    );
};

const Blocks = (props) => {
    const blocks = [];
    blocks.push(<Block color="red" />);
};

const Block = (props) => {
    return (
        <div
            style={{
                backgroundColor: props.color,
                width: "200px",
                height: "200px",
            }}
        ></div>
    );
};

const App = () => {
    const [colors, setColors] = useState([]);

    const agregarColor = (color) => {
        setColors([...colors, color]);
    };

    return <ColorForm agregarColor={agregarColor} />;
};

export default App;
