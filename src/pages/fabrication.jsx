import React from "react";
import { Link } from "react-router-dom";
import stars from "../assets/images/stars.png";

const Fabrication = ({ artisans, searchResults }) => {
  const displayArtisans =
    searchResults && searchResults.length > 0 ? searchResults : artisans;

  const fabricationArtisans = displayArtisans.filter(
    (artisan) => artisan.category === "Fabrication"
  );

  return (
    <main>
      <section className="d-flex flex-column align-items-center">
        <h1 className="titleHome">Artisans Fabrication</h1>
      </section>
      <section className="mainPArt2 d-flex flex-column align-items-center">
        {fabricationArtisans.length > 0 ? (
          <div className="card-deck">
            {fabricationArtisans.map((artisan) => (
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
                      </strong>{" "}
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
          <p>Aucun artisan Fabrication trouvé.</p>
        )}
      </section>
    </main>
  );
};

export default Fabrication;
