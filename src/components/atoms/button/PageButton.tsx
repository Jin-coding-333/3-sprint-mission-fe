import cn from "@/utils/cn";
import Icon from "../icons/Icon";
import ArrowIcon from "../icons/ArrowIcon";
import React from "react";

interface PageButtonProps {
  children?: React.ReactNode;
  active?: boolean;
  arrow?: "left" | "right";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
}

export default function PageButton({
  children,
  active = false,
  arrow,
  onClick,
  disabled = false,
  className,
  "aria-label": ariaLabel,
}: PageButtonProps) {
  const isArrow = !!arrow;

  return (
    <button
      type="button"
      className={cn(
        baseStyle,
        active ? activeStyle : inactiveStyle,
        isArrow && "p-0",
        disabled && disabledStyle,
        className
      )}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {isArrow ? <ArrowIcon type={arrow!} color="gray" /> : children}
    </button>
  );
}

const baseStyle =
  "w-[40px] h-[40px] flex items-center justify-center rounded-full text-lg font-semibold font-pretendard transition select-none";
const activeStyle = "bg-[#2f80ed] text-white border-none";
const inactiveStyle =
  "bg-white text-secondary-500 border border-secondary-200 hover:bg-secondary-100";
const disabledStyle = "opacity-50 cursor-not-allowed";
