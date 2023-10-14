import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { ViewProyect } from "./ViewProyect";
import { Link } from "react-router-dom";
import pinterest from "../assets/proyectos/Pinterest.png"
import metav from "../assets/proyectos/metaV.png"
import tokners from "../assets/proyectos/Tokners.png"

export const MyProyect = () => {
  return (
    <div className="flex justify-evenly flex-wrap gap-4 items-center p-4">
      <section className="w-[280px] sm:w-[400px]">
        <h2 className="text-white font-lilita text-4xl sm:text-7xl font-extrabold tracking-wide my-5">
          my proyect
        </h2>
        <p className="text-white text-xl font-Neue tracking-wide my-5">
          Vista previa de algunos de mis proyectos realizados
        </p>
        <Link to="/myproyect">
          <button className="text-white text-xs flex items-center font-tillana hover:text-blue-300 relative z-10 ">
            Has click aqui para ver todos los proyectos{" "}
            <BsArrowRightShort className="text-lg ml-2" />
          </button>
        </Link>
      </section>
      <section className="w-[280px] sm:w-[400px]">
        <ViewProyect
          title="Pinterest"
          img={pinterest}
          descrip="Este proyecto consistió en la creación de un clon del sitio web Pinterest utilizando tecnologías web modernas, como React y Firebase"
        />
        <ViewProyect
          title="MetaV"
          img={metav}
          descrip="Este proyecto consistió en la creación del sitio MetaV utilizando tecnologías web como HTML, CSS y JAVASCRIPT"
        />
        <ViewProyect
          title="Tokners"
          img={tokners}
          descrip="Este proyecto consistió en la creación del sitio Tokners utilizando tecnologías web como HTML, CSS y JAVASCRIPT"
        />
      </section>
    </div>
  );
};
