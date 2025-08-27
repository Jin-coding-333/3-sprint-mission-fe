import {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface BaseFieldProps<T extends FieldValues> {
  helperText?: string;
  validation?: RegisterOptions<T, Path<T>>;
  register?: UseFormRegister<T>;
}

export interface InputProps<T extends FieldValues>
  extends BaseFieldProps<T>,
    React.InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
}

export interface TextareaProps<T extends FieldValues>
  extends BaseFieldProps<T>,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: Path<T>;
}
