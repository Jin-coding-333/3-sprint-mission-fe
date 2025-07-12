import cn from "@/utils/cn";
import { fieldStyles } from "./field.style";
import { TextareaProps } from "./field.type";

export default function Textarea({
  id,
  name,
  placeholder,
  className,
  onChange,
  value,
  rows = 5,
  required,
}: TextareaProps) {
  return (
    <div className="flex flex-col gap-1">
      <textarea
        id={id}
        name={name}
        value={value}
        rows={rows}
        required={required}
        placeholder={placeholder}
        className={cn(
          fieldStyles.base,
          fieldStyles.textarea,
          "resize-y",
          className
        )}
        onChange={onChange}
        aria-label={placeholder}
      ></textarea>
    </div>
  );
}
