import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const About = () => {

  const [text] = useTypewriter({
    words: ["Gerzon", "developer", "programmer"],
    loop: {},
    typeSpeed: 150,
    delaySpeed: 130,
  });
  return (
    <>
      <div className="relative z-[-1]">
        <div className="px-6 py-10 lg:w-[500px]">
          <h1 className="font-bold py-6 text-2xl sm:text-4xl font-lilita tracking-wider text-white">
            I am <span className="text-green-600">{text}</span>
            <span>
              <Cursor />
            </span>
          </h1>
          <p className="text-gray-300 w-[80%] bg-black/60 md:bg-transparent text-md sm:text-xl md:text-lg md:w-[350px] lg:w-[550px] lg:text-2xl mt-7 font-Neue">
            Soy un apasionado desarrollador web con experiencia sólida en HTML,
            CSS y JavaScript. Mi conocimiento abarca tecnologías como Flexbox,
            Bootstrap, y Tailwind, lo que me permite enfrentar proyectos
            desafiantes. También he explorado el desarrollo backend con PHP y
            MySQL, y he creado aplicaciones web dinámicas con React y Firebase.
            Mi enfoque se basa en la mejora continua y la adaptación a las
            últimas tendencias tecnológicas. Mi objetivo es brindar soluciones
            efectivas y experiencias atractivas para los usuarios. Mi capacidad
            para aprender rápidamente me hace un activo valioso para equipos de
            desarrollo web. Estoy emocionado de unirme a proyectos emocionantes
            en el campo de la programación.
          </p>
        </div>
      </div>
    </>
  );
};
