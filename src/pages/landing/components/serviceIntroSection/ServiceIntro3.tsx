import SectionIntroContainerBox from './components/SectionIntroContainerBox';
import SectionIntroImage from './components/SectionIntroImage';
import SectionIntroTextBox from './components/SectionIntroTextBox';

export default function ServiceIntro3() {
  return (
    <SectionIntroContainerBox validSection="section3">
      <SectionIntroImage validSection="section3" />
      <SectionIntroTextBox
        badge="Register"
        title="판매를 원하는 상품을 등록하세요"
        description={'어떤 물건이든 판매하고 싶은 상품을\n쉽게 등록하세요'}
      />
    </SectionIntroContainerBox>
  );
}
