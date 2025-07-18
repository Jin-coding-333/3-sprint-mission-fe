"use client";

import Backdrop from "@/components/atoms/Backdrop";
import cn from "@/utils/cn";
import Button from "@/components/atoms/button/Button";
import { useRef, useState } from "react";
import { useEscapeClose } from "@/hooks/useEscapeClose";

interface ModalProps {
  onClick?: () => void;
  children: React.ReactNode;
}
/**
 * @param onClick 팝업 확인 버튼 클릭 시 실행 함수
 * @param children 팝업 알림 Text
 */
export default function Modal({ onClick, children }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  useEscapeClose(() => setIsOpen(false));

  const handleClick = () => setIsOpen(false);

  return (
    <div>
      <Backdrop>
        <div
          className={cn(
            "flex flex-col items-center justify-center bg-white rounded-[12px]",
            ModalStyle.modalBoxSize
          )}
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <h1
            className={cn("text-secondary-800", ModalStyle.textStyle)}
            role="heading"
            aria-level={2}
            id="modal-title"
          >
            {children}
          </h1>
          <Button
            styleVariant="primary"
            shape="rectangle"
            className={ModalStyle.buttonStyle}
            onClick={handleClick}
          >
            확인
          </Button>
        </div>
      </Backdrop>
    </div>
  );
}

const ModalStyle = {
  modalBoxSize: "w-[327px] h-[220px] md:w-[540px] md:h-[250px]",
  textStyle: " text-lg md:text-2lg",
  buttonStyle: "w-[120px] h-[50px] md:w-[165px] md:h-[50px] mt-[40px]",
};
