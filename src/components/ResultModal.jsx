import React from "react";

const ResultModal = ({
  gameOverText,
  setIsGameOver,
  setFilledBoxes,
  setIsX,
}) => {
  return (
    <div className="absolute bg-black bg-opacity-55 w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="w-[350px] bg-white rounded-xl p-5 text-center flex flex-col items-center">
        <p className="text-[4rem] p-5">{gameOverText}</p>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setIsGameOver(false);
              setFilledBoxes({});
              setIsX(true);
            }}
            className="bg-black border border-black rounded-md w-36 text-white px-4 py-1 hover:bg-white hover:text-black"
          >
            Start Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
