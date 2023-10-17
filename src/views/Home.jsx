import React from "react";
import { Navigator } from "../components/Navigator";
import { About } from "../components/About";
import fondo from "../assets/fondoabout.jpg";
import { MyProyect } from "../components/MyProyect";
import { Parti } from "../components/Particles";
import particless from "../components/config/parti-config";
import { Footer } from "flowbite-react";
import { BsWhatsapp, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { Habilidades } from "../components/Habilidades";


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
      <Footer container className="bg-transparent">
        <Footer.Copyright
          by="GerzonDeveloper™"
          href="#"
          year={2023}
          className="text-white"
        />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center relative z-10">
          <Footer.Icon target="_blank" className="text-white" href="https://web.facebook.com/profile.php?id=61552233277487" icon={BsFacebook} />
          <Footer.Icon target="_blank" className="text-white" href="https://www.instagram.com/gerzon_rangel/" icon={BsInstagram} />
          <Footer.Icon target="_blank" className="text-white" href="https://twitter.com/RangelGerzon" icon={BsTwitter} />
          <Footer.Icon target="_blank" className="text-white" href="https://github.com/gerzon05" icon={BsGithub} />
          <Footer.Icon target="_blank" className="text-white" href="#" icon={BsWhatsapp} />
          <Footer.Icon target="_blank" className="text-white" href="https://www.linkedin.com/in/gerzon-rangel-258109211/" icon={AiFillLinkedin} />
        </div>
      </Footer>
    </>
  );
};
