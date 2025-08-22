"use client";

import Button from "@/components/atoms/button/Button";
import InputGroup from "@/components/molecules/inputGroup";
import { useForm, FieldErrors, FieldValues, FieldError } from "react-hook-form";
import { useSignIn } from "@/hooks/auth/useAuth";
import { LogInCredentials } from "@/services/auth/authApi";

export default function LogInFormGroup() {
  const { mutate: signIn } = useSignIn();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    shouldFocusError: true,
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    signIn(data as LogInCredentials);
  };

  const onError = (errors: FieldErrors) => {
    console.log("hello");
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
        type="password"
        register={register}
        validation={{
          required: "비밀번호를 입력해주세요",
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, // 최소 8자리, 영문자와 숫자가 포함된 패턴
            message:
              "비밀번호는 최소 8자리 이상이며 영문자와 숫자가 포함되어야 합니다",
          },
        }}
        errors={errors.password as FieldError}
      />
      <Button
        type="submit"
        styleVariant="primary"
        shape="round"
        className="w-full"
        disabled={!isValid}
      >
        로그인
      </Button>
    </form>
  );
}
