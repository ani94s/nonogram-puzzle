import Button from "@restart/ui/esm/Button";
import { FC } from "react";
import { popupProps } from "../types/popup";

export const Popup: FC<popupProps> = (popupParams) => {
  return popupParams.showPopup ? (
    <div className="fixed flex left-0 top-0 justify-center items-center w-full h-screen bg-black/30">
      <div className="flex flex-col justify-center items-center w-1/2 max-h-full bg-white border p-4 border-black shadow-md shadow-black">
        <div className="flex flex-row w-full h-10 border-black border-b">
          <div className="flex items-center justify-start text-2xl w-full px-4">
            {popupParams.header ?? "Attention!!"}
          </div>
          <div className="flex items-center justify-end w-7 h-7">
            <span
              className="flex justify-center items-center cursor-pointer font-bold text-3xl w-7 h-7"
              onClick={popupParams.handleClose}
            >
              x
            </span>
          </div>
        </div>
        <div
          className={`flex w-full h-fit text-xl p-4 justify-start items-start ${popupParams.msgClassname}`}
        >
          {popupParams.content}
        </div>
        <div className="flex flex-row justify-end w-full items-center p-4">
          <Button
            onClick={popupParams.handleClose}
            className="w-24 h-12 border bg-blue-300 rounded-sm shadow-slate-400 transition-shadow"
          >
            OK
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
};
