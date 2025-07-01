import Image from "next/image";

interface IconProps {
  type:
    | "search"
    | "search_darker"
    | "sort"
    | "plus"
    | "back"
    | "X"
    | "check-blue"
    | "check-red"
    | "arrow_down";
  className?: string;
}

export default function Icon({ type, className }: IconProps) {
  const iconSrc = `/icons/ic_${type}.svg`;

  return (
    <Image
      src={iconSrc}
      alt={`${type} icon`}
      width={24}
      height={24}
      className={className}
    />
  );
}
