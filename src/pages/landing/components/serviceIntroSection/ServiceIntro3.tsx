import SectionIntroImage from "./components/SectionIntroImage";
import SectionIntroTextBox from "./components/SectionIntroTextBox";

export default function ServiceIntro3() {
  return (
    <div className="flex justify-center items-center h-[470px]">
      <div className="flex justify-between items-start">
        <SectionIntroImage validSection="section3" />
        <SectionIntroTextBox
          badge="Hot item"
          title="인기 상품을 확인해 보세요"
          description="가장 HOT한 중고거래 물품을
판다 마켓에서 확인해 보세요"
        />
      </div>
    </div>
  );
}
