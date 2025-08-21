import AuthLayout from "@/pages/auth/components/AuthLayout";
import LogInFormGroup from "@/pages/auth/components/LogInFormGroup";

export default function LogIn() {
  return (
    <AuthLayout type="logIn">
      <LogInFormGroup />
    </AuthLayout>
  );
}
