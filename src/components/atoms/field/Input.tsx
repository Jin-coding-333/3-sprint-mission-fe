import cn from "@/utils/cn";
import { InputProps } from "./field.type";
import { fieldStyles } from "./field.style";

export default function Input({
  name,
  type,
  value,
  required,
  disabled,
  error,
  placeholder,
  className,
  onChange,
}: InputProps) {
  return (
    <input
      className={cn(fieldStyles.base, fieldStyles.input, className)}
      name={name}
      type={type}
      value={value}
      required={required}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
