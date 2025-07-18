import SocialIcon from "@/components/atoms/icons/SocialIcon";
import FooterMenu from "./FooterMenu";

export default function Footer() {
  return (
    <footer className={FooterStyle.container}>
      <div className={FooterStyle.content}>
        <span className={FooterStyle.logo}>©codeit - 2025</span>
        <FooterMenu />
        <div className={FooterStyle.social}>
          <a href="https://www.facebook.com" target="_blank">
            <SocialIcon type="facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <SocialIcon type="twitter" />
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <SocialIcon type="youtube" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <SocialIcon type="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}

const FooterStyle = {
  container:
    "flex justify-center items-start pt-[32px] px-[16px] md:px-[24px] 2md:px-[100px] lg:px-[200px] bg-secondary-900 w-full h-[160px]",
  content: "flex justify-between w-full",
  logo: "text-secondary-400 font-regular text-lg",
  social: "flex items-center gap-[12px]",
};
