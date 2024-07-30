import { ListField } from "../../utils/types";

export type ListFieldProps = {
  isEditable?: boolean;
  closeModal?: () => void;
  list?: ListField; 
}