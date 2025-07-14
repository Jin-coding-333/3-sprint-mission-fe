interface ActionDropdownIconProps {
  onClick?: () => void;
}

export default function ActionDropdownIcon({
  onClick,
}: ActionDropdownIconProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label="메뉴 열기 버튼"
      className="bg-transparent border-none p-0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 cursor-pointer text-secondary-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
        />
      </svg>
    </button>
  );
}
