import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { client, isLoggedInVar } from "./apollo";
import { routes } from "./routes";
import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { NotFound } from "./screens/NotFound";
import { SignUp } from "./screens/SignUp";
import { GlobalStyles } from "./styles";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route
              path={routes.home}
              element={isLoggedIn ? <Home /> : <Login />}
            />
            <Route path={routes.signUp} element={<SignUp />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;
