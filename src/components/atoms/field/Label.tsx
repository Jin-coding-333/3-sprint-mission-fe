import cn from "@/utils/cn";

interface LabelProps {
  labelText: string;
  htmlFor: string;
  className?: string;
}
export default function Label({ labelText, htmlFor, className }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("text-secondary-800 text-lg md:text-2lg", className)}
    >
      {labelText}
    </label>
  );
}
