import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { Navigator } from "../components/Navigator";
import fondo from "../assets/fondoanimado.gif"
import { Footer2 } from "../components/Footer2";

export const Contact = ({ title, id, dark }) => {
  const refForm = useRef();
  const handlesubmit = (event) => {
    event.preventDefault();

    const serviceid = "service_lxj83f4";
    const templeid = "template_d6en4o8";
    const apikey = "Zp5BzoP8AcAaT0z5S";

    emailjs
      .sendForm(serviceid, templeid, refForm.current, apikey)
      .then((Result) => console.log(Result.text))
      .catch((error) => console.log(error));

    event.target.name.value = "";
    event.target.email.value = "";
    event.target.mensaje.value = "";
  };
  return (
    <>
      <figure className="fixed -z-10 top-0 left-0 ring-0 bottom-0 w-full">
        <img
          src={fondo}
          alt="fondo"
          className="w-full h-[100vh] object-cover"
          loop
        />
      </figure>
      <Navigator />
      <h2 className="text-7xl text-white font-lilita font-semibold text-center py-3">Contectame</h2>
      <div className="flex justify-evenly flex-wrap">
        <section className="w-[90%] lg:w-[450px] p-4 flex gap-14 justify-center flex-wrap rounded-2xl">
          <form className="p-5 w-full" ref={refForm} onSubmit={handlesubmit}>
            <figure className="mt-2">
              <label className="w-full text-white block text-xs">Nombre*</label>
              <input
                id="name"
                name="from_name"
                type="text"
                className="p-1 w-full rounded-md my-1 border-[2px] bg-transparent border-white"
                placeholder="Name"
                required
              />
            </figure>
            <figure className="mt-2">
              <label className="w-full text-white block text-xs">Gmail*</label>
              <input
                id="email"
                name="email"
                type="email"
                className="p-1 w-full rounded-md my-1 border-[2px] bg-transparent border-white"
                placeholder="Email"
                required
              />
            </figure>
            <figure className="mt-2">
              <label className="w-full text-white block text-xs">
                Mensaje*
              </label>
              <textarea
                className="border-[2px] bg-transparent border-white p-2 w-full my-2 resize-none rounded-md h-44"
                name="mensaje"
                cols="30"
                rows="10"
                id="mensaje"
                placeholder="Mensaje"
                required
              ></textarea>
            </figure>
            <input
              type="submit"
              className="text-white p-2 rounded-lg bg-transparent border-[2px] w-full text-center hover:border-[0 ] hover:bg-white hover:text-black transition-colors duration-1000"
              value="Enviar"
            />
          </form>
        </section>
        <section className="w-[90%] flex justify-center items-center lg:w-[450px]">
          <strong className="text-white text-center font-tillana font-thin text-3xl">Estoy encantado de conocer nuevas oportunidades y colaborar contigo. No dudes en contactarme.</strong>
        </section>
      </div>
      <Footer2 />
    </>
  );
};
