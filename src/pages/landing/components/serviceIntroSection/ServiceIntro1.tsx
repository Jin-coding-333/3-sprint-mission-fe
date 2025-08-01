import SectionIntroContainerBox from './components/SectionIntroContainerBox';
import SectionIntroImage from './components/SectionIntroImage';
import SectionIntroTextBox from './components/SectionIntroTextBox';

export default function ServiceIntro1() {
  return (
    <SectionIntroContainerBox validSection="section1">
      <SectionIntroImage validSection="section1" />
      <SectionIntroTextBox
        badge="Hot item"
        title={'인기 상품을 \n확인해 보세요'}
        description={'가장 HOT한 중고거래 물품을\n판다 마켓에서 확인해 보세요'}
      />
    </SectionIntroContainerBox>
  );
}
