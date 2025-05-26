import { useState } from "react";

import Square from "./Square";
import { calculateWinner } from "../util/utils";

export default function Board({ player, squares, onPlay }) {
  // 判斷勝負
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (player === "X" ? "X" : "O");
  }

  function handleClick(targetIndex) {
    if (winner) return;
    const nextSquares = [...squares];
    nextSquares[targetIndex] = player;
    onPlay(nextSquares);
  }

  return (
    <>
      <div>{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick.bind(null, 0)} />
        <Square value={squares[1]} onSquareClick={handleClick.bind(null, 1)} />
        <Square value={squares[2]} onSquareClick={handleClick.bind(null, 2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={handleClick.bind(null, 3)} />
        <Square value={squares[4]} onSquareClick={handleClick.bind(null, 4)} />
        <Square value={squares[5]} onSquareClick={handleClick.bind(null, 5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={handleClick.bind(null, 6)} />
        <Square value={squares[7]} onSquareClick={handleClick.bind(null, 7)} />
        <Square value={squares[8]} onSquareClick={handleClick.bind(null, 8)} />
      </div>
    </>
  );
}
