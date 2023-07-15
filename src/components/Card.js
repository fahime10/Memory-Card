import { useState } from "react";

const Card = (props) => {
    const [ clicked, setClicked ] = useState("false");

    const setToClicked = () => {
        setClicked("true");
    }

    return (
        <div className="card" state={clicked} onClick={setToClicked}>
            <img src={props.image} alt={props.image} />
            <p>{props.name}</p>
        </div>
    )
}

export default Card;