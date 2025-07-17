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
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface InputGroupTypeItem {
  label: string;
  placeholder: string;
  inputType: React.HTMLInputTypeAttribute;
}
