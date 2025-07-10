import Backdrop from "@/components/atoms/Backdrop";
import cn from "@/utils/cn";
import Button from "@/components/atoms/button/Button";

interface PopupProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Popup({ onClick, children }: PopupProps) {
  const PopupStyle = {
    popupBoxSize: "w-[327px] h-[220px] md:w-[540px] md:h-[250px]",
    textStyle: " text-lg md:text-2lg",
    buttonStyle: "w-[120px] h-[50px] md:w-[165px] md:h-[50px] mt-[40px]",
  };

  return (
    <div>
      <Backdrop>
        <div
          className={cn(
            "flex flex-col items-center justify-center bg-white rounded-[12px]",
            PopupStyle.popupBoxSize
          )}
        >
          <h1 className={cn("text-secondary-800", PopupStyle.textStyle)}>
            {children}
          </h1>
          <Button
            variant="primary"
            shape="rectangle"
            className={PopupStyle.buttonStyle}
            onClick={onClick}
          >
            확인
          </Button>
        </div>
      </Backdrop>
    </div>
  );
}
