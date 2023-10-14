import { Drawer } from "@mui/material";
import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import logo from "../assets/nueva2.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, Outlet } from "react-router-dom";

export const Navigator = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="sticky z-50 top-0 left-0 right-0 bg-blue-600 px-4 flex justify-between items-center shadow-md shadow-[#e3e4e5]">
        <div>
          <img src={logo} alt="Logo" className="w-52" />
        </div>
        <nav className="w-[60%] hidden md:block">
          <a href="#" className="ml-3 font-tillana text-xl text-white hover:text-green-400 transition-colors duration-1000 ">
            <Link to="/">Start</Link>
          </a>
          <a href="#" className="ml-3 font-tillana text-xl text-white hover:text-green-400 transition-colors duration-1000 ">
          <Link to="/">About</Link>
          </a>
          <a href="#" className="ml-3 font-tillana text-xl text-white hover:text-green-400 transition-colors duration-1000 ">
          <Link to="/myproyect">My Proyect</Link>
          </a>
          <a href="#" className="ml-3 font-tillana text-xl text-white hover:text-green-400 transition-colors duration-1000 ">
            Curriculum
          </a>
          <a href="#" className="ml-3 font-tillana text-xl text-white hover:text-green-400 transition-colors duration-1000 ">
            Contact
          </a>
        </nav>
        <Outlet />
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <GiHamburgerMenu className="text-white md:hidden text-3xl" />
        </button>
      </div>
      <Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
        <div className="z-50 h-[70vh] p-2 bg-blue-600">
          <button
            className="flex justify-end p-3 w-full border-b-[1px]"
            onClick={() => setOpen(false)}
          >
            <AiFillCloseCircle className="text-3xl" />
          </button>
          <section>
            <nav className="flex flex-col justify-center items-center gap-3">
              <a
                href="#"
                className="w-full px-3 font-tillana text-2xl text-white"
              >
                About
              </a>
              <a
                href="#"
                className="w-full px-3 font-tillana text-2xl text-white"
              >
                About
              </a>
              <a
                href="#"
                className="w-full px-3 font-tillana text-2xl text-white"
              >
                About
              </a>
              <a
                href="#"
                className="w-full px-3 font-tillana text-2xl text-white"
              >
                About
              </a>
            </nav>
          </section>
        </div>
      </Drawer>
    </>
  );
};
