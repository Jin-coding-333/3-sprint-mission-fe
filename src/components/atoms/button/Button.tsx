import cn from "@/utils/cn";

interface ButtonProps {
  shape?: "rectangle" | "round";
  styleVariant: "primary" | "secondary" | "danger" | "outline";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function Button({
  shape = "rectangle",
  styleVariant,
  onClick,
  disabled,
  className,
  children,
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonStyle.base,
        buttonStyle[styleVariant],
        buttonStyle.shape[shape],
        className,
        disabled && "opacity-50"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

const buttonStyle = {
  base: "flex items-center justify-center w-[357px] h-[56px] text-lg",
  primary: "bg-primary-100 text-secondary-100",
  secondary:
    "bg-secondary-50 text-primary-100 border border-solid border-primary-100",
  danger: "bg-error text-secondary-100",
  outline: "bg-secondary-50 text-error border border-solid border-error",
  shape: {
    rectangle: "rounded-[12px]",
    round: "rounded-[26px]",
  },
};
