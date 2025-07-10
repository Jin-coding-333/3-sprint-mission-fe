import { ErrorMessageProps } from "./formSection.type";

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return <span className="mt-[8px] text-lg text-error">{children}</span>;
}
