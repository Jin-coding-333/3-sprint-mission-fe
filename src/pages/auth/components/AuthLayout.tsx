import Image from 'next/image';
import Link from 'next/link';
import SimpleLoginIcon from './SimpleLoginIcon';

interface AuthLayoutProps {
  children: React.ReactNode;
  type: 'login' | 'signup';
}

export default function AuthLayout({ children, type }: AuthLayoutProps) {
  return (
    <div className={AuthLayoutStyle.container}>
      <div className="flex flex-col items-center">
        <Link href="/">
          <Image
            src="/imgs/img_main-logo.svg"
            alt="랜딩 페이지 Hero 이미지"
            width={400}
            height={135}
            className="mb-[40px]"
          />
        </Link>
        {children}
        <div className={AuthLayoutStyle.simpleLoginBox}>
          <span className="text-lg font-medium text-secondary-800">간편 로그인하기</span>
          <div className="flex gap-[16px]">
            <SimpleLoginIcon type="google" />
            <SimpleLoginIcon type="kakao" />
          </div>
        </div>
        <p className="text-md font-medium text-secondary-800">
          {type === 'login' ? '판다마켓이 처음이신가요? ' : '이미 회원이신가요? '}
          <Link
            href={type === 'login' ? '/auth/signup' : '/auth/login'}
            className="text-primary-100"
          >
            {type === 'login' ? '회원가입' : '로그인'}
          </Link>
        </p>
      </div>
    </div>
  );
}

const AuthLayoutStyle = {
  container: 'w-screen h-screen flex justify-center items-center',
  simpleLoginBox:
    'w-full h-[75px] flex items-center justify-between my-[24px] px-[23px] py-[16px] bg-[#E6F2FF] border border-[#F3F4F6] rounded-[8px]',
};
