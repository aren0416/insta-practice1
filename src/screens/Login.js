import { AuthLayout } from "../components/auth/AuthLayout";
import { AuthTitle } from "../components/auth/AuthTitle";
import { BottomBox } from "../components/auth/BottomBox";
import { Button } from "../components/auth/Button";
import { FormBox } from "../components/auth/FormBox";
import { Input } from "../components/auth/Input";
import { PageTitle } from "../components/PageTitle";
import { routes } from "../routes";

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
        <BottomBox
          cta="아이디가 없으세요?"
          link={routes.signUp}
          linkText="회원가입"
        />
      </AuthLayout>
    </>
  );
};
