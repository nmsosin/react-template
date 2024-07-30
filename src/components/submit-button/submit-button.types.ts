import { ButtonField } from "../../utils/types";

export type SubmitButtonProps = {
  isEditable?: boolean;
  closeModal?: () => void;
  button?: ButtonField; 
}