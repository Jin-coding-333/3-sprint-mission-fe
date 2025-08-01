import SectionIntroContainerBox from './components/SectionIntroContainerBox';
import SectionIntroImage from './components/SectionIntroImage';
import SectionIntroTextBox from './components/SectionIntroTextBox';

export default function ServiceIntro2() {
  return (
    <SectionIntroContainerBox validSection="section2">
      <SectionIntroImage validSection="section2" />
      <SectionIntroTextBox
        validSection="section2"
        badge="Search"
        title="구매를 원하는 상품을 검색하세요"
        description={'구매하고 싶은 물품을 검색해서 \n쉽게 찾아보세요'}
      />
    </SectionIntroContainerBox>
  );
}
