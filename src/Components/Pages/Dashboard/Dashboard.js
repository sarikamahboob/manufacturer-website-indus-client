import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <div class="drawer drawer-mobile ">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <h2 className="text-4xl font-bold text-center my-8 text-accent font-saira ">
            Welcome to your Dashboard !!!
          </h2>
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-48 bg-accent text-base-content ">
            {user && (
              <li
                className="bg-white rounded-2xl 
           "
              >
                <Link
                  to="/dashboard"
                  className="text-accent font-bold text-2xl font-saira"
                >
                  Your Profile
                </Link>
              </li>
            )}
            {!admin && (
              <div>
                <li className="bg-white rounded-2xl mt-4">
                  <Link
                    to="/dashboard/orders"
                    className="text-accent font-bold text-2xl font-saira"
                  >
                    Your Orders
                  </Link>
                </li>
                <li className="bg-white rounded-2xl mt-4">
                  <Link
                    to="/dashboard/addreview"
                    className="text-accent font-bold text-2xl font-saira"
                  >
                    Add Review
                  </Link>
                </li>
              </div>
            )}
            {admin && (
              <>
                <li className="bg-white rounded-2xl mt-4">
                  <Link
                    className="text-accent font-bold text-2xl font-saira"
                    to="/dashboard/users"
                  >
                    Make Admin
                  </Link>
                </li>
                <li className="bg-white rounded-2xl mt-4">
                  <Link
                    className="text-accent font-bold text-2xl font-saira"
                    to="/dashboard/addproduct"
                  >
                    Add Product
                  </Link>
                </li>
                <li className="bg-white rounded-2xl mt-4">
                  <Link
                    className="text-accent font-bold text-2xl font-saira"
                    to="/dashboard/manageorders"
                  >
                    Manage Orders
                  </Link>
                </li>
                <li className="bg-white rounded-2xl mt-4">
                  <Link
                    className="text-accent font-bold text-2xl font-saira"
                    to="/dashboard/manageproducts"
                  >
                    Manage Parts
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
