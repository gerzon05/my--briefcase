import React from "react";
import { Timeline } from "flowbite-react";
import { FaGraduationCap } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";

export const Educacion = () => {
  return (
    <>
      <Timeline>
        <Timeline.Item>
          <Timeline.Point icon={FaGraduationCap} className="w-[50px]" />
          <Timeline.Content>
            <Timeline.Time>Diciembre 2022</Timeline.Time>
            <Timeline.Title className="font-Neue text-3xl text-amber-400 font-light">
              BACHILLER ACEDEMICO
            </Timeline.Title>
            <Timeline.Body>
              <p className="text-lg text-white">
                Terminé exitosamente mi Bachillerato Académico, demostrando mi
                dedicación, habilidades de aprendizaje y logro de una base
                sólida en educación. Este logro marca el inicio de mi viaje
                hacia la excelencia académica y el desarrollo profesional.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={PiCertificate} />
          <Timeline.Content>
            <Timeline.Time>Julio 2023</Timeline.Time>
            <Timeline.Title className="font-Neue text-3xl text-amber-400 font-light">
              CONSTRUCCION DE BASES DE DATOS CON MYSQL
            </Timeline.Title>
            <Timeline.Body>
              <p className="text-lg text-white">
                Complete con éxito el curso de 'Construcción de Bases de Datos
                con MySQL'. Durante este programa de formación, adquirí un
                conocimiento sólido sobre la creación, gestión y optimización de
                bases de datos utilizando el sistema de gestión de bases de
                datos MySQL.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={PiCertificate} />
          <Timeline.Content>
            <Timeline.Time>Septiembre 2023</Timeline.Time>
            <Timeline.Title className="font-Neue text-amber-400 text-3xl font-light">
              CURSO DE HTML5
            </Timeline.Title>
            <Timeline.Body>
              <p className="text-lg text-white">
                Complete con éxito un curso de HTML5! Durante este curso,
                adquirí un conocimiento sólido sobre el lenguaje de marcado
                esencial para la creación de sitios web modernos y receptivos.
                Aprendí a estructurar y diseñar páginas web utilizando las
                últimas prácticas de HTML5, incluyendo elementos semánticos,
                formularios avanzados y multimedia.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={PiCertificate} />
          <Timeline.Content>
            <Timeline.Time>Septiembre 2023</Timeline.Time>
            <Timeline.Title className="font-Neue text-3xl text-amber-400 font-light">
              TALLER DE CSS3
            </Timeline.Title>
            <Timeline.Body>
              <p className="text-lg text-white">
                He concluido con éxito un curso integral de CSS3, lo que me ha
                permitido adquirir conocimientos y habilidades avanzadas en la
                creación de estilos y diseños web. Ahora estoy emocionado por
                aplicar estas nuevas competencias en mis proyectos y seguir
                mejorando mi capacidad para desarrollar sitios web atractivos y
                funcionales.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={PiCertificate} />
          <Timeline.Content>
            <Timeline.Time>Septiembre 2023</Timeline.Time>
            <Timeline.Title className="font-Neue text-amber-400 text-3xl font-light">
              CURSO DE GIT Y GITHUB
            </Timeline.Title>
            <Timeline.Body>
              <p className="text-lg text-white">
                Complete con éxito un curso especializado en Git y GitHub, dos
                herramientas esenciales en el mundo del desarrollo de software y
                la colaboración en proyectos de código abierto. Durante este
                curso, he adquirido conocimientos sólidos sobre el control de
                versiones, la gestión eficiente de repositorios, y la
                colaboración efectiva con equipos de desarrollo. Estoy
                emocionado por la oportunidad de aplicar estos nuevos
                conocimientos en mis proyectos y contribuir a la comunidad de
                desarrollo de software de manera más efectiva.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={FaGraduationCap} />
          <Timeline.Content>
            <Timeline.Time>Octubre 2023</Timeline.Time>
            <Timeline.Title className="font-Neue text-amber-400 text-3xl font-light">
              FULLSTACK
            </Timeline.Title>
            <Timeline.Body>
              <p className="text-lg text-white">
                ¡He completado con éxito un curso fullstack! Durante este
                apasionante viaje de aprendizaje, he adquirido las habilidades
                esenciales tanto en el desarrollo del lado del cliente como del
                servidor. Ahora, puedo crear aplicaciones web completas desde
                cero, desde la interfaz de usuario hasta la lógica del servidor.
                Este logro no solo representa mi compromiso con el desarrollo
                web, sino también mi capacidad para enfrentar desafíos
                tecnológicos y ofrecer soluciones efectivas.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={FaGraduationCap} />
          <Timeline.Content>
            <Timeline.Time>Octubre 2023</Timeline.Time>
            <Timeline.Title className="font-Neue text-amber-400 text-3xl font-light">
              REACT DEVELOPER
            </Timeline.Title>
            <Timeline.Body>
              <p className="text-lg text-white">
                He tenido el privilegio de completar con éxito un curso de
                Desarrollador de React, donde he adquirido habilidades
                fundamentales en la creación de aplicaciones web interactivas y
                dinámicas. Ahora estoy emocionado por aplicar mis conocimientos
                en proyectos desafiantes y contribuir al mundo del desarrollo
                web.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </>
  );
};
