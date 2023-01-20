const Block = (props) => {
    console.log(`Colores desde Block: ${props.color}`);
    console.log(`Tamaños desde Block: ${props.size}`);
    return (
        <div
            style={{
                backgroundColor: props.color,
                width: props.size + "px",
                height: props.size + "px",
            }}
        ></div>
    );
};

export default Block;
