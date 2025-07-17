import cn from "@/utils/cn";
import Button from "../atoms/button/Button";
import Link from "next/link";

export default function GNBLoginButton() {
  return (
    <Link href="/login">
      <Button
        styleVariant="primary"
        shape="rectangle"
        className={cn("w-[128px] h-[48px]")}
      >
        로그인
      </Button>
    </Link>
  );
}
