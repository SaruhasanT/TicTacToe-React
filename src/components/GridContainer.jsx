import React, { useEffect, useState } from "react";
import Box from "./Box";
const GridContainer = ({
  setGameOverText,
  setIsGameOver,
  isGameOver,
  filledBoxes,
  setFilledBoxes,
  setIsX,
  isX,
}) => {
  return (
    <div className="grid grid-cols-3 border border-black">
      {new Array(9).fill(0).map((d, i) => {
        return (
          <Box
            setGameOverText={setGameOverText}
            setIsGameOver={setIsGameOver}
            isGameOver={isGameOver}
            key={i}
            filledBoxes={filledBoxes}
            setFilledBoxes={setFilledBoxes}
            index={i}
            setIsX={setIsX}
            isX={isX}
            showItem={filledBoxes[i + 1] ? true : false}
          />
        );
      })}
    </div>
  );
};

export default GridContainer;
