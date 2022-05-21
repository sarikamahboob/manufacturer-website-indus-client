import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Shared/Header";
import Footer from "./Components/Shared/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import SignIn from "./Components/Authentication/SignIn";
import SignUp from "./Components/Authentication/SignUp";
import Blogs from "./Components/Pages/Blogs";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div data-theme={dark ? "dark" : "light"}>
      <Header dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
