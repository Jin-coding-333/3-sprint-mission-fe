import cn from '@/utils/cn';
import Image from 'next/image';

export default function BottomSection() {
  return (
    <section className={BottomSectionStyle.container}>
      <div
        className={cn(
          'flex justify-between items-center',
          BottomSectionStyle.content.sm,
          BottomSectionStyle.content.md,
          BottomSectionStyle.content.lg
        )}
      >
        <h1
          className={cn(
            'flex gap-[15px] font-bold text-secondary-700',
            BottomSectionStyle.text.sm,
            BottomSectionStyle.text.md,
            BottomSectionStyle.text.lg
          )}
        >
          <span>믿을 수 있는</span>
          <span>판다마켓 중고 거래</span>
        </h1>
        {/* 이미지 컴포넌트 */}
        <Image
          src="/imgs/Img_home_bottom.svg"
          alt="랜딩 페이지 Bottom 이미지"
          width={746}
          height={397}
          className={cn('min-w-[375px] h-[198px] md:w-[744px] md:h-[397px] lg:w-[746px]')}
          priority
        />
      </div>
    </section>
  );
}

const BottomSectionStyle = {
  container: 'flex justify-center items-end bg-[#cfe5ff] pt-[120px] md:pt-[200px] lg:pt-[143px]',
  content: {
    sm: 'sm:flex-col sm:gap-[130px]',
    md: 'md:flex-col md:gap-[217px]',
    lg: 'lg:flex-row lg:gap-[70px]',
  },
  text: {
    sm: 'flex-col justify-center items-center sm:text-3xl w-[300px]',
    md: 'md:text-[40px]',
    lg: 'lg:items-start lg:text-[40px]',
  },
};
