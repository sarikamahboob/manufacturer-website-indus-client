import React from "react";
import { useNavigate } from "react-router-dom";

const Part = ({ part }) => {
  const navigate = useNavigate();
  const { _id, name, image, description, mQuantity, aQuantity, price } = part;
  return (
    <div className="grid">
      <div class="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" className="w-80" />
        </figure>
        <div class="card-body">
          <h2 class="card-title font-saira text-2xl text-accent">{name}</h2>
          <p className="font-roboto text-neutral">
            {description.length > 200 ? description.slice(0, 200) : description}
            <span
              className="cursor-pointer transition hover:text-accent  "
              onClick={() => navigate(`/purchase/${_id}`)}
            >
              ...Read More
            </span>
          </p>
          <p className="font-roboto text-neutral">
            <span className="font-bold text-accent">
              Minimum Quantity Order:
            </span>{" "}
            {mQuantity}
          </p>
          <p className="font-roboto text-neutral">
            <span className="font-bold text-accent">Available Quantity:</span>{" "}
            {aQuantity}
          </p>
          <p className="font-roboto text-neutral">
            <span className="font-bold text-accent">Price:</span> ${price}
          </p>
          <div class="card-actions justify-end">
            <button
              onClick={() => navigate(`/purchase/${_id}`)}
              class="btn btn-primary max-w-xs text-base-100 transition hover:bg-base-100 hover:border-accent hover:text-accent hover:ease-in-out hover:duration-300"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part;
