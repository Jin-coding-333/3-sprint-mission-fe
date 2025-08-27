import cn from "@/utils/cn";
import { InputProps } from "./field.type";
import { fieldStyles } from "./field.style";
import { FieldValues, Path } from "react-hook-form";

export default function Input<T extends FieldValues>({
  id,
  name,
  type,
  value,
  required,
  disabled,
  placeholder,
  className,
  onKeyDown,
  register,
  validation,
  ...props
}: InputProps<T>) {
  return (
    <input
      className={cn(fieldStyles.base, fieldStyles.input, className)}
      id={id}
      type={type}
      value={value}
      required={required}
      disabled={disabled}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      {...(register ? register(name as Path<T>, validation) : {})}
      {...props}
    />
  );
}
