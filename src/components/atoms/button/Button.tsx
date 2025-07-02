import cn from "@/utils/cn";

interface ButtonProps {
  shape?: "rectangle" | "round";
  variant: "primary" | "secondary" | "danger" | "outline";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function Button({
  shape = "rectangle",
  variant,
  onClick,
  disabled,
  className,
  children,
}: ButtonProps) {
  const baseStyle =
    "flex items-center justify-center w-[357px] h-[56px] text-lg";
  const variantStyle = {
    primary: disabled
      ? "bg-secondary-400 text-secondary-100"
      : "bg-primary-100 text-secondary-100 hover:bg-primary-200",
    secondary:
      "bg-secondary-50 text-primary-100 border border-solid border-primary-100",
    danger: "bg-error text-secondary-100",
    outline: "bg-secondary-50 text-error border border-solid border-error",
  };
  const shapeStyle = {
    rectangle: "rounded-[12px]",
    round: "rounded-[26px]",
  };

  return (
    <button
      className={cn(
        baseStyle,
        variantStyle[variant],
        shapeStyle[shape],
        className,
        disabled && "opacity-50 cursor-not-allowed"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
