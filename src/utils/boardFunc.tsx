import { SquareGrid } from "../components/square-grid";
import { gridValue } from "../types/grid";

export type gridValueProps = {
  rowIndex: number;
  colIndex: number;
};

export enum boardVals {
  white = "White",
  black = "Black",
  unknown = "Unknown",
}

export type boardSpecs = {
  rows: number[][];
  columns: number[][];
  board?: string[][];
};

export const removeZeros = (puzzle: boardSpecs) => {
  for (let i = 0; i < puzzle.rows.length; i++) {
    puzzle.rows[i].filter((val) => val !== 0);
  }
  for (let i = 0; i < puzzle.columns.length; i++) {
    puzzle.columns[i].filter((val) => val !== 0);
  }
  return puzzle;
};

export const getNextValue = (oldValue: gridValue): gridValue => {
  switch (oldValue) {
    case "White":
      return "Unknown";
    case "Black":
      return "White";
    case "Unknown":
      return "Black";
    default:
      return "Unknown";
  }
};

export const getGridContent = (gridValue: any) => {
  switch (gridValue) {
    case "White":
      return (
        <p className="flex justify-center items-center md:pb-4 pb-2.5 w-full h-full font-extrabold text-justify md:text-3xl text-base">
          .
        </p>
      );
    case "Black":
      return <div className="w-full h-full bg-black" />;
    case 0:
    case "Unknown":
      return <div className="w-full h-full bg-white" />;
    default:
      return (
        <p className="flex justify-center items-center w-full h-full font-medium text-justify md:text-xl text-sm">
          {gridValue}
        </p>
      );
  }
};

export const generateBoard = (
  boardState: any[][],
  gridValueChange?: Function
) => {
  const board = boardState.map((rows, rowIndex) => {
    return (
      <div className="flex flex-row" key={rowIndex}>
        {rows.map((col, colIndex) => {
          let className;
          if (
            rowIndex % 5 === 0 &&
            colIndex % 5 === 0 &&
            colIndex !== 0 &&
            rowIndex !== 0
          )
            className = "border-t-2 border-l-2";
          else if (colIndex % 5 === 0 && colIndex !== 0)
            className = "border-l-2";
          else if (rowIndex % 5 === 0 && rowIndex !== 0)
            className = "border-t-2";
          else className = "";
          return (
            <SquareGrid
              key={colIndex}
              classNames={className}
              prevValue={col}
              gridValueChange={() =>
                gridValueChange ? gridValueChange({ rowIndex, colIndex }) : null
              }
            />
          );
        })}
      </div>
    );
  });
  return board;
};

export const replaceValue2DArry = (
  array: any[][],
  checkValue: any,
  replaceValue: any
) => {
  const replacedArray = array.map((rows) => {
    return rows.map((value) => {
      if (value === checkValue) return replaceValue;
      else return value;
    });
  });
  return replacedArray;
};

export const getTranspose = (TwoDArray: any[][]) => {
  const lengths = TwoDArray.map((row) => {
    return row.length;
  });
  const maxIndex = lengths.indexOf(Math.max(...lengths));
  const transpose = TwoDArray[maxIndex].map((_, colIndex) =>
    TwoDArray.map((row) => row[colIndex])
  );
  return transpose;
};

export const verifyBoard = (
  boardState: any[][],
  actualRow: any[][],
  actualColumn: any[][]
) => {
  const transBoard = getTranspose(boardState);
  if (
    boardState.length !== actualRow.length ||
    boardState[0].length !== actualColumn.length
  ) {
    return false;
  } else {
    for (let index = 0; index < boardState.length; index++) {
      if (!verifyLineCorrectness(boardState[index], actualRow[index])) {
        return false;
      }
    }
    for (let index = 0; index < transBoard.length; index++) {
      if (!verifyLineCorrectness(transBoard[index], actualColumn[index])) {
        return false;
      }
    }
  }
  return true;
};

export const verifyLineCorrectness = (line: any[], lineSpec: any[]) => {
  let count: number = 0;
  let countArray: number[] = [];
  for (let i = 0; i < line.length; i++) {
    if (count !== 0 && line[i] !== "Black") {
      countArray.push(count);
      count = 0;
    } else if (line[i] === "Black") {
      count++;
    }
  }
  if (count !== 0) {
    countArray.push(count);
  }
  const updatedLine = lineSpec.filter((value) => value !== 0);

  if (countArray.length !== updatedLine.length) return false;
  const verificationArray = updatedLine.map((count, index) => {
    return count === countArray[index];
  });
  const isValid = verificationArray.every((val) => val);
  return isValid;
};
