import React, { useState } from "react";
import { useParams } from "react-router-dom";
import artisansData from "../datas/datas.json";
import stars from "../assets/images/stars.png";

const ArtisanDetail = () => {
  const { id } = useParams();
  const artisan = artisansData.find((a) => a.id === id);

  const [contactForm, setContactForm] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!artisan) {
    return <p>Artisan non trouvé.</p>;
  }

  return (
    <main className="d-flex flex-column align-items-center ">
      <div className="card w-50 mt-5">
        <div className="card-body">
          <h1>{artisan.name}</h1>

          <p className="text-dark">
            <strong>Note:</strong> {artisan.note}{" "}
            <img src={stars} alt="stars" className="stars-image" />
          </p>
          <p>
            <strong>Spécialité:</strong> {artisan.specialty}
          </p>
          <p>
            <strong>Localisation:</strong> {artisan.location}
          </p>
          <p>
            <strong>A propos:</strong> {artisan.about}
          </p>
          <p>
            <strong>Catégorie:</strong> {artisan.category}
          </p>
          <p>
            <strong>Site Web:</strong>{" "}
            <a href={artisan.website}>{artisan.website}</a>
          </p>
        </div>
      </div>
      <div className="mainPArt2 d-flex flex-column align-items-center w-100">
        <div className="card w-50 mt-5 mb-5">
          <div className="card-body">
            <h2 className="card-title">Contactez-nous</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Objet:</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                />
              </div>

              <button type="submit" className="boutonForm btn btn-primary mt-3">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArtisanDetail;
