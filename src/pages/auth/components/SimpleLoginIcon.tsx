import Image from 'next/image';

interface SimpleLoginIconProps {
  type: 'google' | 'kakao';
}

export default function SimpleLoginIcon({ type }: SimpleLoginIconProps) {
  return (
    <Image src={`/icons/ic_login_${type}.svg`} alt={`${type} icon image`} width={42} height={42} />
  );
}
