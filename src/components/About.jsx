import React, { useCallback } from "react";
import fondo from "../assets/fondoabout.jpg";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const About = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const [text] = useTypewriter({
    words: ["Gerzon", "developer", "programmer"],
    loop: {},
    typeSpeed: 150,
    delaySpeed: 130,
  });
  return (
    <>
      <div className="w-full h-[88vh] relative overflow-hidden">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.7,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <figure className="absolute -z-10 top-0 left-0 ring-0 bottom-0 w-full">
          <img
            src={fondo}
            alt="fondo"
            className="w-full h-[88vh] object-cover"
          />
        </figure>
        <div className="px-6 py-10 lg:w-[500px]">
          <h1 className="font-bold py-6 text-2xl sm:text-4xl font-lilita tracking-wider text-white">
            I am <span className="text-green-600">{text}</span>
            <span>
              <Cursor />
            </span>
          </h1>
          <p className="text-gray-300 w-[80%] bg-black/60 md:bg-transparent text-md sm:text-xl md:text-lg md:w-[350px] lg:w-[550px] lg:text-2xl mt-10 font-Neue overflow-hidden">
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
