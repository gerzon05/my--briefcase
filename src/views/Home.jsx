import React from "react";
import { Navigator } from "../components/Navigator";
import { About } from "../components/About";
import fondo from "../assets/fondoabout.jpg";
import { MyProyect } from "../components/MyProyect";
import { Parti } from "../components/Particles";
import particless from "../components/config/parti-config";
import { Habilidades } from "../components/Habilidades";
import { Footer2 } from "../components/Footer2";


export const Home = () => {
  return (
    <>
      <Parti parti={particless} />
      <figure className="fixed -z-10 top-0 left-0 ring-0 bottom-0 w-full">
        <img
          src={fondo}
          alt="fondo"
          className="w-full h-[100vh] object-cover"
        />
      </figure>
      <Navigator />
      <About />
      <MyProyect />
      <Habilidades />
      <Footer2 />
    </>
  );
};
