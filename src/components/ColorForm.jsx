import { useState } from "react";

const ColorForm = (props) => {
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.sendColor(colors);
        console.log(`Colores desde ColorForm: ${colors}`);
        setColors("");
        props.sendSize(sizes);
        console.log(`Tamaños desde ColorForm: ${sizes}`);
        setSizes(0);
    };

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="color">Ingrese un color: </label>
                <input
                    type="text"
                    name="color"
                    onChange={(e) => setColors(e.target.value)}
                    value={colors}
                />
                <label htmlFor="size">Ingrese un tamaño: </label>
                <input
                    type="text"
                    name="size"
                    onChange={(e) => setSizes(e.target.value)}
                    value={sizes}
                />
                <button type="submit">Agregar</button>
            </form>
        </div>
    );
};

export default ColorForm;
