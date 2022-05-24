import React from "react";

const ProductsRow = ({ index, part, setDeletingParts }) => {
  const { _id, name, image, mQuantity, aQuantity, price } = part;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-20 rounded">
            <img src={image} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{mQuantity}</td>
      <td>{aQuantity}</td>
      <td>${price}</td>
      <td>
        <label
          onClick={() => setDeletingParts(part)}
          for="delete-product-modal"
          class="btn btn-xs btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ProductsRow;
