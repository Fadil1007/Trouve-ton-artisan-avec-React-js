import React from "react";
import { Link } from "react-router-dom";
import stars from "../assets/images/stars.png";

const Home = ({ artisans }) => {
  const topArtisans = artisans
    .filter((artisan) => artisan.top === true)
    .slice(0, 3);

  return (
    <main>
      <section className="d-flex flex-column align-items-center">
        <h1 className="titleHome">Liste des artisans</h1>
        <h2>Comment trouver mon artisan ?</h2>
        <ol>
          <li>Choisir la catégorie d’artisanat dans le menu.</li>
          <li>Choisir un artisan.</li>
          <li>Le contacter via le formulaire de contact.</li>
          <li>Une réponse sera apportée sous 48h.</li>
        </ol>
      </section>
      <section className=" mainPArt2 d-flex flex-column align-items-center ">
        <h2 className="titleHome bold-heading">Les trois artisans du mois</h2>
        {topArtisans.length > 0 ? (
          <div className="card-deck">
            {topArtisans.map((artisan) => (
              <div
                key={artisan.id}
                className="card mb-4"
                style={{ minWidth: "250px" }}
              >
                <div className="card-body">
                  <Link
                    to={`/artisan/${artisan.id}`}
                    className="text-dark text-decoration-none"
                  >
                    <h5 className="card-title text-dark">{artisan.name}</h5>
                    <p className="card-text text-dark">
                      <strong className="text-dark">
                        Note: {artisan.note}{" "}
                        <img src={stars} alt="stars" className="stars-image" />
                      </strong>
                      <br />
                      <strong>Spécialité:</strong> {artisan.specialty} <br />
                      <strong>Localisation:</strong> {artisan.location}
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Aucun artisan du mois trouvé.</p>
        )}
      </section>
    </main>
  );
};

export default Home;
