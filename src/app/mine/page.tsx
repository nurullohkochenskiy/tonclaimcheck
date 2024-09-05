import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Clicker from "@/components/mine/Clicker";
import Progress from "@/components/mine/Progress";

const Mine = () => {
  return (
    <>
      <main className="pb-[22%] flex flex-col justify-between min-h-[100vh] items-center">
        <Header />
        <Clicker />
        <Progress />
      </main>
      <Footer />
    </>
  );
};

export default Mine;
