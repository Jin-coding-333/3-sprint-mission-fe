import { useState } from "react";
import { INPUT_GROUP_TYPE } from "../../components/molecules/inputGroup/constants";

export function useInputGroup(type: string) {
  const [inputValue, setInputValue] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const inputType =
    type === "password" || type === "checkPassword"
      ? isPasswordVisible
        ? "text"
        : "password"
      : INPUT_GROUP_TYPE[type].inputType;

  return {
    inputValue,
    setInputValue,
    isPasswordVisible,
    setIsPasswordVisible,
    inputType,
  };
}
