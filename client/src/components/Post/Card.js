import React, { useEffect, useState } from "react";
import { isEmpty } from "../Utils";
import { useSelector } from "react-redux";

const Card = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);

  useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoading(false);
    // si on a les données utilisateurs alors setIsLoading passe à false et on arrête l'affichage du chargement
  }, [usersData]);

  return (
    <li className="card-container" key={post._id}>
      {isLoading ? <i className="fas fa-spinner fa-spin"> </i> : <h2>test</h2>}
    </li>
  );
};

export default Card;
