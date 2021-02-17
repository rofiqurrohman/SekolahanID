import React from "react";
import { ReactComponent as Logoschool } from "./../Assets/image/undraw_book_lover.svg";
import { FaGithub, FaInstagram } from "react-icons/fa";
import useDarkMode from "./../Const/useDarkMode";

const About = () => {
  const [theme] = useDarkMode();
  return (
    <div
      className={`about ${theme}-theme d-flex flex-column justify-content-center align-items-center vh-100`}
    >
      <Logoschool width="300px" height="300px" />
      <h4 className="fw-bold">About Sekolahan ID</h4>
      <h6 className="text-center">
        Sekolahan ID adalah aplikasi yang memberikan data-data sekolah yang ada
        di Indonesia
        <p className="mt-3">Develop by: Rofiqur Rohman</p>
      </h6>
      <h4>
        <a
          href="https://github.com/rofiqurrohman"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/rofiqurrohmn"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </h4>
    </div>
  );
};

export default About;
