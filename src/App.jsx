import { useRef, useState } from "react";
import GridContainer from "./components/GridContainer";
import ResultModal from "./components/ResultModal";

function App() {
  const [isX, setIsX] = useState(false);
  const [filledBoxes, setFilledBoxes] = useState({});
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameOverText, setGameOverText] = useState(null);
  const boxRef = useRef();
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center flex-col">
      <h1 className="text-3xl">
        {!isGameOver ? `Player ${isX ? "X" : "O"}'s turn` : "Game Over!"}
      </h1>
      <GridContainer
        setGameOverText={setGameOverText}
        setIsGameOver={setIsGameOver}
        isGameOver={isGameOver}
        boxRef={boxRef}
        filledBoxes={filledBoxes}
        setFilledBoxes={setFilledBoxes}
        isX={isX}
        setIsX={setIsX}
      />
      {isGameOver && (
        <ResultModal
          gameOverText={gameOverText}
          setIsGameOver={setIsGameOver}
          setFilledBoxes={setFilledBoxes}
          setIsX={setIsX}
        />
      )}
    </div>
  );
}
export default App;
