import React, { useState } from "react";

const Player = ({ isX, color }) => {
  const [currentIsX, setCurrentIsX] = useState(isX);
  return (
    <div className="relative w-[100px] h-full">
      {
        <>
          {currentIsX ? (
            <>
              <div
                className={
                  "w-16 h-2 absolute rotate-45 rounded-md top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] " +
                  color
                }
              ></div>
              <div
                className={
                  "w-16 h-2 absolute -rotate-45 rounded-md top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] " +
                  color
                }
              ></div>
            </>
          ) : (
            <>
              <div
                className={
                  "w-16 h-16 rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] " +
                  color
                }
              ></div>
              <div
                className={
                  "w-12 h-12 bg-white rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
                }
              ></div>
            </>
          )}
        </>
      }
    </div>
  );
};

export default Player;
