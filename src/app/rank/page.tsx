import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Ranks from "../../components/rank/Ranks";
const Rank = () => {
  return (
    <>
      <Header />
      <main>
        <Ranks/>
      </main>
      <Footer />
    </>
  );
};

export default Rank;
