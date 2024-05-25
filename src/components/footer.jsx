import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="d-flex flex-column  align-items-center ">
      <h3 className="h3-contact">Contact</h3>
      <p>
        101 cours Charlemagne <br />
        CS 20033 <br />
        69269 LYON CEDEX 02 <br />
        France <br />
        <a className="tel" href="tel:+330426734000">
          +33 (0)4 26 73 40 00
        </a>
      </p>

      <div className="barre-centree"></div>
      <div>
        <ul className="legalMentions d-flex justify-content-center">
          <li>
            <Link to="/legal/mentions" className="legal-mentions">
              Mentions Légales
            </Link>
          </li>
          <li>
            <Link to="/legal/personalData" className="legal-mentions">
              Données Personnelles
            </Link>
          </li>
          <li>
            <Link to="/legal/accessibility" className="legal-mentions">
              Accessibilité
            </Link>
          </li>
          <li>
            <Link to="/legal/cookies" className="legal-mentions">
              Cookies
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
