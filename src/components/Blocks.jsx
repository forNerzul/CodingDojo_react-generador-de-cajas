import Block from "./Block";

const Blocks = (props) => {
    console.log(props);
    console.log(`Colores desde Blocks: ${props.colors}`);
    console.log(`Tamaños desde Blocks: ${props.sizes}`);
    let listItems = props.colors.map((color, index) => {
        console.log(`Colores desde map: ${color}`);
        console.log(`Tamaños desde map: ${props.sizes[index]}`);
        return <Block color={color} size={props.sizes[index]} />;
    });
    //let listItems = props.map((block) => {
    //    console.log(`Colores desde map: ${block.colors}`);
    //    console.log(`Colores desde map: ${block.sizes}`);
    //    return <Block color={block.colors} size={block.sizes} />;
    //});

    return <div className="blocks">{listItems}</div>;
};
export default Blocks;
