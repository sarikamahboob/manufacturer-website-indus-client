import { async } from "@firebase/util";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    if (email) {
      fetch(`https://dry-springs-42288.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.token;
          setToken(accessToken);
          localStorage.setItem("accessToken", accessToken);
        });
    }
  }, [user]);
  return [token, setToken];
};

export default useToken;
