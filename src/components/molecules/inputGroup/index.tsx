"use client";

import { FieldValues, Path } from "react-hook-form";
import Input from "@/components/atoms/field/Input";
import Label from "@/components/atoms/field/Label";
import { InputGroupProps } from "./inputGroup.type";
import { INPUT_GROUP_TYPE } from "./constants";
import Icon from "@/components/atoms/icons/Icon";
import EyeIcon from "@/components/atoms/icons/EyeIcon";
import cn from "@/utils/cn";
import { useInputGroup } from "../../../hooks/components/useInputGroup";

export default function InputGroup<T extends FieldValues>({
  type = "email",
  value,
  onChange,
  onKeyDown,
  register,
  validation,
  errors,
  ...props
}: InputGroupProps<T>) {
  const {
    inputValue,
    setInputValue,
    isPasswordVisible,
    setIsPasswordVisible,
    inputType,
  } = useInputGroup(type);

  console.log("errors 메시지: ", errors);

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
          value={type === "tag" ? value : undefined}
          onChange={type === "tag" ? onChange : undefined}
          onKeyDown={onKeyDown}
          placeholder={INPUT_GROUP_TYPE[type].placeholder}
          className={cn(type === "search" && "h-[44px] pl-[44px]")}
          register={register}
          validation={validation}
          errors={errors}
          {...props}
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
      {errors?.message && (
        <p className="text-error text-lg">{errors?.message}</p>
      )}
    </div>
  );
}
