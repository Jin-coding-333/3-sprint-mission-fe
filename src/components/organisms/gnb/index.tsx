import Logo from "@/components/atoms/Logo";
import GNBLoginButton from "@/components/molecules/GNBLoginButton";
import GNBMenu from "@/components/molecules/GNBMevu";

export default function GNB() {
  return (
    <header className={GNBStyle.container}>
      <div className={GNBStyle.content}>
        <div className={GNBStyle.logoWithMenu}>
          <Logo type="gnb" />
          <GNBMenu />
        </div>
        <GNBLoginButton />
      </div>
    </header>
  );
}

const GNBStyle = {
  container:
    "fixed top-0 left-0 right-0 z-50 h-[80px] px-[16px] md:px-[24px] 2md:px-[100px] lg:px-[200px] bg-white opacity-90 shadow-sm",
  content: "flex items-center justify-between h-full",
  logoWithMenu: "flex items-center gap-2 md:gap-[20px] lg:gap-[32px]",
};
