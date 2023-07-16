import React from "react";

const Card = (props) => {
    return (
        <div className={"card - " + props.name} onClick={() => props.incrementScore(props.name)}>
            <img src={props.image} alt={props.image} />
            <p>{props.name}</p>
        </div>
    )
}

export default Card;