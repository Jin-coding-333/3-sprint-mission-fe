export default function InputLabel({ label }: { label: string }) {
  return (
    <label className="text-secondary-800 text-lg md:text-2lg mb-[8px] md:mb-[16px]">
      {label}
    </label>
  );
}
