import React, { useEffect } from "react";
import { Navigator } from "../components/navigator";
import fondo from "../assets/code3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsFillCircleFill } from "react-icons/bs";
import {
  BiLogoReact,
  BiLogoFirebase,
  BiLogoTailwindCss,
  BiLogoCss3,
} from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";
import pinteres from "../assets/proyectos/Pinterest.png";
import metav from "../assets/proyectos/metaV.png";
import tokners from "../assets/proyectos/Tokners.png";
import proyecto from "../assets/proyectos/MyProyect.png";
import ProyectLibrari from "../assets/proyectos/Proyect Librari.png";
import { Parti } from "../components/Particles";
import particles2 from "../components/config/parti-config 2";

export const Misproyectos = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <figure className="fixed -z-10 top-0 left-0 ring-0 bottom-0 w-full">
        <Parti parti={particles2} />
        <img
          src={fondo}
          alt="fondo"
          className="w-full h-[100vh] object-cover"
        />
      </figure>
      <Navigator />
      <div className="flex flex-col justify-center items-center p-0 md:p-11">
        <section className="w-[90%] flex justify-evenly h-[40vh] sm:h-[55vh] md:h[85vh] lg:h-[90vh] p-[10px] md:p-6">
          <div className="relative w-[140px] h-[100px] sm:w-[315px] sm:h-[240px] lg:w-[500px] lg:h-[300px]">
            <img
              data-aos="fade-right"
              className="w-full h-full border-[3px] md:border-[6px] border-white"
              src={pinteres}
              alt="foto del sitio web"
            />
            <span className="lg:absolute group flex group justify-center items-center top-0 left-0 right-0 bottom-0 hover:bg-green-500/80 transition duration-1000">
              <a
                href="https://gerzonrangel-pinterest.netlify.app/"
                target="_blank"
                className="flex items-center group-hover:flex lg:hidden gap-5 text-xl hover:text-white"
              >
                Visitar el sitio <BsFillSendFill />{" "}
              </a>
            </span>
          </div>
          <span
            data-aos="fade-top"
            className="w-[2px] sm:w-[4px] bg-black h-[40vh] sm:h-[55vh] md:h[85vh] lg:h-[90vh] mx-2 sm:mx-5 md:mx-7 lg:mx-10 relative"
          >
            {" "}
            <BsFillCircleFill className="absolute -left-[7px] top-[17%] sm:top-[32%] md:top[30%] lg:top-[25%] xl:top-[22%] 2xl:top-[15%]" />{" "}
          </span>
          <h2
            data-aos="fade-left"
            className="w-[140px] h-[100px] sm:w-[315px] sm:h-[240px] lg:w-[500px] lg:h-[300px] text-white text-xs sm:text-lg md:text-xl lg:text-2xl font-tillana flex flex-col justify-center items-center"
          >
            Clon del sitio web de Pinterest
            <strong className="flex items-center">
              usando: <BiLogoReact className="text-3xl text-yellow-400" />{" "}
              <BiLogoFirebase className="text-3xl text-yellow-400" />{" "}
              <BiLogoTailwindCss className="text-3xl text-yellow-400" />{" "}
            </strong>
          </h2>
        </section>
        <section className="w-[90%] flex justify-evenly h-[40vh] sm:h-[55vh] md:h[85vh] lg:h-[90vh] p-[10px] md:p-6">
          <div className="relative w-[140px] h-[100px] sm:w-[315px] sm:h-[240px] lg:w-[500px] lg:h-[300px]">
            <img
              data-aos="fade-right"
              className="w-full h-full border-[3px] md:border-[6px] border-white"
              src={metav}
              alt="foto del sitio web"
            />
            <span className="lg:absolute group flex group justify-center items-center top-0 left-0 right-0 bottom-0 hover:bg-green-500/80 transition duration-1000">
              <a
                href="https://gerzon05.github.io/MetaV/"
                target="_blank"
                className="flex items-center group-hover:flex lg:hidden gap-5 text-xl hover:text-white"
              >
                Visitar el sitio <BsFillSendFill />{" "}
              </a>
            </span>
          </div>
          <span
            data-aos="fade-top"
            className="w-[2px] sm:w-[4px] bg-black h-[40vh] sm:h-[55vh] md:h[85vh] lg:h-[90vh] mx-2 sm:mx-5 md:mx-7 lg:mx-10 relative"
          >
            {" "}
            <BsFillCircleFill className="absolute -left-[7px] top-[17%] sm:top-[32%] md:top[30%] lg:top-[25%] xl:top-[22%] 2xl:top-[15%]" />{" "}
          </span>
          <h2
            data-aos="fade-left"
            className="w-[140px] h-[100px] sm:w-[315px] sm:h-[240px] lg:w-[500px] lg:h-[300px] text-white text-xs sm:text-lg md:text-xl lg:text-2xl font-tillana flex flex-col justify-center items-center"
          >
            Sitio Web de MetaV
            <strong className="flex items-center">
              usando: <AiFillHtml5 className="text-3xl text-yellow-400" />{" "}
              <BiLogoCss3 className="text-3xl text-yellow-400" />{" "}
              <DiJavascript1 className="text-3xl text-yellow-400" />{" "}
            </strong>
          </h2>
        </section>
        <section className="w-[90%] flex justify-evenly h-[40vh] sm:h-[55vh] md:h[85vh] lg:h-[90vh] p-[10px] md:p-6">
          <div className="relative w-[140px] h-[100px] sm:w-[315px] sm:h-[240px] lg:w-[500px] lg:h-[300px]">
            <img
              data-aos="fade-right"
              className="w-full h-full border-[3px] md:border-[6px] border-white"
              src={tokners}
              alt="foto del sitio web"
            />
            <span className="lg:absolute group flex group justify-center items-center top-0 left-0 right-0 bottom-0 hover:bg-green-500/80 transition duration-1000">
              <a
                href="https://gerzon05.github.io/tokners/"
                target="_blank"
                className="flex items-center group-hover:flex lg:hidden gap-5 text-xl hover:text-white"
              >
                Visitar el sitio <BsFillSendFill />{" "}
              </a>
            </span>
          </div>
          <span
            data-aos="fade-top"
            className="w-[2px] sm:w-[4px] bg-black h-[40vh] sm:h-[55vh] md:h[85vh] lg:h-[90vh] mx-2 sm:mx-5 md:mx-7 lg:mx-10 relative"
          >
            {" "}
            <BsFillCircleFill className="absolute -left-[7px] top-[17%] sm:top-[32%] md:top[30%] lg:top-[25%] xl:top-[22%] 2xl:top-[15%]" />{" "}
          </span>
          <h2
            data-aos="fade-left"
            className="w-[140px] h-[100px] sm:w-[315px] sm:h-[240px] lg:w-[500px] lg:h-[300px] text-white text-xs sm:text-lg md:text-xl lg:text-2xl font-tillana flex flex-col justify-center items-center"
          >
            Sitio Web de Tokners
            <strong className="flex items-center">
              usando: <AiFillHtml5 className="text-3xl text-yellow-400" />{" "}
              <BiLogoCss3 className="text-3xl text-yellow-400" />{" "}
              <DiJavascript1 className="text-3xl text-yellow-400" />{" "}
            </strong>
          </h2>
        </section>
        <section className="w-[90%] flex justify-evenly h-[40vh] sm:h-[55vh] md:h[85vh] lg:h-[90vh] p-[10px] md:p-6">
          <div className="relative w-[140px] h-[100px] sm:w-[315px] sm:h-[240px] lg:w-[500px] lg:h-[300px]">
            <img
              data-aos="fade-right"
              className="w-full h-full border-[3px] md:border-[6px] border-white"
              src={proyecto}
              alt="foto del sitio web"
            />
            <span className="lg:absolute group flex group justify-center items-center top-0 left-0 right-0 bottom-0 hover:bg-green-500/80 transition duration-1000">
              <a
                href="https://gerzon05.github.io/mipagina/"
                target="_blank"
                className="flex items-center group-hover:flex lg:hidden gap-5 text-xl hover:text-white"
              >
                Visitar el sitio <BsFillSendFill />{" "}
              </a>
            </span>
          </div>
          <span
            data-aos="fade-top"
            className="w-[2px] sm:w-[4px] bg-black h-[40vh] sm:h-[55vh] md:h[85vh] lg:h-[90vh] mx-2 sm:mx-5 md:mx-7 lg:mx-10 relative"
          >
            {" "}
            <BsFillCircleFill className="absolute -left-[7px] top-[17%] sm:top-[32%] md:top[30%] lg:top-[25%] xl:top-[22%] 2xl:top-[15%]" />{" "}
          </span>
          <h2
            data-aos="fade-left"
            className="w-[140px] h-[100px] sm:w-[315px] sm:h-[240px] lg:w-[500px] lg:h-[300px] text-white text-xs sm:text-lg md:text-xl lg:text-2xl font-tillana flex flex-col justify-center items-center"
          >
            Sitio Web de mi primer proyecto
            <strong className="flex items-center">
              usando: <AiFillHtml5 className="text-3xl text-yellow-400" />{" "}
              <BiLogoCss3 className="text-3xl text-yellow-400" />{" "}
              <DiJavascript1 className="text-3xl text-yellow-400" />{" "}
            </strong>
          </h2>
        </section>
        <section className="w-[90%] flex justify-evenly h-[40vh] sm:h-[55vh] md:h[85vh] lg:h-[90vh] p-[10px] md:p-6">
          <div className="relative w-[140px] h-[100px] sm:w-[315px] sm:h-[240px] lg:w-[500px] lg:h-[300px]">
            <img
              data-aos="fade-right"
              className="w-full h-full border-[3px] md:border-[6px] border-white"
              src={ProyectLibrari}
              alt="foto del sitio web"
            />
            <span className="lg:absolute group flex group justify-center items-center top-0 left-0 right-0 bottom-0 hover:bg-green-500/80 transition duration-1000">
              <a
                href="https://gerzon05.github.io/proyect-library/"
                target="_blank"
                className="flex items-center group-hover:flex lg:hidden gap-5 text-xl hover:text-white"
              >
                Visitar el sitio <BsFillSendFill />{" "}
              </a>
            </span>
          </div>
          <span
            data-aos="fade-top"
            className="w-[2px] sm:w-[4px] bg-black h-[40vh] sm:h-[55vh] md:h[85vh] lg:h-[90vh] mx-2 sm:mx-5 md:mx-7 lg:mx-10 relative"
          >
            {" "}
            <BsFillCircleFill className="absolute -left-[7px] top-[17%] sm:top-[32%] md:top[30%] lg:top-[25%] xl:top-[22%] 2xl:top-[15%]" />{" "}
          </span>
          <h2
            data-aos="fade-left"
            className="w-[140px] h-[100px] sm:w-[315px] sm:h-[240px] lg:w-[500px] lg:h-[300px] text-white text-xs sm:text-lg md:text-xl lg:text-2xl font-tillana flex flex-col justify-center items-center"
          >
            Sitio Web de Proyect Librari
            <strong className="flex items-center">
              usando: <AiFillHtml5 className="text-3xl text-yellow-400" />{" "}
              <BiLogoCss3 className="text-3xl text-yellow-400" />{" "}
            </strong>
          </h2>
        </section>
      </div>
    </>
  );
};
