import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import AllOrders from "./AllOrders";
import DeleteAllOrder from "./DeleteAllOrder";
import MyOrders from "./MyOrders";

const ManageOrders = () => {
  const [deletingOrder, setDeletingOrder] = useState(null);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("allorder", () =>
    fetch("http://localhost:5000/allorder", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="font-saira text-accent text-3xl text-center font-bold my-14">
        All Client Orders
      </h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Client Name</th>
              <th>Client Email</th>
              <th>Client Number</th>
              <th>Parts Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Payment Status</th>
              <th>Order Status</th>
              <th>Delete Order</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <AllOrders
                key={order._id}
                order={order}
                index={index}
                refetch={refetch}
                setDeletingOrder={setDeletingOrder}
              ></AllOrders>
            ))}
          </tbody>
        </table>
      </div>
      {deletingOrder && (
        <DeleteAllOrder
          deletingOrder={deletingOrder}
          refetch={refetch}
          setDeletingOrder={setDeletingOrder}
        ></DeleteAllOrder>
      )}
    </div>
  );
};

export default ManageOrders;
