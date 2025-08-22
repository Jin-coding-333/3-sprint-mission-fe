import {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

type InputType =
  | "email"
  | "password"
  | "checkPassword"
  | "nickname"
  | "prodName"
  | "prodPrice"
  | "tag"
  | "search";

export interface InputGroupProps<T extends FieldValues> {
  type: InputType;
  value?: string;
  validation?: RegisterOptions<T, Path<T>>;
  errors?: FieldError;
  register?: UseFormRegister<T>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface InputGroupTypeItem {
  label: string;
  placeholder: string;
  inputType: React.HTMLInputTypeAttribute;
}
