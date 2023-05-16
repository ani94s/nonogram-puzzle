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
    <div className="absolute lg:m-8 top-10 w-full">
      <div className="flex w-full justify-center items-center">
        <Board />
      </div>
    </div>
  );
};
