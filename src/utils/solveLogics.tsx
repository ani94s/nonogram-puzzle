import { boardVals, getTranspose, verifyLineCorrectness } from "./boardFunc";

export const getPossibleBlackRuns = (lineSpec: any[], existingLine: any[]) => {
  const sum =
    lineSpec.reduce((partialSum, a) => partialSum + a, 0) + lineSpec.length - 1;
  const totalIterations = existingLine.length - sum;
  let possibleLines = [];
  for (let i = 0; i <= totalIterations; i++) {
    const tempLine = [...lineSpec];
    let count = tempLine.shift();
    const initialLine = Array(existingLine.length).fill("Unknown");
    const updatedLine = initialLine.map((value, index) => {
      if (index < i || (count === 0 && !tempLine)) {
        return "White";
      } else if (count > 0) {
        count--;
        return "Black";
      } else {
        count = tempLine.shift();
        return "White";
      }
    });
    possibleLines.push(updatedLine);
  }
  return possibleLines;
};

export const getPossibleBlackRuns3 = (lineSpec: any[], existingLine: any[]) => {
  //Generate Black subsets for the line specification
  let initArray: any[] = [];
  for (let i = 0; i < lineSpec.length; i++) {
    const temp = Array(lineSpec[i]).fill("Black");
    if (i !== lineSpec.length - 1) {
      temp.push("White");
    }
    initArray.push(temp);
  }

  console.log("1.", "Line Spec:", lineSpec, "Black Sets:", initArray); //Line Spec:[2,4] Black Sets:[[B,B,W],[B,B,B,B,W]]
  //Find all combinations of the specification
  const gapCount =
    existingLine.length -
    (lineSpec.reduce((partialSum, a) => partialSum + a, 0) +
      lineSpec.length -
      1);
  let possArr: any[] = [];
  const perm = (mainArray: any[], remArray: any[], gapLength: number) => {
    const gaps = Array(gapLength).fill("White");
    for (let i = 0; i <= gapLength; i++) {
      let tempArr = gaps.slice();
      tempArr.splice(i, 0, remArray);
      const fullArr = mainArray.concat(tempArr.flat());
      const nextMain = fullArr.slice(0, i + mainArray.length + 1);
      const nextRem = remArray.slice(1);
      if (nextRem.length === 0) {
        let possibility = fullArr.flat(2);
        let canPush: boolean = true;
        for (let i = 0; i < existingLine.length; i++) {
          if (
            existingLine[i] !== boardVals.unknown &&
            existingLine[i] !== possibility[i]
          ) {
            canPush = false;
            break;
          }
        }
        if (canPush) possArr.push(possibility);
      } else {
        perm(nextMain, nextRem, gapLength - i);
      }
    }
    return possArr;
  };
  const runs = perm([], initArray, gapCount);
  console.log("2. Combinations:", runs);
  return runs;
};

// const permutator = (inputArr:any[]) => {
//     let permArr:any[] = [],
//     permStrArray:any[] = [],
//     usedChars:any[] = [];
//     const permute = (input:any[]) => {
//         var i, ch;
//         for (i = 0; i < input.length; i++) {
//             ch = input.splice(i, 1)[0];
//             usedChars.push(ch);
//             if (input.length === 0) {
//                 const a = usedChars.slice()
//                 let stringArr = JSON.stringify(a)
//                 if(!permStrArray.includes(stringArr)){
//                     permStrArray.push(stringArr);
//                     permArr.push(a.flat());
//                 }
//                 // for(let i=0;i<permArr[0].length;i++){
//                 //     const arr = permArr.map((value) => value[i]);
//                 //     if(!arr.every(value => value === 'Black')){

//                 //     }
//                 // }
//             }
//             permute(input);
//             input.splice(i, 0, ch);
//             usedChars.pop();
//         }
//         return permArr
//     };
//     return(permute(inputArr));
// }

export const fillCommonBlack = (lineSpec: any[], existingLine: any[]) => {
  const possibleLines = getPossibleBlackRuns3(lineSpec, existingLine);
  if (possibleLines.length > 0) {
    for (let i = 0; i < possibleLines[0].length; i++) {
      const arr = possibleLines.map((value) => value[i]);
      if (arr.every((value) => value === boardVals.black)) {
        existingLine[i] = boardVals.black;
      }
      if (
        arr.every(
          (value) => value === boardVals.white || value === boardVals.unknown
        )
      ) {
        existingLine[i] = boardVals.white;
      }
    }
  }
  return existingLine;
};

export const fillOverlap = (
  boardState: any[][],
  actualRow: any[][],
  actualColumn: any[][]
) => {
  let transBoard;
  for (let index = 0; index < boardState.length; index++) {
    fillCommonBlack(
      actualRow[index].filter((val) => val !== 0),
      boardState[index]
    );
  }
  transBoard = getTranspose(boardState);
  for (let index = 0; index < transBoard.length; index++) {
    fillCommonBlack(
      actualColumn[index].filter((val) => val !== 0),
      transBoard[index]
    );
  }
  for (let index = 0; index < transBoard.length; index++) {
    transBoard[index] = fillWhitesIfValidated(
      transBoard[index],
      actualColumn[index]
    );
  }
  let resultBoard = getTranspose(transBoard);
  for (let index = 0; index < resultBoard.length; index++) {
    resultBoard[index] = fillWhitesIfValidated(
      resultBoard[index],
      actualRow[index]
    );
  }
  return resultBoard;
};

export const fillWhitesIfValidated = (line: any[], LineSpec: any[]) => {
  let newLine = line;
  if (verifyLineCorrectness(line, LineSpec)) {
    newLine = line.map((val) => {
      if (val !== "Black") return "White";
      else return val;
    });
  }
  return newLine;
};
