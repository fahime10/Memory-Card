const Card = (props) => {
    return (
        <div className="card" onClick={props.clicked}>
            <image src={props.image} alt={props.image} />
            <p>{props.name}</p>
        </div>
    )
}

export default Card;