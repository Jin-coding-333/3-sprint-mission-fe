import cn from '@/utils/cn';

interface SectionIntroTextBoxProps {
  validSection?: 'section1' | 'section2' | 'section3';
  badge: string;
  title: string | React.ReactNode;
  description: string;
  className?: string;
}

export default function SectionIntroTextBox({
  validSection,
  badge,
  title,
  description,
  className,
}: SectionIntroTextBoxProps) {
  return (
    <div
      className={cn(
        SectionIntroTextBoxStyle.container,
        validSection === 'section2' ? SectionIntroTextBoxStyle.section2 : '',
        className
      )}
    >
      {/* Badge */}
      <span className={cn(SectionIntroTextBoxStyle.badge)}>{badge}</span>

      {/* Big Text */}
      <h2 className={cn(SectionIntroTextBoxStyle.title)}>{title}</h2>

      {/* Small Text */}
      <span className={cn(SectionIntroTextBoxStyle.description)}>{description}</span>
    </div>
  );
}

const SectionIntroTextBoxStyle = {
  container: 'w-[330px] h-[275px] flex flex-col gap-2',
  badge: 'text-lg md:text-2lg text-primary-100 font-bold',
  title:
    'mb-2 md:text:3xl lg:text-[40px] text-2xl lg:leading-normal font-bold text-secondary-700 w-[330px] lg:break-words lg:whitespace-pre-line',
  description:
    'text-secondary-700 text-lg md:text-2lg lg:text-2xl w-[290px] break-words whitespace-pre-line',
  section2: 'items-end text-right',
};
