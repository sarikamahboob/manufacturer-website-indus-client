import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import "react-toastify/dist/ReactToastify.css";

const Purchase = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [user] = useAuthState(auth);

  const [parts, setParts] = useState([]);
  const [isReload, setIsReload] = useState(false);
  const [error, setError] = useState("");
  const [quantity, setQuanity] = useState(" ");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/parts/${id}`)
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, [isReload]);

  const myFunction = (event) => {
    const qquantity = parseInt(event.target.value);
    console.log(qquantity);
    if (qquantity < parts.mQuantity) {
      setError("You have to purchase product more than minimum order quantity");
      setDisabled(true);
      return;
    } else if (qquantity > parts.aQuantity) {
      setError("You can't purchase product more than available quantity");
      setDisabled(true);
      return;
    } else if (qquantity <= parts.aQuantity && qquantity >= parts.mQuantity) {
      setError(" ");
      setDisabled(false);
    }
  };

  const handleOrder = (event) => {
    event.preventDefault();
    const quantity = event.target.quantity.value;
    const number = event.target.number.value;
    const address = event.target.address.value;
    const message = event.target.message.value;

    // if (quantity < 0) {
    //   setError("You have to purchase more than minimum order quantity");
    //   return;
    // }

    // if (quantity < parts.mQuantity) {
    //   setError("You have to purchase product more than minimum order quantity");
    //   return;
    // }

    // if (quantity > parts.aQuantity) {
    //   setError("You can't purchase product more than available quantity");
    //   return;
    // }

    // const updateQuantity = { quantity };

    // fetch(`http://localhost:5000/parts/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(updateQuantity),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setIsReload(!isReload);
    //     setError(" ");
    //   });

    const allData = {
      image: parts.image,
      name: parts.name,
      quantity: quantity,
      price: parts.price,
      userName: user.displayName,
      email: user.email,
      number: number,
      message: message,
      address: address,
    };
    console.log(allData);
    fetch(`http://localhost:5000/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success(`You order is taken !!!`);
        } else {
          toast.error(`You already ordered this product !!!`);
        }
        setIsReload(!isReload);
        event.target.reset();
      });
  };

  return (
    <div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row ">
          <div class="text-center lg:text-left px-4">
            <figure>
              <img src={parts.image} alt="Shoes" className="w-80" />
            </figure>
            <h1 class="text-5xl font-bold mt-4">{parts.name}</h1>
            <p className="font-roboto text-neutral mt-4 text-justify">
              {parts.description}
            </p>
            <p className="font-roboto text-neutral  mt-2">
              <span className="font-bold text-accent">
                Minimum Quantity Order:
              </span>{" "}
              {parts.mQuantity}
            </p>
            <p className="font-roboto text-neutral  mt-2 ">
              <span className="font-bold text-accent">Available Quantity:</span>{" "}
              {parts.aQuantity}
            </p>
            <p className="font-roboto text-neutral  mt-2">
              <span className="font-bold text-accent">Price:</span> $
              {parts.price}
            </p>
          </div>

          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <form onSubmit={handleOrder} className="font-roboto">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-accent text-lg font-bold">
                      Name
                    </span>
                  </label>
                  <input
                    className="input input-bordered w-full max-w-xs"
                    disabled
                    name="name"
                    value={user.displayName}
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
                    name="email"
                    value={user.email}
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
                    name="address"
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
                    type="text"
                    name="number"
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
                    name="message"
                  />
                </div>

                <div className="form-control w-full max-w-xs flex-row items-center mt-4 ">
                  <label className="label w-full">
                    <span className="label-text text-accent text-lg font-bold">
                      Order Quantity:
                    </span>
                  </label>
                  <input
                    onChange={myFunction}
                    className="input input-bordered w-full max-w-xs"
                    type="number"
                    name="quantity"
                  />
                </div>
                {error}
                <button
                  className="btn btn-primary w-full max-w-xs text-base-100 hover:bg-base-100 hover:border-accent hover:text-accent hover:ease-in-out hover:duration-300 mt-4"
                  // disabled={error && true}
                  disabled={disabled && true}
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Purchase;
