interface GNBMenuTextProps {
  text: string;
}

export default function GNBMenuText({ text }: GNBMenuTextProps) {
  return <span className={GNBMenuTextStyle.container}>{text}</span>;
}

const GNBMenuTextStyle = {
  container:
    "flex items-center cursor-pointer w-[56px] h-[70px] md:w-[108px] md:h-[68px] text-lg md:text-2lg text-secondary-600 hover:text-primary-100 font-bold transition-colors duration-200",
};
