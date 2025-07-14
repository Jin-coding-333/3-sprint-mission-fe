"use client";

import { useState } from "react";
import Input from "@/components/atoms/field/Input";
import Label from "@/components/atoms/field/Label";
import { InputGroupProps } from "./inputGroup.type";
import { INPUT_GROUP_TYPE } from "./constants";
import Icon from "@/components/atoms/icons/Icon";
import EyeIcon from "@/components/atoms/icons/EyeIcon";
import cn from "@/utils/cn";

export default function InputGroup({
  type = "email",
  onChange,
}: InputGroupProps) {
  const [inputValue, setInputValue] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <Label
        label={INPUT_GROUP_TYPE[type].label}
        htmlFor={type}
        className={cn(type === "search" && "hidden")}
      />
      <div className="relative">
        <Input
          type={INPUT_GROUP_TYPE[type].inputType}
          id={type}
          name={type}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
