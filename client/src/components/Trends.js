import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Trends = () => {
  const posts = useSelector((state) => state.allPostsReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();

  return <div>trends</div>;
};

export default Trends;
