import { FC, useCallback, useEffect, useState } from "react";
import {
  boardSpecs,
  generateBoard,
  getNextValue,
  getTranspose,
  gridValueProps,
  verifyBoard,
} from "../utils/boardFunc";
import { fillOverlap } from "../utils/solveLogics";
import { Popup } from "../utils/popup";
import { popupContent } from "../types/popup";
import { puzzles } from "../utils/puzzleData";

const defaultPopup: popupContent = {
  content: "The puzzle is solved successfully",
  header: "Congrats.!!!",
  msgClassname: "text-green-500 ",
};

export const Board: FC = () => {
  const puzzleList = Object.keys(puzzles);

  const [selectedPuzzle, setSelectedPuzzle] = useState(puzzles[puzzleList[1]]);
  const changePuzzle = (value: string) => {
    setSelectedPuzzle(puzzles[value]);
  };
  const rowCount = selectedPuzzle.rows.length;
  const colCount = selectedPuzzle.columns.length;
  const defaultBoard = [...Array(rowCount)].map((x) =>
    Array(colCount).fill("Unknown")
  );
  const [boardState, setBoardState] = useState(defaultBoard);
  const [popup, setPopup] = useState(defaultPopup);
  const [showResult, setShowResult] = useState(false);

  const handlePopupClose = () => {
    setShowResult(false);
  };

  const checkWinCondition = useCallback(() => {
    const win = verifyBoard(
      boardState,
      selectedPuzzle.rows,
      selectedPuzzle.columns
    );
    let popup: popupContent;
    if (win) {
      popup = {
        content: "The puzzle is solved successfully",
        header: "Congrats.!!!",
        msgClassname: "text-green-500 ",
      };
    } else {
      popup = {
        content: "The puzzle is not solved completely. Please try further",
        header: "Almost there.!",
        msgClassname: "text-red-500 ",
      };
    }
    setPopup(popup);
    setShowResult(true);
  }, [boardState, selectedPuzzle]);

  const solvePuzzle = (selectedPuzzle: boardSpecs) => {
    if (selectedPuzzle.board) {
      const solution = selectedPuzzle.board.map((row) => {
        return row.map((val) => val);
      });
      setBoardState(solution);
    } else {
      const popup = {
        content: "Solution not available",
        header: "Attention",
        msgClassname: "text-black ",
      };
      setPopup(popup);
      setShowResult(true);
    }
  };

  useEffect(() => {
    const newBoard = [...Array(selectedPuzzle.rows.length)].map((x) =>
      Array(selectedPuzzle.columns.length).fill("Unknown")
    );
    setBoardState(newBoard);
    console.log(selectedPuzzle);
  }, [setBoardState, selectedPuzzle]);

  const gridValueChange = ({ rowIndex, colIndex }: gridValueProps) => {
    let copy = [...boardState];
    const oldValue = boardState[rowIndex][colIndex];
    copy[rowIndex][colIndex] = getNextValue(oldValue);
    // copy[rowIndex] = fillWhitesIfValidated(copy[rowIndex],selectedPuzzle.rows[rowIndex]);
    // const trans = getTranspose(copy);
    // trans[colIndex] = fillWhitesIfValidated(trans[colIndex],selectedPuzzle.columns[colIndex])
    // const final = getTranspose(trans)
    setBoardState(copy);
  };
  const fillLogic = () => {
    setBoardState(
      fillOverlap(boardState, selectedPuzzle.rows, selectedPuzzle.columns)
    );
  };
  const board = generateBoard(boardState, gridValueChange);
  const rows = generateBoard(selectedPuzzle.rows);
  const cols = generateBoard(getTranspose(selectedPuzzle.columns));

  return (
    <>
      <div className="flex lg:flex-row flex-col items-center w-full">
        <div className="flex flex-col justify-center items-center w-full lg:order-1 order-2">
          <div className="flex flex-col justify-center items-center">
            <div className="pb-4 flex justify-end w-full">
              <div>{cols}</div>
            </div>
            <div className="flex flex-row items-center w-full">
              <div className="pr-4 justify-end items-end">{rows}</div>
              <div className="">{board}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-fit order-1 lg:order-2 lg:h-screen p-4 lg:mr-16">
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center items-center text-4xl font-bold pb-5">
              Nonogram
            </div>
            <div className="flex flex-row justify-center items-center pb-8 w-64">
              <select
                name="puzzleList"
                id="puzzleList"
                className="border border-black w-full h-8"
                defaultValue={puzzleList[1]}
                onChange={(e) => changePuzzle(e.target.value)}
              >
                {puzzleList.map((val) => {
                  return (
                    <option key={val} value={val}>
                      {val}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="flex justify-center items-center mt-8">
            <div className="flex justify-center items-center">
              <button onClick={checkWinCondition}>
                <div className="flex justify-center items-center font-medium text-xl w-64 h-12 border border-black">
                  Check
                </div>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center mt-4">
            <div className="flex justify-center items-center">
              <button onClick={fillLogic}>
                <div className="flex justify-center items-center font-medium text-xl w-32 h-12 border border-black">
                  Assist
                </div>
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button onClick={() => solvePuzzle(selectedPuzzle)}>
                <div className="flex justify-center items-center font-medium text-xl w-32 h-12 border border-black">
                  Solve it!
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Popup showPopup={showResult} handleClose={handlePopupClose} {...popup} />
    </>
  );
};
