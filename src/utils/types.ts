export type InputItem  = {
  inputType?: string;
  type?: string;
  id?: string;
  name?: string;
  label?: string;
  options?: string[];
  optionsString?: string;
  placeholder?: string;
  isRequired?: boolean;
};

export type TextField = Omit<InputItem, 'options'>;
export type ListField = Omit<InputItem, 'placeholder'>;
export type ButtonField = Pick<InputItem, 'name' | 'type' | 'id'>;


export type InputList = {
  inputList: InputItem[];
}