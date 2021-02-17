import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logoschool } from "./../Assets/image/undraw_book_lover.svg";
import { FaSearch } from "react-icons/fa";
import useDarkMode from "./../Const/useDarkMode";

const Home = () => {
  const [theme] = useDarkMode();
  return (
    <div
      className={`home ${theme}-theme d-flex flex-column justify-content-center align-items-center vh-100`}
    >
      <Logoschool width="300px" height="300px" />
      <h5 className="fw-bold">Selamat Datang di Sekolahan ID</h5>
      <NavLink className="btn fw-bold" to="/search" role="button">
        CARI SEKOLAH KAMU <FaSearch />
      </NavLink>
    </div>
  );
};

export default Home;
