import Image from "next/image";

interface EyeIconProps {
  type: "visible" | "invisible";
}

export default function EyeIcon({ type }: EyeIconProps) {
  const src = `/icons/ic_eye-${type}.svg`;

  return <Image src={src} alt="eye icon" width={24} height={24} />;
}
