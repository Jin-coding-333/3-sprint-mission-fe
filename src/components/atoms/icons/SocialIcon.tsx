import Image from "next/image";

interface SocialIconProps {
  type: "facebook" | "instagram" | "twitter" | "youtube";
}

export default function SocialIcon({ type }: SocialIconProps) {
  const src = `/icons/ic_${type}.svg`;

  return <Image src={src} alt="social icon" width={24} height={24} />;
}
