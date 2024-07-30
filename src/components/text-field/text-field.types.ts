import { TextField } from "../../utils/types";

export type TextFieldProps = {
  isEditable?: boolean;
  closeModal?: () => void;
  textInput?: TextField; 
}