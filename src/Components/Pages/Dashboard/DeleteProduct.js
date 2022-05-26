import React, { useEffect, useState } from "react";

const DeleteProduct = ({ deletingParts, refetch, setDeletingParts }) => {
  const { _id } = deletingParts;
  console.log(deletingParts);

  const handleDelete = () => {
    fetch(`https://dry-springs-42288.herokuapp.com/parts/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDeletingParts(null);
        refetch();
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-product-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold font-roboto text-lg text-red-500">
            Are you sure you want to delete this product?
          </h3>
          <div class="modal-action">
            <button onClick={() => handleDelete()} class="btn btn-xs btn-error">
              Delete
            </button>
            <label for="delete-product-modal" class="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProduct;
