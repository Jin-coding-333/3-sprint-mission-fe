import AuthLayout from "@/pages/auth/components/AuthLayout";
import SignUpFormGroup from "@/pages/auth/components/SignUpFormGroup";

export default function SignUp() {
  return (
    <AuthLayout type="signUp">
      <SignUpFormGroup />
    </AuthLayout>
  );
}
