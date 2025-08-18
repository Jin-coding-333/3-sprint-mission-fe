import cn from "@/utils/cn";
import Button from "../atoms/button/Button";
import Link from "next/link";

export default function GNBLoginButton({ className }: { className?: string }) {
  return (
    <Link href="/auth/log-in">
      <Button
        styleVariant="primary"
        shape="rectangle"
        className={cn("w-[128px] h-[48px]", className)}
      >
        로그인
      </Button>
    </Link>
  );
}
