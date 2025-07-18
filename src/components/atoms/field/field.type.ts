interface BaseFieldProps {
  error?: boolean;
  helperText?: string;
}

export interface InputProps
  extends BaseFieldProps,
    React.InputHTMLAttributes<HTMLInputElement> {}

export interface TextareaProps
  extends BaseFieldProps,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
