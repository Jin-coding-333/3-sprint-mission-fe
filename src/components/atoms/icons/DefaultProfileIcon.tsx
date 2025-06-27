import Image from "next/image";

interface DefaultProfileIconProps {
  size?: number;
}

export default function DefaultProfileIcon({
  size = 40,
}: DefaultProfileIconProps) {
  return (
    <Image
      src="/icons/ic_default-profile.svg"
      alt="default profile icon"
      width={size}
      height={size}
    />
  );
}
