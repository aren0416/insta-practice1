import { AuthLayout } from "../components/auth/AuthLayout";
import { AuthTitle } from "../components/auth/AuthTitle";
import { BottomBox } from "../components/auth/BottomBox";
import { Button } from "../components/auth/Button";
import { FormBox } from "../components/auth/FormBox";
import { Input } from "../components/auth/Input";
import { PageTitle } from "../components/PageTitle";
import { routes } from "../routes";

export const SignUp = () => {
  return (
    <>
      <PageTitle title="SignUp" />
      <AuthLayout>
        <AuthTitle title="Sign UP" />
        <FormBox>
          <Input type="text" placeholder="이름" />
          <Input type="text" placeholder="성" />
          <Input type="text" placeholder="아이디" />
          <Input type="text" placeholder="이메일" />
          <Input type="password" placeholder="비밀번호" />
          <Button text="회원가입" />
        </FormBox>
        <BottomBox
          cta="아이디가 있으세요?"
          link={routes.home}
          linkText="로그인"
        />
      </AuthLayout>
    </>
  );
};
