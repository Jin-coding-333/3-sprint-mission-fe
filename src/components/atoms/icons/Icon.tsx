import Image from "next/image";

interface IconProps {
  type:
    | "search"
    | "search_darker"
    | "sort"
    | "plus"
    | "back"
    | "x"
    | "check_blue"
    | "check_red"
    | "arrow_down";
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
  role?: string;
  ariaLabel?: string;
}

export default function Icon({
  type,
  className,
  width = 24,
  height = 24,
  alt,
  role = "img",
  ariaLabel,
}: IconProps) {
  const iconSrc = `/icons/ic_${type}.svg`;

  const altText = alt || `${type} 아이콘`;

  return (
    <Image
      src={iconSrc}
      alt={altText}
      width={width}
      height={height}
      className={className}
      role={role}
      aria-label={ariaLabel || altText}
    />
  );
}
