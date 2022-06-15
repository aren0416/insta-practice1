import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { loginUser } from "../apollo";
import { AuthLayout } from "../components/auth/AuthLayout";
import { AuthTitle } from "../components/auth/AuthTitle";
import { BottomBox } from "../components/auth/BottomBox";
import { Button } from "../components/auth/Button";
import { FormBox } from "../components/auth/FormBox";
import { FormError } from "../components/auth/FormError";
import { Input } from "../components/auth/Input";
import { PageTitle } from "../components/PageTitle";
import { routes } from "../routes";

const LOGIN_MUTAION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
  });

  const onCompleted = (data) => {
    const {
      login: { ok, token, error },
    } = data;

    if (!ok) {
      setError("results", {
        message: error,
      });
    }
    if (token) {
      console.log(token);
      loginUser(token);
    }
  };

  const [login, { loading }] = useMutation(LOGIN_MUTAION, {
    onCompleted,
  });

  const onSubmit = () => {
    // console.log(getValues());
    if (loading) {
      return;
    }
    const { username, password } = getValues();
    login({
      variables: {
        username,
        password,
      },
    });
  };

  // console.log(errors);
  // console.log(isValid);

  return (
    <>
      <PageTitle title="Login" />
      <AuthLayout>
        <AuthTitle title="Login" />
        <FormBox onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("username", {
              required: "아이디는 필수에요",
              minLength: {
                value: 5,
                message: "아이디는 5글자보다 길어야해요",
              },
            })}
            type="text"
            placeholder="아이디"
          />
          <FormError message={errors?.username?.message} />

          <Input
            {...register("password", {
              required: "비밀번호는 필수에요",
              minLength: {
                value: 8,
                message: "비밀번호는 8글자보다 길어야해요",
              },
              onChange() {
                clearErrors("results");
              },
            })}
            type="password"
            placeholder="비밀번호"
          />
          <FormError message={errors?.password?.message} />

          {errors?.results?.message ? (
            <FormError message={errors?.results?.message} />
          ) : (
            ""
          )}

          <Button opacity={isValid ? "1" : "0.5"} text="로그인" />
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
