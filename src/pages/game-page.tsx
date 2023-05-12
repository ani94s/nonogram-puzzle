import { createContext, FC } from "react";
import { Board } from "../components/board";

type NonogramContextType = {
  possibleRuns: Map<string, any[]>;
};
export const NonogranContext = createContext<NonogramContextType>({
  possibleRuns: new Map<string, any[]>(),
});

export const GamePage: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:m-8">
      <div className="flex w-full justify-center items-center">
        <Board />
      </div>
    </div>
  );
};
