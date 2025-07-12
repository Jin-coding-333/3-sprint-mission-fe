interface ErrorMessageProps {
  children: React.ReactNode;
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return <span className="mt-[8px] text-lg text-error">{children}</span>;
}
