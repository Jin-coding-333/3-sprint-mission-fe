import { useState } from "react";
import { INPUT_GROUP_TYPE } from "../../components/molecules/inputGroup/constants";

export function useInputGroup<T extends string>(type: T) {
  const [inputValue, setInputValue] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const inputType =
    type === "password" || type === "passwordConfirmation"
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
