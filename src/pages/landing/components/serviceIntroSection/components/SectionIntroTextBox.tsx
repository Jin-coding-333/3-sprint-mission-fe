import cn from "@/utils/cn";

interface SectionIntroTextBoxProps {
  badge: string;
  title: string;
  description: string;
  textColor: string;
  className?: string;
}

export default function SectionIntroTextBox({
  badge,
  title,
  description,
  className,
}: SectionIntroTextBoxProps) {
  return (
    <div className={cn("w-full h-fit", className)}>
      <div className={cn("flex flex-col gap-2")}>
        <span className="text-lg md:text-2lg text-primary-100">{badge}</span>
        <span className="mb-2 md:text:3xl text-2xl font-bold text-secondary-700">
          {title}
        </span>
        <span className="text-secondary-700 text-lg md:text-2lg">
          {description}
        </span>
      </div>
    </div>
  );
}
