export type ButtonPropTypes = {
  buttonType?: "button" | "submit";
  clicked?: () => void;
  buttonStyles: string;
  text: string;
};
