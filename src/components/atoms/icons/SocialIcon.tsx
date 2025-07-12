import Image from "next/image";

interface SocialIconProps {
  type: "facebook" | "instagram" | "twitter" | "youtube";
}

export default function SocialIcon({ type }: SocialIconProps) {
  const src = `/icons/ic_${type}.svg`;
  const altText = `${type} 소셜 미디어 아이콘`;

  return <Image src={src} alt={altText} width={24} height={24} />;
}
