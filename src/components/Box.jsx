import React, { useState, useEffect } from "react";
import Player from "./Player";
const Box = ({
  isX,
  setIsX,
  index,
  filledBoxes,
  setFilledBoxes,
  setIsGameOver,
  setGameOverText,
  showItem,
  isGameOver,
}) => {
  const [showPlayer, setShowPlayer] = useState(false);
  const [filled, setFilled] = useState(false);
  const [indicate, setIndicate] = useState(false);
  const changePlayer = () => {
    setIsX(!isX);
  };
  useEffect(() => {
    changePlayer();
    checkGameOver();
  }, [indicate]);
  useEffect(() => {
    const startNewGame = () => {
      setFilled(false);
    };
    startNewGame();
  }, [isGameOver]);
  const checkGameOver = () => {
    if (
      gameOverComb(1, 2, 3) ||
      gameOverComb(4, 5, 6) ||
      gameOverComb(7, 8, 9) ||
      gameOverComb(1, 5, 9) ||
      gameOverComb(3, 5, 7) ||
      gameOverComb(1, 4, 7) ||
      gameOverComb(2, 5, 8) ||
      gameOverComb(3, 6, 9)
    ) {
      setIsGameOver(true);
      setGameOverText(isX ? "'X' wins!" : "'O' wins!");
    } else {
      if (Object.keys(filledBoxes).length === 9) {
        setIsGameOver(true);
        setGameOverText("Match draw!");
      }
    }
  };
  const gameOverComb = (num1, num2, num3) => {
    return (
      filledBoxes[num1] === filledBoxes[num2] &&
      filledBoxes[num1] === filledBoxes[num3] &&
      filledBoxes[num3] !== undefined
    );
  };
  return (
    <div
      className="w-[100px] border border-black aspect-[1] flex items-center justify-center cursor-pointer"
      onMouseMove={() => {
        setShowPlayer(true);
      }}
      onMouseLeave={() => {
        setShowPlayer(false);
      }}
      onClick={() => {
        setFilled(true);
        setIndicate(!indicate);
        if (!filled) {
          setFilledBoxes({ ...filledBoxes, [index + 1]: isX ? "x" : "o" });
        }
      }}
    >
      {showPlayer && !filled && <Player isX={isX} color="bg-gray-400" />}
      {showItem ? <Player isX={isX} color="bg-black" /> : <div></div>}
    </div>
  );
};
export default Box;
