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
  errors?: FieldError;
  register?: UseFormRegister<T>;
  options?: RegisterOptions<T, Path<T>>;
}

export interface InputProps<T extends FieldValues>
  extends BaseFieldProps<T>,
    React.InputHTMLAttributes<HTMLInputElement> {}

export interface TextareaProps<T extends FieldValues>
  extends BaseFieldProps<T>,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
