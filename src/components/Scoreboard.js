const ScoreBoard = (props) => {
    return (
        <div className="score-board">
            <p>Best Score: {props.best}</p>
            <p>Current Score: {props.current}</p>
        </div>
    )
}

export default ScoreBoard;