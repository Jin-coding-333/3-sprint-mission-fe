import Link from "next/link";
import GNBMenuText from "../atoms/GNBMenuText";

export default function GNBMenu() {
  return (
    <nav className="flex items-center gap-[8px]">
      <Link href="/">
        <GNBMenuText text="자유게시판" />
      </Link>
      <Link href="/">
        <GNBMenuText text="중고마켓" />
      </Link>
    </nav>
  );
}
