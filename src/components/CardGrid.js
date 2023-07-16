import React, { useState, useEffect } from "react";
import Card from "./card";
import King from "../assets/king.png";
import Queen from "../assets/queen.png";
import Knight from "../assets/knight.png";
import Rook from "../assets/rook.jpg";
import Bishop from "../assets/bishop.png";
import Pawn from "../assets/pawn.jpg";
import Chessboard from "../assets/chessboard.png";
import Checkmate from "../assets/checkmate.png";

const CardGrid = () => {
    const [cards, setCards] = useState([
        {image: King, name: "King"}, {image: Queen,name: "Queen"},
        {image: Knight, name: "Knight"}, {image: Rook, name: "Rook"},
        {image: Bishop, name: "Bishop"}, {image: Pawn, name: "Pawn"},
        {image: Chessboard, name: "Chessboard"}, {image: Checkmate, name: "Checkmate"}
    ]);

    const shuffleAgain = () => {
        setCards(shuffleCards(cards));
        console.log(cards);
    }

    useEffect(() => {
        document.querySelectorAll(".card").forEach((card) => {
            card.addEventListener("click", shuffleAgain);
        });

        return () => {
            document.querySelectorAll(".card").forEach((card) => {
                card.removeEventListener("click", shuffleAgain);
            });
        }
    });

    return (
        <div className="card-grid">
            {shuffleCards(cards).map((card, index) => (
                <Card
                    key={index}
                    image={card.image}
                    name={card.name}
                />
            ))}
        </div>
    )
}

// Fisher-Yates-Durstenfeld shuffle
function shuffleCards(cards) {
    for (let i = 0; i < cards.length - 1; i++) {
        let j = i + Math.floor(Math.random() * (cards.length - i));

        let temp = cards[j];
        cards[j] = cards[i];
        cards[i] = temp;
    }
    return cards;
}

export default CardGrid;