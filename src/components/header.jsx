import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import IconsMenuSvg from "../assets/images/icons-menu.svg";
import IconsSearchSvg from "../assets/images/icons-search.svg";

const Header = ({ onSearch, searchTerm, setSearchTerm }) => {
  const [isNavOpen, setIsNavOpen] = useState(window.innerWidth > 1024);
  const [isSearchOpen, setIsSearchOpen] = useState(window.innerWidth > 1024);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm.trim());
  };

  const handleToggle = () => {
    if (window.innerWidth <= 1024) {
      setIsNavOpen(!isNavOpen);
      setIsSearchOpen(false);
    }
  };

  const handleSearchToggle = () => {
    if (window.innerWidth <= 1024) {
      setIsSearchOpen(!isSearchOpen);
      setIsNavOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsNavOpen(window.innerWidth > 1024);
      setIsSearchOpen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="d-flex align-items-center justify-content-between">
      <Link to="/">
        <img src={Logo} alt="Company Logo" style={{ maxWidth: "8.2rem" }} />
      </Link>

      <div>
        <button id="boutonMobil" className="btn " onClick={handleSearchToggle}>
          <img
            src={IconsSearchSvg}
            alt="Search Icon"
            style={{ width: "32px", height: "32px" }}
          />
        </button>
        {isSearchOpen && (
          <form
            onSubmit={handleSearch}
            className={`d-flex justify-content-end search-bar ${
              isSearchOpen ? "search-open" : ""
            }`}
          >
            <div className="input-group d-flex">
              <input
                type="text"
                className="form-control input"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="input-group-append">
                <button type="button" className="btn" onClick={handleSearch}>
                  <img
                    src={IconsSearchSvg}
                    alt="Search Icon"
                    style={{ width: "24px", height: "24px" }}
                  />
                </button>
              </div>
            </div>
          </form>
        )}

        <button
          className=" navbar-toggler  "
          type="button"
          onClick={handleToggle}
        >
          <img
            src={IconsMenuSvg}
            alt="Menu Icon"
            style={{ width: "32px", height: "32px" }}
          />
        </button>

        {isNavOpen && (
          <nav className={`navbar-flex-column  ${isNavOpen ? "nav-open" : ""}`}>
            <Link className="nav-link" to="/batiment" onClick={handleToggle}>
              Bâtiment
            </Link>
            <Link className="nav-link" to="/services" onClick={handleToggle}>
              Services
            </Link>
            <Link className="nav-link" to="/fabrication" onClick={handleToggle}>
              Fabrication
            </Link>
            <Link
              className="nav-link"
              to="/alimentation"
              onClick={handleToggle}
            >
              Alimentation
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
