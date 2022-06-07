import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./screens/Home";
import { NotFound } from "./screens/NotFound";
import { SignUp } from "./screens/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.signUp} element={<SignUp />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
