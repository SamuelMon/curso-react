import { useState } from "react";
import confetti from "canvas-confetti";
import "./App.css";

import { Square } from "./Components/Square";
import { TURNS } from "./constants";
import { checkWinner } from "./logic/board";
import { WinnerModal } from "./Components/WinnerModal";
import { Board } from "./Components/Board";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ? turnFromStorage : TURNS.X;
  });
  const [numTurn, setNumTurn] = useState(() => {
    const numTurnFromStorage = window.localStorage.getItem("numTurn");
    return numTurnFromStorage ? Number(numTurnFromStorage) : 0;
  });
  // Null es que no hay ganador y false es un empate
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    setNumTurn(0);

    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
    window.localStorage.removeItem("numTurn");
  };

  const updateBoard = (index) => {
    //No se actualiza si ya tiene algo
    if (board[index] || winner) return;
    //Actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    //Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    const newNumTurn = numTurn + 1;
    setNumTurn(newNumTurn);
    //Guardar Partida
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);
    window.localStorage.setItem("numTurn", JSON.stringify(newNumTurn));
    //revisar si hay ganador
    const newWinner = checkWinner(newBoard, index, newNumTurn);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (numTurn === 9) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset</button>
      <section className="game">
        <Board board={board} updateBoard={updateBoard}></Board>
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame}></WinnerModal>
    </main>
  );
}

export default App;
