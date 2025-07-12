interface BaseFieldProps {
  id?: string;
  name: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  placeholder?: string;
  className?: string;
}

export interface InputProps extends BaseFieldProps {
  type?: React.HTMLInputTypeAttribute;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type TextareaProps = BaseFieldProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  };
