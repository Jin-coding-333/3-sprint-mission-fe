interface BaseFieldProps {
  name: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  placeholder?: string;
  className?: string;
}

export interface InputProps extends BaseFieldProps {
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TextareaProps extends BaseFieldProps {
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
