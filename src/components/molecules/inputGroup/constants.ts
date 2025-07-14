import { InputGroupTypeItem } from "./inputGroup.type";

export const INPUT_GROUP_TYPE: Record<string, InputGroupTypeItem> = {
  email: {
    label: "이메일",
    placeholder: "이메일을 입력해주세요",
    inputType: "email",
  },
  password: {
    label: "비밀번호",
    placeholder: "비밀번호를 입력해주세요",
    inputType: "password",
  },
  checkPassword: {
    label: "비밀번호 확인",
    placeholder: "비밀번호를 다시 한 번 입력해주세요",
    inputType: "password",
  },
  nickname: {
    label: "닉네임",
    placeholder: "닉네임을 입력해주세요",
    inputType: "text",
  },
  prodName: {
    label: "상품명",
    placeholder: "상품명을 입력해주세요",
    inputType: "text",
  },
  prodPrice: {
    label: "판매가격",
    placeholder: "판매 가격을 입력해주세요",
    inputType: "number",
  },
  tag: {
    label: "태그",
    placeholder: "태그를 입력해주세요",
    inputType: "text",
  },
  search: {
    label: "",
    placeholder: "검색할 상품을 입력해주세요",
    inputType: "text",
  },
};
