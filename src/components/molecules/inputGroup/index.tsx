"use client";

import { FieldValues, Path } from "react-hook-form";
import { InputGroupProps } from "./inputGroup.type";
import { INPUT_GROUP_TYPE } from "./constants";
import { useInputGroup } from "../../../hooks/components/useInputGroup";
import Input from "@/components/atoms/field/Input";
import Label from "@/components/atoms/field/Label";
import Icon from "@/components/atoms/icons/Icon";
import EyeIcon from "@/components/atoms/icons/EyeIcon";
import cn from "@/utils/cn";
import ErrorMessage from "@/components/atoms/field/ErrorMessage";

export default function InputGroup<T extends FieldValues>({
  type = "email",
  value,
  validation,
  errors,
  onChange,
  onKeyDown,
  register,
}: InputGroupProps<T>) {
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
          name={type as any as Path<T>}
          value={type === "tag" ? value : inputValue}
          onChange={(e) =>
            type === "tag" ? onChange?.(e) : setInputValue(e.target.value)
          }
          onKeyDown={onKeyDown}
          placeholder={INPUT_GROUP_TYPE[type].placeholder}
          className={cn(
            errors && "border border-red-500",
            type === "search" && "h-[44px] pl-[44px]"
          )}
          register={register}
          validation={validation}
        />
        {type === "search" && (
          <button type="button">
            <Icon
              type="search"
              className="absolute bottom-[9px] left-[16px] w-[24px] h-[24px]"
            />
          </button>
        )}
        {(type === "password" || type === "passwordConfirmation") && (
          <EyeIcon
            type={isPasswordVisible ? "visible" : "invisible"}
            className={cn("absolute right-[24px]")}
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          />
        )}
      </div>
      {errors && <ErrorMessage>{errors.message}</ErrorMessage>}
    </div>
  );
}
