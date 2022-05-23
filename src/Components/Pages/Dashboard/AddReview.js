import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";

const AddReview = () => {
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [user] = useAuthState(auth);
  const [reviews, setReviews] = useState([]);

  const onSubmit = (data) => {
    console.log(data);

    fetch(`http://localhost:5000/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="container mx-auto px-4">
      <form onSubmit={handleSubmit(onSubmit)} className="font-roboto ">
        <div className="form-control w-full max-w-xs flex-row">
          <label className="label">
            <span className="label-text text-accent text-lg font-bold">
              Review:
            </span>
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            {...register("review", {
              required: true,
            })}
          />
        </div>

        <div className="form-control w-[180px] flex-row mt-4 items-center">
          <label className="label ">
            <span className="label-text text-accent text-lg font-bold">
              Ratings:
            </span>
          </label>
          <input
            className="input input-bordered w-full max-w-xs mr-2"
            type="number"
            {...register("rating", {
              required: true,
              max: 5,
            })}
          />
          /5
        </div>

        <input
          className="btn btn-primary w-full max-w-xs text-base-100 hover:bg-base-100 hover:border-accent hover:text-accent hover:ease-in-out hover:duration-300 mt-4"
          type="submit"
          value="Purchase"
        />
      </form>
    </div>
  );
};

export default AddReview;
