import { FC } from "react";
import { gridParams } from "../types/grid";
import { getGridContent } from "../utils/boardFunc";

export const SquareGrid: FC<gridParams> = (gridParams) => {
  const content = (
    <div
      className={`${gridParams.classNames} border border-gray-800 md:w-8 md:h-8 w-5 h-5 flex flex-col justify-center items-center`}
    >
      <button
        type="button"
        className="h-full w-full"
        onClick={() => gridParams.gridValueChange()}
      >
        {getGridContent(gridParams.prevValue)}
      </button>
    </div>
  );
  return content;
};
