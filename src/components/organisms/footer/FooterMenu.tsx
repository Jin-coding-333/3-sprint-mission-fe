import cn from "@/utils/cn";

export default function FooterMenu({ className }: { className?: string }) {
  return (
    <div className={cn(FooterMenuStyle.menu, className)}>
      <span className={cn(FooterMenuStyle.menuText, "mr-[30px]")}>
        Privacy Policy
      </span>
      <span className={FooterMenuStyle.menuText}>FAQ</span>
    </div>
  );
}

const FooterMenuStyle = {
  menu: "flex items-center justify-between",
  menuText: "text-secondary-200",
};
