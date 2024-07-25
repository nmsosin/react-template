export type InputItem  = {
  id?: string;
  inputType?: string;
  name?: string;
  label?: string;
  isRequired?: boolean;
};


export type InputList = {
  inputList: InputItem[];
}