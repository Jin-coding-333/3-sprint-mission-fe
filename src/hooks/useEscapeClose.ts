import { useEffect } from "react";

/**
 * ESC 키를 누르면 콜백 함수 실행
 * @param callback 콜백 함수, 컴포넌트 상태 변경 함수
 */
export const useEscapeClose = (callback: () => void) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [callback]);
};
