import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "./Utils";

const Trends = () => {
  const posts = useSelector((state) => state.allPostsReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isEmpty(posts[0])) {
      const postsArr = Object.keys(posts).map((i) => posts[i]);
      let sortedArray = postsArr.sort((a, b) => {
        return b.likers.length - a.likers.length;
        // permet de récupérer tous les posts puis de les maper, de les trier,
        // puis de retourner le post qui a le plus de like
      });
      console.log(sortedArray);
    }
  }, [posts]);

  return <div>trends</div>;
};

export default Trends;
