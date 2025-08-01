import cn from '@/utils/cn';

interface SectionIntroContainerBoxProps {
  validSection: 'section1' | 'section2' | 'section3';
  children: React.ReactNode;
}

export default function SectionIntroContainerBox({
  validSection,
  children,
}: SectionIntroContainerBoxProps) {
  return (
    <div className="flex justify-center items-center sm:pt-[60px] md:pt-[100px] lg:py-[140px]">
      <div
        className={cn(
          SectionIntroContainerBoxStyle.content.sm,
          SectionIntroContainerBoxStyle.content.lg,
          validSection === 'section2' ? 'items-end' : ''
        )}
      >
        {children}
      </div>
    </div>
  );
}

const SectionIntroContainerBoxStyle = {
  content: {
    sm: 'flex flex-col justify-center gap-[24px] sm:mx-[15px]',
    lg: 'lg:flex-row lg:flex-reverse lg:justify-between lg:items-center lg:gap-[64px]',
  },
};
