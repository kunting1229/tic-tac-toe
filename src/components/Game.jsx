import { useState } from "react";
import Board from "./Board";

export default function Game() {
  // 紀錄每次行動的局面
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // 目前第幾次行動
  const [currentMove, setCurrentMove] = useState(0);

  const player = currentMove % 2 === 0 ? "X" : "O";
  const currentSquares = history[currentMove];
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  // 作為 prop 傳給子元件，每次行動時會呼叫的行為，紀錄局面
  // 如果使用 jumpTo，紀錄的部分就要從特定階段開始紀錄
  function handlePlay(squares) {
    const nextHistory = [...history.slice(0, currentMove + 1), squares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  // 可以回到某次行動階段
  function jumpTo(move) {
    setCurrentMove(move);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board player={player} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
