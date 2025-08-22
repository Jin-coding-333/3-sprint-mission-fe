import AuthLayout from "@/pages/auth/components/AuthLayout";
import Button from "@/components/atoms/button/Button";
import InputGroup from "@/components/molecules/inputGroup";

export default function Test() {
  return (
    <div>
      <AuthLayout type="logIn">
        <form className="flex flex-col gap-4">
          <InputGroup type="email" />
          <InputGroup type="password" />
          <Button styleVariant="primary" shape="rectangle">
            Login
          </Button>
        </form>
      </AuthLayout>
    </div>
  );
}
