import React from "react";
import axios from "axios";
import cookie from "js-cookie";
// permet de supprimer le cookie côté front et offre une sécurité supplémentaire

const LogOut = () => {
  const removeCookie = (key) => {
    if (window !== undefined) {
      cookie.remove(key, { expires: 1 });
      // on supprime le cookie grace à key en 1 miliseconde
    }
  };

  const logout = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));

    window.location = "/";
  };
  return (
    <li onClick={logout}>
      <img src="./img/icons/logout.svg" alt="logout" />
    </li>
  );
};

export default LogOut;
