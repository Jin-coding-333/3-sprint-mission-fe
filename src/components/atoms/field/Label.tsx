interface LabelProps {
  label: string;
  htmlFor?: string;
}
export default function Label({ label, htmlFor }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-secondary-800 text-lg md:text-2lg mb-[8px] md:mb-[16px]"
    >
      {label}
    </label>
  );
}
