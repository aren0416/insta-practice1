import { AuthLayout } from "../components/auth/AuthLayout";
import { AuthTitle } from "../components/auth/AuthTitle";
import { Button } from "../components/auth/Button";
import { FormBox } from "../components/auth/FormBox";
import { Input } from "../components/auth/Input";
import { PageTitle } from "../components/PageTitle";

export const Login = () => {
  return (
    <>
      <PageTitle title="Login" />
      <AuthLayout>
        <AuthTitle title="Login" />
        <FormBox>
          <Input type="text" placeholder="아이디" />
          <Input type="password" placeholder="비밀번호" />
          <Button text="로그인" />
        </FormBox>
      </AuthLayout>
    </>
  );
};
