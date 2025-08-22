import cn from "@/utils/cn";
import { InputProps } from "./field.type";
import { fieldStyles } from "./field.style";
import { FieldValues, Path } from "react-hook-form";

export default function Input<T extends FieldValues>({
  id,
  type,
  value,
  required,
  disabled,
  placeholder,
  className,
  validation,
  errors,
  onKeyDown,
  register,
  ...props
}: InputProps<T>) {
  return (
    <input
      className={cn(
        fieldStyles.base,
        fieldStyles.input,
        errors && fieldStyles.error,
        className
      )}
      id={id}
      type={type}
      value={value}
      required={required}
      disabled={disabled}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      {...register?.(id as Path<T>, validation)}
      {...props}
    />
  );
}
