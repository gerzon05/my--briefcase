import React from "react";
import { Navigator } from "../components/navigator";
import { About } from "../components/About";

export const Home = () => {
  return (
    <>
      <div className="h-[100vh] w-full fixed -z-10">
      </div>
      <Navigator />
      <About />
    </>
  );
};
