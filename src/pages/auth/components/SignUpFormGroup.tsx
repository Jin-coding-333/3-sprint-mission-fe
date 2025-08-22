"use client";

import Button from "@/components/atoms/button/Button";
import InputGroup from "@/components/molecules/inputGroup";
import { useForm, FieldErrors, FieldValues, FieldError } from "react-hook-form";
import { useSignUp } from "@/hooks/auth/useAuth";
import { SignUpCredentials } from "@/services/auth/authApi";

export default function SignUpFormGroup() {
  const { mutate: signUp } = useSignUp();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    shouldFocusError: true,
  });

  const password = watch("password");

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    signUp(data as SignUpCredentials);
  };

  const onError = (errors: FieldErrors) => {
    console.log("Validation errors:", errors);
  };

  return (
    <form
      className="w-full flex flex-col gap-6"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <InputGroup
        type="email"
        register={register}
        validation={{
          required: "이메일을 입력해주세요",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "이메일 형식이 올바르지 않습니다",
          },
        }}
        errors={errors.email as FieldError}
      />
      <InputGroup
        type="nickname"
        register={register}
        validation={{
          required: "닉네임을 입력해주세요",
          minLength: {
            value: 2,
            message: "닉네임은 최소 2자 이상이어야 합니다",
          },
          maxLength: {
            value: 10,
            message: "닉네임은 최대 10자까지 가능합니다",
          },
        }}
        errors={errors.nickname as FieldError}
      />
      <InputGroup
        type="password"
        register={register}
        validation={{
          required: "비밀번호를 입력해주세요",
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message:
              "비밀번호는 최소 8자리 이상이며 영문자와 숫자가 포함되어야 합니다",
          },
        }}
        errors={errors.password as FieldError}
      />
      <InputGroup
        type="checkPassword"
        register={register}
        validation={{
          required: "비밀번호 확인을 입력해주세요",
          validate: (value: string) =>
            value === password || "비밀번호가 일치하지 않습니다",
        }}
        errors={errors.passwordConfirmation as FieldError}
      />
      <Button
        type="submit"
        styleVariant="primary"
        shape="round"
        className="w-full"
        disabled={!isValid}
      >
        회원가입
      </Button>
    </form>
  );
}
