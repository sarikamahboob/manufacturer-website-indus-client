import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [userP, setUserP] = useState([]);
  const navigate = useNavigate();
  console.log(userP);

  const onSubmit = (data) => {
    console.log(data);
    const email = user.email;
    // fetch(`http://localhost:5000/user`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setUserP(data);
    //   });

    fetch(`http://localhost:5000/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserP(data);
      });
  };

  if (loading) {
    <Loading />;
  }

  useEffect(() => {
    const email = user.email;

    fetch(`http://localhost:5000/user?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserP(data);
      });

    const education = user.education;
  }, [user]);

  return (
    <div className="flex gap-6 ">
      <div class="card w-96 bg-base-100 shadow-xl">
        {/* {userP.map((user) => ( */}
        <div class="card-body">
          <h2 class="card-title">Your Information</h2>
          <p className="text-lg font-roboto">
            <span className="text-accent">Name:</span> {user.displayName}
          </p>
          <p className="text-lg font-roboto">
            <span className="text-accent">Email</span> {user.email}
          </p>
          <p className="text-lg font-roboto">
            <span className="text-accent">University/College/School Name:</span>{" "}
            {user.education}
          </p>
          <p className="text-lg font-roboto">
            <span className="text-accent">Address:</span> {user.address}
          </p>
          <p className="text-lg font-roboto">
            <span className="text-accent">Phone Number:</span> {user.number}
          </p>
          <p className="text-lg font-roboto">
            <span className="text-accent">LinkedIn Profile Link:</span>{" "}
            {user.linkedin}
          </p>
        </div>
        {/* ))} */}
      </div>

      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <h2 class="card-title">Add Info</h2>
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
                  required: true,
                  value: user.displayName,
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
                  required: true,
                  value: user.email,
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-accent text-lg font-bold">
                  University/College/School Name
                </span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                {...register("education", {
                  required: {
                    value: true,
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
                  Linked Profile Link
                </span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                {...register("linkedin", {
                  required: {
                    value: true,
                  },
                })}
              />
            </div>

            <input
              className="btn btn-primary w-full max-w-xs text-base-100 hover:bg-base-100 hover:border-accent hover:text-accent hover:ease-in-out hover:duration-300 mt-4"
              type="submit"
              value="Add"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
