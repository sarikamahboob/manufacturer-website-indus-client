import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../../firebase.init";

const Purchase = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [user] = useAuthState(auth);
  console.log(user);

  const [parts, setParts] = useState([]);
  const [isReload, setIsReload] = useState(false);
  const [error, setError] = useState("");
  const [quantity, setQuanity] = useState(" ");

  useEffect(() => {
    fetch(`http://localhost:5000/parts/${id}`)
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, [isReload]);

  const onSubmit = async (data) => {
    console.log(data);
  };

  const handleQuantity = (event) => {
    event.preventDefault();
    parts.quantity = quantity;
    const quantity =
      parseInt(event.target.quantity.value) + parseInt(parts.quantity) ||
      parseInt(event.target.quantity.value) - parseInt(parts.quantity);

    if (quantity < 0) {
      return;
    }

    if (quantity < parts.mQuantity) {
      setError("You have to purchase more than minimum order quantity");
      return;
    }

    if (quantity > parts.aQuantity) {
      setError("You can't purchase product more than available quantity ");
      return;
    }

    const updateQuantity = { quantity };

    fetch(`http://localhost:5000/parts/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsReload(!isReload);
        event.target.reset();
      });
  };

  const handleDecreaseQuantity = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          <div class="text-center lg:text-left">
            <figure>
              <img src={parts.image} alt="Shoes" className="w-80" />
            </figure>
            <h1 class="text-5xl font-bold">{parts.name}</h1>
            <p className="font-roboto text-neutral">{parts.description}</p>
            <p className="font-roboto text-neutral">
              <span className="font-bold text-secondary">Order Quantity:</span>{" "}
              {parts.quantity}
            </p>
            <p className="font-roboto text-neutral">
              <span className="font-bold text-secondary">
                Minimum Quantity Order:
              </span>{" "}
              {parts.mQuantity}
            </p>
            <p className="font-roboto text-neutral">
              <span className="font-bold text-secondary">
                Available Quantity:
              </span>{" "}
              {parts.aQuantity}
            </p>
            <p className="font-roboto text-neutral">
              <span className="font-bold text-secondary">Price:</span> $
              {parts.price}
            </p>

            <form onSubmit={handleQuantity} className="font-roboto mt-4">
              <div className="form-control w-full max-w-xs flex-row items-center">
                <label className="label w-full">
                  <span className="label-text text-accent text-lg font-bold">
                    Order Quantity:
                  </span>
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="number"
                  name="quantity"
                  id=""
                  placeholder="Number"
                />
              </div>
              <p className="mt-4 text-red-500">{error}</p>
              <input
                className="btn btn-primary w-full max-w-xs text-base-100 hover:bg-base-100 hover:border-accent hover:text-accent hover:ease-in-out hover:duration-300 mt-4"
                type="submit"
                value="Update Quantity"
              />
            </form>
          </div>

          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <form onSubmit={handleSubmit(onSubmit)} className="font-roboto">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-accent text-lg font-bold">
                      Name
                    </span>
                  </label>
                  <input
                    className="input input-bordered w-full max-w-xs"
                    disabled
                    value={user.displayName}
                    {...register("name", {
                      required: {
                        value: true,
                      },
                    })}
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-accent text-lg font-bold">
                      Email
                    </span>
                  </label>
                  <input
                    className="input input-bordered w-full max-w-xs"
                    disabled
                    value={user.email}
                    {...register("email", {
                      required: {
                        value: user.email,
                      },
                    })}
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-accent text-lg font-bold">
                      Address
                    </span>
                  </label>
                  <input
                    className="input input-bordered w-full max-w-xs"
                    type="text"
                    {...register("address", {
                      required: {
                        value: true,
                      },
                    })}
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-accent text-lg font-bold">
                      Phone Number
                    </span>
                  </label>
                  <input
                    className="input input-bordered w-full max-w-xs"
                    type="number"
                    {...register("number", {
                      required: {
                        value: true,
                      },
                    })}
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-accent text-lg font-bold">
                      Message
                    </span>
                  </label>
                  <input
                    className="input input-bordered w-full max-w-xs"
                    type="text"
                    {...register("message", {
                      required: {
                        value: true,
                      },
                    })}
                  />
                </div>

                <input
                  className="btn btn-primary w-full max-w-xs text-base-100 hover:bg-base-100 hover:border-accent hover:text-accent hover:ease-in-out hover:duration-300 mt-4"
                  type="submit"
                  value="Purchase"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
