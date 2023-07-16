import React, { useState, useEffect } from "react";
import "./main.css";
import CardGrid from "./components/CardGrid";
import ScoreBoard from "./components/Scoreboard";

const App = () => {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    return (
        <>
        <h1 className="title">The Memory Card Game</h1>
        <div className="instructions">
            <h4>How to play</h4>
            <p>
                The game consists of picking a card that has not been picked twice.
                If you pick a card twice, you lose.
            </p>
        </div>
        <ScoreBoard best={bestScore} current={currentScore} />
        <CardGrid />
        <footer>Developed by Fahim Ahmed</footer>
        </>
    )
}

export default App;
