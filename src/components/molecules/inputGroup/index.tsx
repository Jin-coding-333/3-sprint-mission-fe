"use client";

import Input from "@/components/atoms/field/Input";
import Label from "@/components/atoms/field/Label";
import { InputGroupProps } from "./inputGroup.type";
import { INPUT_GROUP_TYPE } from "./constants";
import Icon from "@/components/atoms/icons/Icon";
import EyeIcon from "@/components/atoms/icons/EyeIcon";
import cn from "@/utils/cn";
import { useInputGroup } from "../../../hooks/components/useInputGroup";

export default function InputGroup({
  type = "email",
  value,
  onChange,
  onKeyDown,
}: InputGroupProps) {
  const {
    inputValue,
    setInputValue,
    isPasswordVisible,
    setIsPasswordVisible,
    inputType,
  } = useInputGroup(type);

  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <Label
        labelText={INPUT_GROUP_TYPE[type].label}
        htmlFor={type}
        className={cn(type === "search" && "hidden")}
      />
      <div className="relative">
        <Input
          type={inputType}
          id={type}
          name={type}
          value={type === "tag" ? value : inputValue}
          onChange={(e) =>
            type === "tag" ? onChange?.(e) : setInputValue(e.target.value)
          }
          onKeyDown={onKeyDown}
          placeholder={INPUT_GROUP_TYPE[type].placeholder}
          className={cn(type === "search" && "h-[44px] pl-[44px]")}
        />
        {type === "search" && (
          <button type="button">
            <Icon
              type="search"
              className="absolute bottom-[9px] left-[16px] w-[24px] h-[24px]"
            />
          </button>
        )}
        {(type === "password" || type === "checkPassword") && (
          <EyeIcon
            type={isPasswordVisible ? "visible" : "invisible"}
            className={cn(
              "absolute right-[24px]",
              isPasswordVisible ? "bottom-[20px]" : "bottom-[16px]"
            )}
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          />
        )}
      </div>
    </div>
  );
}
