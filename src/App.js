import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Shared/Header";
import Footer from "./Components/Shared/Footer";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Components/Authentication/SignIn";
import SignUp from "./Components/Authentication/SignUp";
import Blogs from "./Components/Pages/Blogs";
import { useState } from "react";
import Home from "./Components/Pages/Home/Home";
import NotFound from "./Components/Shared/NotFound";
import Purchase from "./Components/Pages/Purchase/Purchase";
import PrivateRoute from "./Components/Authentication/PrivateRoute";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div data-theme={dark ? "dark" : "light"}>
      <Header dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/purchase/:id"
          element={
            <PrivateRoute>
              <Purchase />
            </PrivateRoute>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
