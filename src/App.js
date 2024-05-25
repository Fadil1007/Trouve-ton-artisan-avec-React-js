import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import Home from "../src/pages/home";
import ArtisanDetail from "../src/pages/artisanDetail";
import Alimentation from "../src/pages/alimentation";
import Batiment from "../src/pages/batiment";
import Fabrication from "../src/pages/fabrication";
import Services from "../src/pages/services";
import artisansData from "../src/datas/datas.json";
import LegalMentions from "../src/pages/legal/mentions";
import LegalPersonalData from "../src/pages/legal/personalData";
import LegalAccessibility from "../src/pages/legal/accessibility";
import LegalCookies from "../src/pages/legal/cookies";
import Error404 from "./pages/404error";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArtisans, setFilteredArtisans] = useState(artisansData);

  const handleSearch = (searchTerm) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();

    if (!lowerCaseSearchTerm) {
      setFilteredArtisans(artisansData);
      return;
    }

    const filteredResults = artisansData.filter((artisan) => {
      const lowerCaseName = artisan.name.toLowerCase();
      const lowerCaseSpecialty = artisan.specialty.toLowerCase();
      const lowerCaseLocation = artisan.location.toLowerCase();

      return (
        lowerCaseName.includes(lowerCaseSearchTerm) ||
        lowerCaseSpecialty.includes(lowerCaseSearchTerm) ||
        lowerCaseLocation.includes(lowerCaseSearchTerm)
      );
    });

    setFilteredArtisans(filteredResults);
    setSearchTerm(lowerCaseSearchTerm);
  };

  return (
    <Router>
      <Header
        onSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Routes>
        <Route path="/" element={<Home artisans={filteredArtisans} />} />
        <Route path="/artisan/:id" element={<ArtisanDetail />} />
        <Route
          path="/alimentation"
          element={
            <Alimentation
              artisans={filteredArtisans}
              searchResults={filteredArtisans}
            />
          }
        />
        <Route
          path="/batiment"
          element={
            <Batiment
              artisans={filteredArtisans}
              searchResults={filteredArtisans}
            />
          }
        />
        <Route
          path="/fabrication"
          element={
            <Fabrication
              artisans={filteredArtisans}
              searchResults={filteredArtisans}
            />
          }
        />
        <Route
          path="/services"
          element={
            <Services
              artisans={filteredArtisans}
              searchResults={filteredArtisans}
            />
          }
        />
        <Route path="/legal/mentions" element={<LegalMentions />} />
        <Route path="/legal/personalData" element={<LegalPersonalData />} />
        <Route path="/legal/accessibility" element={<LegalAccessibility />} />
        <Route path="/legal/cookies" element={<LegalCookies />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
