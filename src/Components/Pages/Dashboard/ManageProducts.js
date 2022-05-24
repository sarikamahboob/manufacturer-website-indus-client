import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import DeleteProduct from "./DeleteProduct";
import ProductsRow from "./ProductsRow";

const ManageProducts = () => {
  const [deletingParts, setDeletingParts] = useState(null);
  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("parts", () =>
    fetch("http://localhost:5000/parts", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-8 text-accent font-saira ">
        All The Users
      </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Minimum Quantity</th>
              <th>Available Quantity</th>
              <th>Price</th>
              <th>Delete Product</th>
            </tr>
          </thead>
          <tbody>
            {parts.map((part, index) => (
              <ProductsRow
                index={index}
                key={part._id}
                part={part}
                refetch={refetch}
                setDeletingParts={setDeletingParts}
              ></ProductsRow>
            ))}
          </tbody>
        </table>
        {deletingParts && (
          <DeleteProduct
            deletingParts={deletingParts}
            refetch={refetch}
            setDeletingParts={setDeletingParts}
          ></DeleteProduct>
        )}
      </div>
    </div>
  );
};

export default ManageProducts;
