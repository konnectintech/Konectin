import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp, { SignIn } from "./pages/sign";
import { RequireAuth } from "./middleware/signAuth";
import ProtectedRoutes from "./pages/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <RequireAuth>
        <ProtectedRoutes />
      </RequireAuth>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
