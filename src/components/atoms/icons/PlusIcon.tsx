import Image from "next/image";

export default function PlusIcon() {
  const src = `/icons/ic_plus.svg`;

  return <Image src={src} alt="plus icon" width={46} height={46} />;
}
