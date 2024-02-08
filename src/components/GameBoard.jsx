import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //Don't change the array directly
  //   const handleSelectSquare = (rowIndex, colIndex, playerSymbol) => {
  //     setGameBoard((prevGameBoard) => {
  //       prevGameBoard[rowIndex][colIndex] = "X";
  //       return prevGameBoard;
  //     });
  //   };

  //we have to update the state immutable way by deep copying the array
  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ]; //kinda Deep copy
      updatedBoard[rowIndex][colIndex] = "X";
      return updatedBoard;
    });
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
