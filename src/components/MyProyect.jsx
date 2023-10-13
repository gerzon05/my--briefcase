import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { ViewProyect } from "./ViewProyect";
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
        <button className="text-white text-xs flex items-center font-tillana hover:text-blue-300 relative z-10 ">
          Has click aqui para ver todos los proyectos{" "}
          <BsArrowRightShort className="text-lg ml-2" />
        </button>
      </section>
      <section className="w-[280px] sm:w-[400px]">
        <ViewProyect
          title="tituloe del proyecto"
          descrip="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
          nostrum,"
        />
        <ViewProyect
          title="tituloe del proyecto"
          descrip="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
          nostrum,"
        />
        <ViewProyect
          title="tituloe del proyecto"
          descrip="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
          nostrum,"
        />
      </section>
    </div>
  );
};
