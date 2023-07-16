import "./main.css";
import Game from "./components/Game";

const App = () => {
    return (
        <>
        <h1 className="title">The Memory Card Game</h1>
        <div className="instructions">
            <h4>How to play</h4>
            <p>
                The game consists of picking a card that has not been picked twice.
            </p>
            <p>    
                If you pick a card twice, you lose.
            </p>
            <p>
                In this game, the best possible score is 8.
            </p>
        </div>
        <Game />
        <footer>Developed by Fahim Ahmed</footer>
        </>
    )
}

export default App;
