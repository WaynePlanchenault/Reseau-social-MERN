import React, { useContext } from "react";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext";

const Profil = () => {
  const uid = useContext(UidContext); // cette variable va capturer l'id utilisateur si celui ci est connecté

  // si uid = true alors on envoie la page update, sinon on envoie le code entre parenthèse
  return (
    <div className="profil-page">
      {uid ? (
        <h1>UPDATE PAGE</h1>
      ) : (
        <div className="log-container">
          <Log signin={false} signup={true} />
          <div className="img-container">
            <img src="./img/log.svg" alt="img-log" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;
