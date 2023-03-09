import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading";
import DeleteModal from "./DeleteModal";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [userOrders, setUserOrders] = useState([]);
  const navigate = useNavigate();
  const [deleteOrder, setDeleteOrder] = useState(null);
  const email = user.email;

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`https://manufacturer-website-indus-server.onrender.com/orders?email=${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  // useEffect(() => {
  //   const email = user.email;

  //   try {
  //     // fetch(`https://manufacturer-website-indus-server.onrender.com/orders?email=${email}`, {
  //     //   headers: {
  //     //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     //   },
  //     // })
  //     //   .then((res) => res.json())
  //     //   .then((data) => {
  //     //     setUserOrders(data);
  //     //     setIsReload(!isReload);
  //     //     console.log(data);
  //     //   });
  //   } catch (error) {
  //     console.log(error.message);
  //     if (error.response.status === 401 || error.response.status === 403) {
  //       signOut(auth);
  //       navigate("/login");
  //     }
  //   }
  // }, [user]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8 text-accent font-saira ">
        Your All Orders
      </h1>
      <div class="overflow-x-auto">
        <table class="table w-full font-roboto">
          <thead>
            <tr>
              <th></th>
              <th>Parts Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Payment/Delete</th>
            </tr>
          </thead>
          {orders.map((order, index) => (
            <tbody>
              <tr>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>${order.price}</td>
                <td>{order.quantity}</td>
                <td>
                  {order.price && !order.paid && (
                    <div>
                      <Link to={`/dashboard/payment/${order._id}`}>
                        <button className="btn btn-xs btn-success">Pay</button>
                      </Link>
                      <label
                        for="delete-modal"
                        class="btn btn-xs btn-accent ml-2"
                        onClick={() => setDeleteOrder(order._id)}
                      >
                        Delete
                      </label>
                      {deleteOrder && (
                        <DeleteModal
                          refetch={refetch}
                          deleteOrder={deleteOrder}
                        ></DeleteModal>
                      )}
                    </div>
                  )}

                  {order.price && order.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">
                          {order.transactionId}
                        </span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
