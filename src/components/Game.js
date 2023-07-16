import React, { useState, useEffect } from "react";
import Card from "./card";
import ScoreBoard from "./Scoreboard";
import King from "../assets/king.png";
import Queen from "../assets/queen.png";
import Knight from "../assets/knight.png";
import Rook from "../assets/rook.jpg";
import Bishop from "../assets/bishop.png";
import Pawn from "../assets/pawn.jpg";
import Chessboard from "../assets/chessboard.png";
import Checkmate from "../assets/checkmate.png";

const Game = () => {
    const [currentScore, setCurrentScore] = useState(0);

    const [bestScore, setBestScore] = useState(0);

    const [cards, setCards] = useState([
        {image: King, name: "King"}, {image: Queen, name: "Queen"},
        {image: Knight, name: "Knight"}, {image: Rook, name: "Rook"},
        {image: Bishop, name: "Bishop"}, {image: Pawn, name: "Pawn"},
        {image: Chessboard, name: "Chessboard"}, {image: Checkmate, name: "Checkmate"}
    ]);

    const [array, setArray] = useState([]);

    // Fisher-Yates-Durstenfeld shuffle
    const shuffleCards = (cards) => {
        for (let i = 0; i < cards.length - 1; i++) {
            let j = i + Math.floor(Math.random() * (cards.length - i));

            let temp = cards[j];
            cards[j] = cards[i];
            cards[i] = temp;
        }
        return cards;
    }

    const incrementScore = (clickedName) => {
        if (array.includes(clickedName)) {
            setArray([]);
            setCurrentScore(0);
        } else {
            setArray([...array, clickedName]);
            setCurrentScore(currentScore + 1);
        }
    }

    useEffect(() => {
        if (currentScore >= bestScore) {
            setBestScore(currentScore);
        }
    }, [currentScore, bestScore]);

    return (
        <>
        <ScoreBoard best={bestScore} current={currentScore} />
        <div className="card-grid">
            {shuffleCards(cards).map((card, index) => (
                <Card 
                    key={index} 
                    image={card.image} 
                    name={card.name} 
                    incrementScore={(clickedName) => {incrementScore(clickedName)}}
                />
            ))}
        </div>
        </>
    )
}

export default Game;