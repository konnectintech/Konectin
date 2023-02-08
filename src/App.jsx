import Header from "./layouts/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp, { SignIn } from "./pages/sign";
import { RequireAuth } from "./middleware/signAuth";
import Landing from "./pages/landing";
import ResumeBuilder from "./pages/resume";

function App() {
  return (
    <BrowserRouter>
      <RequireAuth>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/resume" element={<ResumeBuilder />} />
        </Routes>
      </RequireAuth>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
