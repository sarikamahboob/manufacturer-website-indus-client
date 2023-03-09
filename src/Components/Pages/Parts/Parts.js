import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading";
import Part from "./Part";

const Parts = () => {
  const navigate = useNavigate();

  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("parts", () =>
    fetch("https://manufacturer-website-indus-server.onrender.com/parts", {
      method: "GET",
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="my-12 container mx-auto ">
      <h1 className="font-saira text-accent text-4xl text-center font-bold my-24">
        Our Best Selling Parts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 ">
        {parts.slice(-6).map((part) => (
          <Part key={part._id} part={part} refetch={refetch}></Part>
        ))}
      </div>
    </div>
  );
};

export default Parts;
