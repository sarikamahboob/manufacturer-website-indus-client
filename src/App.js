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
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import MyProfile from "./Components/Pages/Dashboard/MyProfile";
import AddReview from "./Components/Pages/Dashboard/AddReview";
import MyOrders from "./Components/Pages/Dashboard/MyOrders";
import Users from "./Components/Pages/Dashboard/Users";
import RequireAdmin from "./Components/Authentication/RequireAdmin";
import AddProduct from "./Components/Pages/Dashboard/AddProduct";
import ManageOrders from "./Components/Pages/Dashboard/ManageOrders";
import ManageProducts from "./Components/Pages/Dashboard/ManageProducts";
import Payment from "./Components/Pages/Dashboard/Payment";

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
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route index element={<MyProfile />} />
          <Route path="orders" element={<MyOrders />} />
          <Route path="addreview" element={<AddReview />} />
          <Route path="addreview" element={<AddReview />} />
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addproduct"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageorders"
            element={
              <RequireAdmin>
                <ManageOrders />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageproducts"
            element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
