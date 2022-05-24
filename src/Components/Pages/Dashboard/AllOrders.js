import React, { useState } from "react";

const AllOrders = ({ order, index, refetch, setDeletingOrder }) => {
  const { userName, email, number, name, quantity, price } = order;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{userName}</td>
      <td>{email}</td>
      <td>{number}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>${price}</td>
      <td>
        <label
          onClick={() => setDeletingOrder(order)}
          for="delete-confirm-modal"
          class="btn btn-xs btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default AllOrders;
