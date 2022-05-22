import React from "react";
import notfound from "../../Images/notfound.png";

const NotFound = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img style={{ width: "60%" }} src={notfound} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
