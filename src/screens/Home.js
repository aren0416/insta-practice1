import { logoutUser } from "../apollo";
import { PageTitle } from "../components/PageTitle";

export const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      home
      <button onClick={() => logoutUser()}>로그아웃</button>
    </>
  );
};
