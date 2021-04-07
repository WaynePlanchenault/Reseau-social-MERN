import React, { useEffect, useState } from "react";
import { dateParser, isEmpty } from "../Utils";
import { useSelector } from "react-redux";
import FollowHandler from "../Profil/FollowHandler";
import LikeButton from "./LikeButton";

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
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"> </i>
      ) : (
        <>
          <div className="card-left">
            <img
              src={
                !isEmpty(usersData[0]) &&
                usersData
                  .map((user) => {
                    if (user._id === post.posterId) return user.picture;
                    else return null;
                  })
                  .join("")
              }
              alt=""
            />
          </div>
          <div className="card-right">
            <div className="card-header">
              <div className="pseudo">
                <h3>
                  {!isEmpty(usersData[0]) &&
                    usersData.map((user) => {
                      if (user._id === post.posterId) return user.pseudo;
                      else return null;
                    })}
                </h3>
                {post.posterId !== userData._id && (
                  <FollowHandler idToFollow={post.posterId} type={"card"} />
                )}
              </div>
              <span>{dateParser(post.createdAt)}</span>
            </div>
            <p>{post.message}</p>
            {post.picture && (
              <img src={post.picture} alt="card-pic" className="card-pic" />
            )}
            {post.video && (
              <iframe
                src={post.video}
                frameBorder="0"
                width="500"
                height="300"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowFullScreen
                title={post._id}
              ></iframe>
            )}
            <div className="card-footer">
              <div className="comment-icon">
                <img src="./img/icons/message1.svg" alt="comment" />
                <span>{post.comments.length}</span>
              </div>
              <LikeButton post={post} />
              <img src="./img/icons/share.svg" alt="" />
            </div>
          </div>
        </>
      )}
    </li>
  );
};

export default Card;
