import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../components/auth/AuthLayout";
import { AuthTitle } from "../components/auth/AuthTitle";
import { BottomBox } from "../components/auth/BottomBox";
import { Button } from "../components/auth/Button";
import { FormBox } from "../components/auth/FormBox";
import { FormError } from "../components/auth/FormError";
import { Input } from "../components/auth/Input";
import { PageTitle } from "../components/PageTitle";
import { routes } from "../routes";

const CREATE_ACCOUNT_MUTAION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

export const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onCompleted = (data) => {
    console.log(data);
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) {
      return;
    }
    navigate(routes.home);
  };

  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTAION, {
    onCompleted,
  });

  const onSubmit = (data) => {
    if (loading) {
      return;
    }
    createAccount({
      variables: { ...data },
    });
  };

  console.log(errors);

  return (
    <>
      <PageTitle title="SignUp" />
      <AuthLayout>
        <AuthTitle title="Sign UP" />
        <FormBox onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("firstName", {
              required: "이름은 필수에요",
            })}
            type="text"
            placeholder="이름"
          />
          <FormError message={errors?.firstName?.message} />

          <Input {...register("lastName")} type="text" placeholder="성" />

          <Input
            {...register("username", {
              required: "아이디는 필수에요",
              minLength: {
                value: 5,
                message: "아이디는 5자리 이상 적어야해요",
              },
            })}
            type="text"
            placeholder="아이디"
          />
          <FormError message={errors?.username?.message} />

          <Input
            {...register("email", {
              required: "이메일은 필수에요",
            })}
            type="text"
            placeholder="이메일"
          />
          <FormError message={errors?.email?.message} />

          <Input
            {...register("password", {
              required: "비밀번호는 필수에요",
              minLength: {
                value: 8,
                message: "비밀번호는 8자리 이상 적어주세요",
              },
            })}
            type="password"
            placeholder="비밀번호"
          />
          <FormError message={errors?.password?.message} />

          <Input
            {...register("re_password", {
              required: "비밀번호 확인은 필수에요",
              minLength: {
                value: 8,
                message: "비밀번호는 8자리 이상 적어주세요",
              },
            })}
            type="password"
            placeholder="비밀번호 확인"
          />
          <FormError message={errors?.re_password?.message} />

          <Button opacity={isValid ? "1" : "0.5"} text="회원가입" />
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
