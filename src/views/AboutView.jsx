import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Navigator } from "../components/navigator";
import fondo from "../assets/code.jpg"

export const AboutView = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <figure className="fixed -z-10 top-0 left-0 ring-0 bottom-0 w-full">
        <img
          src={fondo}
          alt="fondo"
          className="w-full h-[100vh] object-cover"
        />
      </figure>
      <Navigator />
      <h2 className="text-center text-white font-lilita text-6xl py-3">
        Personal History
      </h2>
      <div className="p-5 overflow-hidden">
        <section data-aos="fade-right" className="w-full px-5 mb-3">
          <h2 className="px-2 py-4 bg-slate-900 w-fit text-white rounded-b-lg rounded-r-lg">
            Cuando empezo a gustarte la progrmación
          </h2>
        </section>
        <section
          data-aos="fade-left"
          className="w-full px-5 text-right flex justify-end mb-3"
        >
          <p className="px-2 py-4 bg-slate-900 w-[100%] sm:w-[60%] text-white rounded-b-lg rounded-l-lg">
            Desde que tenía 15 años, mi pasión por la programación ya se estaba
            gestando. Sin embargo, todo cambió cuando tenía 16 años y asistía al
            colegio. Fue en ese momento cuando mi profesor de informática
            comenzó a introducirnos en los conceptos básicos de HTML y CSS.
            Aquellas primeras líneas de código y las posibilidades que ofrecían
            me cautivaron de inmediato. A medida que avanzaba mi educación, la
            programación se convirtió en una llama ardiente en mi vida. Al
            cumplir 17 años, había terminado el colegio y estaba ansioso por
            continuar mi viaje en el mundo del desarrollo de software
          </p>
        </section>
        <section data-aos="fade-right" className="w-full px-5 mb-3">
          <h2 className="px-2 py-4 bg-slate-900 w-fit text-white rounded-b-lg rounded-r-lg">
            Que sucedio despues de terminar el colegio
          </h2>
        </section>
        <section
          data-aos="fade-left"
          className="w-full px-5 text-right flex justify-end mb-3"
        >
          <p className="px-2 py-4 bg-slate-900 w-[100%] sm:w-[60%] text-white rounded-b-lg rounded-l-lg">
            En ese punto fue cuando tomé la decisión de inscribirme en un curso
            de desarrollo de software en una academia llamada "Syntactic". Aquí,
            mi entusiasmo y mi pasión por la programación florecieron aún más.
            Las lecciones, los desafíos y las oportunidades de aprendizaje en
            Syntactic me brindaron un entorno propicio para nutrir mis
            habilidades y conocimientos.
          </p>
        </section>
        <section data-aos="fade-right" className="w-full px-5 mb-3">
          <h2 className="px-2 py-4 bg-slate-900 w-fit text-white rounded-b-lg rounded-r-lg">
            Como fue ese proceso en la acedemia Syntactic
          </h2>
        </section>
        <section
          data-aos="fade-left"
          className="w-full px-5 text-right flex justify-end mb-3"
        >
          <p className="px-2 py-4 bg-slate-900 w-[100%] sm:w-[60%] text-white rounded-b-lg rounded-l-lg">
            A lo largo de mi tiempo en Syntactic, trabajé en una serie de
            proyectos que me permitieron poner en práctica lo que había
            aprendido. A medida que avanzaba, mi destreza y habilidades en el
            desarrollo de software se hicieron más sólidas, y mi entusiasmo y
            dedicación se vieron recompensados con reconocimiento por parte de
            mis instructores y compañeros de clase. Me sentí verdaderamente
            destacado por los proyectos que logré completar con éxito.
          </p>
        </section>
        <section data-aos="fade-right" className="w-full px-5 mb-3">
          <h2 className="px-2 py-4 bg-slate-900 w-fit text-white rounded-b-lg rounded-r-lg">
            A que te dedicar actualmente
          </h2>
        </section>
        <section
          data-aos="fade-left"
          className="w-full px-5 text-right flex justify-end mb-3"
        >
          <p className="px-2 py-4 bg-slate-900 w-[100%] sm:w-[60%] text-white rounded-b-lg rounded-l-lg">
            Hoy en día, no solo continúo mi viaje en la programación, sino que
            lo hago con una pasión y determinación que solo ha crecido con el
            tiempo. Mi historia personal es una historia de amor por la
            programación, de aprendizaje constante y de la búsqueda incansable
            de la excelencia en el desarrollo de software. Cada día es una nueva
            oportunidad para crecer y contribuir al emocionante mundo de la
            tecnología.
          </p>
        </section>
        <section data-aos="fade-up" className="w-full px-5 mb-3">
          <h2 className="px-2 m-auto py-4 bg-slate-900 w-fit text-white rounded-lg">
            Si quieres que tu vida impacte !Enfocala¡
          </h2>
        </section>
      </div>
      <div></div>
    </>
  );
};
