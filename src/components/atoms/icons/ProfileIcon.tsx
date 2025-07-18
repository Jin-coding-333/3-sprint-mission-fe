import Image from "next/image";

interface ProfileIcon {
  size?: number;
}

export default function ProfileIcon({
  size = 40,
}: ProfileIcon) {
  return (
    <Image
      src="/icons/ic_default-profile.svg"
      alt="default profile icon"
      width={size}
      height={size}
    />
  );
}
