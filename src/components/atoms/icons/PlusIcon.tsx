import Image from "next/image";
import React from "react";

interface PlusIconProps {
  width?: number;
  height?: number;
}

export default function PlusIcon({ width = 46, height = 46 }: PlusIconProps) {
  return (
    <Image
      src="/icons/ic_plus.svg"
      alt="plus icon"
      width={width}
      height={height}
    />
  );
}
