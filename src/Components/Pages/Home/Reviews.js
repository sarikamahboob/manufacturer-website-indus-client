import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";

const Reviews = () => {
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("reviews", () =>
    fetch("https://manufacturer-website-indus-server.onrender.com/reviews", {
      method: "GET",
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="container mx-auto my-10">
      <h1 class="font-saira text-accent text-4xl text-center font-bold my-24">
        Our Valuable Clients Reviews
      </h1>
      {reviews.map((review, index) => (
        <div>
          <div class="card w-full bg-white font-roboto mt-2 shadow-xl  ">
            <div class="card-body flex-row items-center">
              <div>
                <p className="mr-4">{index + 1})</p>
              </div>
              <div>
                <h2 class="card-title text-secondary">{review.review}</h2>
                <p className="font-">Ratings: {review.rating}/5</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
