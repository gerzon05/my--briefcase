import React from "react";
import {
  BsWhatsapp,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { Footer } from "flowbite-react";

export const Footer2 = () => {
  return (
    <Footer container className="bg-transparent">
      <Footer.Copyright
        by="GerzonDeveloper™"
        href="#"
        year={2023}
        className="text-white"
      />
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center relative z-10">
        <Footer.Icon
          target="_blank"
          className="text-white"
          href="https://web.facebook.com/profile.php?id=61552233277487"
          icon={BsFacebook}
        />
        <Footer.Icon
          target="_blank"
          className="text-white"
          href="https://www.instagram.com/gerzon_rangel/"
          icon={BsInstagram}
        />
        <Footer.Icon
          target="_blank"
          className="text-white"
          href="https://twitter.com/RangelGerzon"
          icon={BsTwitter}
        />
        <Footer.Icon
          target="_blank"
          className="text-white"
          href="https://github.com/gerzon05"
          icon={BsGithub}
        />
        <Footer.Icon
          target="_blank"
          className="text-white"
          href="#"
          icon={BsWhatsapp}
        />
        <Footer.Icon
          target="_blank"
          className="text-white"
          href="https://www.linkedin.com/in/gerzon-rangel-258109211/"
          icon={AiFillLinkedin}
        />
      </div>
    </Footer>
  );
};
