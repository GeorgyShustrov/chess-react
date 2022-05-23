import { useState, useEffect } from "react";
import "./App.scss";
import BoardComponent from "./components/BoardComponent";
import { Board } from "./models/Board";

function App() {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart();

    return () => {};
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    setBoard(newBoard);
  }
  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard}></BoardComponent>
    </div>
  );
}

export default App;
