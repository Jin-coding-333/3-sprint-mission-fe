import Button from '@/components/atoms/button/Button';
import cn from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className={cn(NotFoundStyle.container)}>
      <div className={cn(NotFoundStyle.content)}>
        <Image
          src="/imgs/not-found/not_found_img.png"
          alt="not found page 404 image"
          width={400}
          height={400}
          className={cn('pb-[70px]', NotFoundStyle.numberImg)}
          priority
        />
        <div className={cn('relative', NotFoundStyle.pandaContainer)}>
          <Image
            src="/imgs/not-found/not_found_panda_img.png"
            alt="not found page panda image"
            width={700}
            height={800}
            className={cn(NotFoundStyle.pandaImg)}
            priority
          />
          <span
            className={cn(
              'absolute text-center text-white font-bold',
              NotFoundStyle.text.base,
              NotFoundStyle.text.sm,
              NotFoundStyle.text.md,
              NotFoundStyle.text.lg
            )}
          >
            This is not the web page <br /> you are looking for.
          </span>
          <Link href="/">
            <Button
              styleVariant="primary"
              shape="round"
              disabled={false}
              className={cn(NotFoundStyle.button.base, NotFoundStyle.button.lg)}
              children="홈으로 돌아가기"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

const NotFoundStyle = {
  container: 'w-full h-full flex items-center justify-center py-[30px]',
  content: 'relative flex flex-col justify-center items-center w-full',
  numberImg: 'w-[300px] md:w-[400px] lg:w-[500px]',
  pandaContainer: 'translate-x-[60px] translate-y-[-200px] w-[700px] md:w-[800px] lg:w-[1000px]',
  pandaImg: 'w-full',
  text: {
    base: 'w-[230px] top-[28%] left-[35%] -translate-x-[45%] -translate-y-[25%]',
    sm: 'text-[20px]',
    md: 'md:w-[400px] md:text-[30px]',
    lg: 'lg:w-[600px] lg:text-[40px]',
  },
  button: {
    base: 'absolute bottom-[60px] left-[55%] translate-x-[-100%] translate-y-[-50%] w-[350px] h-[60px] text-xl font-bold',
    lg: 'lg:w-[410px] lg:h-[63px] lg:text-2xl lg:font-bold lg:translate-x-[-105%] lg:translate-y-[-78%]',
  },
};
