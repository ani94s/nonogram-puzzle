import { MouseEventHandler } from "react";

export type popupProps = popupContent & {
  handleClose: MouseEventHandler;
  showPopup?: boolean;
};

export type popupContent = {
  content: string;
  msgClassname?: string;
  header?: string;
};
