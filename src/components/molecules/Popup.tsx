import cn from "@/utils/cn";
import Button from "@/components/atoms/button/Button";
import Icon from "@/components/atoms/icons/Icon";

interface PopupProps {
  variant: "primary" | "danger";
  noClick?: () => void;
  yesClick?: () => void;
  children: React.ReactNode;
}

export default function Popup({
  variant,
  noClick,
  yesClick,
  children,
}: PopupProps) {
  const PrimaryButtons = [
    { label: "아니요", variant: "secondary", onClick: noClick },
    { label: "확인", variant: "primary", onClick: yesClick },
  ];

  const DangerButtons = [
    { label: "취소", variant: "outline", onClick: noClick },
    { label: "네", variant: "danger", onClick: yesClick },
  ];

  const PopupButtons = variant === "primary" ? PrimaryButtons : DangerButtons;

  return (
    <div
      className={PopupStyle.PopupPosition}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div
        className={cn(
          "flex flex-col items-center justify-center pt-[5px] bg-white rounded-[12px] shadow-lg ",
          PopupStyle.PopupBoxSize
        )}
      >
        <Icon type={`check_${variant === "primary" ? "blue" : "red"}`} />
        <h1 id="popup-title" className={cn("mt-[20px]", PopupStyle.textStyle)}>
          {children}
        </h1>
        <div className="flex items-center justify-center gap-4">
          {PopupButtons.map((button) => {
            return (
              <Button
                key={button.label}
                styleVariant={
                  button.variant as
                    | "primary"
                    | "danger"
                    | "secondary"
                    | "outline"
                }
                shape="rectangle"
                className={PopupStyle.buttonStyle}
                onClick={button.onClick}
              >
                {button.label}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const PopupStyle = {
  PopupPosition:
    "fixed top-[20%] left-0 right-0 z-20 flex flex-col items-center justify-center",
  PopupBoxSize: "w-[300px] h-[205px]",
  textStyle: "text-secondary-800 text-lg md:text-2lg",
  buttonStyle: "w-[90px] h-[50px] mt-[20px]",
};
