interface BackdropProps {
  children: React.ReactNode;
}

// 모달 또는 팝업 컴포넌트 나올 때 뒷 배경
export default function Backdrop({ children }: BackdropProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-20 bg-black/70">
      <div>{children}</div>
    </div>
  );
}
