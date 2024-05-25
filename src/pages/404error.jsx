import React from "react";
import NotFoundImage from "../assets/images/404.jpg";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <main className="main404 d-flex flex-column flex-md-row justify-content-center align-items-center mt-5">
      <img
        className="NotFoundImage w-50 mb-4"
        src={NotFoundImage}
        alt="NotFoundImage"
      />
      <div className="d-flex flex-column align-items-center">
        <h1 className="title404">La page recherchée est introuvable</h1>
        <NavLink to="/" className="warningButton btn btn-warning">
          Retourner à l'accueil
        </NavLink>
      </div>
    </main>
  );
};

export default Error404;
