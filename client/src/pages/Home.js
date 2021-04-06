import React from "react";
import LeftNav from "../components/Routes/LeftNav";
import Thread from "../components/Routes/Thread";

const Home = () => {
  return (
    <div className="home">
      <LeftNav />
      <div className="main">
        <Thread />
      </div>
    </div>
  );
};

export default Home;
