interface BaseFieldProps {
  id: string;
  name?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

export interface InputProps extends BaseFieldProps {
  type?: React.HTMLInputTypeAttribute;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export type TextareaProps = BaseFieldProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;
