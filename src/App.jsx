import Header from "./layouts/header";
import Main from "./layouts/main";
import Footer from "./layouts/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp, { SignIn } from "./pages/sign";
import { RequireAuth } from "./middleware/signAuth";

function App() {
  return (
 main
    <div className="bg-primaryBg app">
      {/* <Header /> */}
      <Main />
      {/* <Footer /> */}

    <div className="bg-primaryBg">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Header />
                <Main />
                <Footer />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
>>> main
    </div>
  );
}

export default App;
