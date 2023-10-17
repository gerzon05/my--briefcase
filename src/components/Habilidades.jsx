import React from "react";
import { Accordion } from "flowbite-react";

export const Habilidades = () => {
  return (
    <div className="flex justify-evenly flex-wrap gap-4 items-center p-4">
      <section className="w-[280px] sm:w-[400px]">
        <h2 className="text-white font-lilita text-xl sm:text-4xl font-extrabold tracking-wide my-5">
          Lenguajes, Framework and Librerias que uso
        </h2>
        <p className="text-white text-xl font-Neue tracking-wide my-5">
          Las tecnologías que uso me permiten construir aplicaciones web
          completas, desde sitios web estáticos hasta aplicaciones web dinámicas
          y complejas. La combinación de estas herramientas proporciona un
          amplio espectro de posibilidades para crear soluciones web efectivas y
          atractivas.
        </p>
      </section>
      <section className="w-[280px] relative z-10 sm:w-[400px]">
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title className="bg-white">
              ¿Que es HTML?
            </Accordion.Title>
            <Accordion.Content className="bg-blue-300">
              <p>
                HTML es el lenguaje de marcado utilizado para crear páginas web.
                Permite definir la estructura y el contenido de una página web
                mediante etiquetas, como encabezados, párrafos, imágenes y
                enlaces.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="bg-white">¿Que es CSS?</Accordion.Title>
            <Accordion.Content className="bg-blue-300">
              <p>
                CSS se utiliza para dar estilo y diseño a las páginas web
                creadas con HTML. Permite controlar la apariencia de elementos
                HTML, como colores, fuentes, márgenes y posicionamiento.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="bg-white">
              ¿Que es JAVASCRIPT?
            </Accordion.Title>
            <Accordion.Content className="bg-blue-300">
              <p>
                JavaScript es un lenguaje de programación utilizado para agregar
                interactividad a las páginas web. Permite crear efectos
                dinámicos, validar formularios y gestionar eventos en el
                navegador del usuario.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="bg-white">
              ¿Que es MYSQL?
            </Accordion.Title>
            <Accordion.Content className="bg-blue-300">
              <p>
                MySQL es un sistema de gestión de bases de datos relacionales
                (RDBMS) ampliamente utilizado. Se utiliza para almacenar y
                gestionar datos, lo que lo hace esencial para aplicaciones web
                que requieren almacenamiento de información.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="bg-white">¿Que es PHP?</Accordion.Title>
            <Accordion.Content className="bg-blue-300">
              <p>
                PHP es un lenguaje de programación de servidor ampliamente
                utilizado en el desarrollo web. Se utiliza para generar páginas
                web dinámicas y conectarse a bases de datos. Es compatible con
                una amplia variedad de sistemas operativos y servidores web.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="bg-white">
              ¿Que es REACT?
            </Accordion.Title>
            <Accordion.Content className="bg-blue-300">
              <p>
                React es una biblioteca de JavaScript desarrollada por Facebook.
                Se utiliza para crear interfaces de usuario interactivas y
                componentes reutilizables en aplicaciones web. Se basa en la
                idea de construir la interfaz de usuario como un conjunto de
                componentes independientes.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="bg-white">
              ¿Que es BOOTSTRAP?
            </Accordion.Title>
            <Accordion.Content className="bg-blue-300">
              <p>
                Bootstrap es un marco de diseño de código abierto que facilita
                la creación de sitios web y aplicaciones móviles receptivas.
                Proporciona una colección de componentes predefinidos y estilos
                CSS para agilizar el desarrollo web.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="bg-white">
              ¿Que es TAILWIND CSS?
            </Accordion.Title>
            <Accordion.Content className="bg-blue-300">
              <p>
                Tailwind CSS es un marco de diseño CSS que se centra en la
                creación de interfaces de usuario personalizadas mediante clases
                CSS utilitarias. Permite diseñar de manera eficiente y mantener
                un código limpio y legible.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </section>
    </div>
  );
};
