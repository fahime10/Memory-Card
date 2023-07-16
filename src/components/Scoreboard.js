const ScoreBoard = (props) => {
    return (
        <div className="score-board">
            <p className="best">Best Score: {props.best}</p>
            <p className="current">Current Score: {props.current}</p>
        </div>
    )
}

export default ScoreBoard;