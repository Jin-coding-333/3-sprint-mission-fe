type InputType =
  | "email"
  | "password"
  | "checkPassword"
  | "nickname"
  | "prodName"
  | "prodPrice"
  | "tag"
  | "search";

export interface InputGroupProps {
  type: InputType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputGroupTypeItem {
  label: string;
  placeholder: string;
  inputType: React.HTMLInputTypeAttribute;
}
