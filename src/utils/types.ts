export type InputItem  = {
  inputType?: 'text' | 'email' | 'phone' | 'number';
  type?: string;
  id?: string;
  name?: string;
  label?: string;
  options?: string | string[];
  placeholder?: string;
  isRequired?: boolean;
};

export type TextField = Omit<InputItem, 'options'>;
export type ListField = Omit<InputItem, 'placeholder'>;


export type InputList = {
  inputList: InputItem[];
}