import React, { useEffect, useRef, useState } from "react";
import "./AboutSection.css";
import aboutImage1 from "./HomeImg/nl1.PNG";
import aboutImage2 from "./HomeImg/nl2.PNG";
import aboutImage3 from "./HomeImg/nl3.PNG";
import aboutImage4 from "./HomeImg/nl4.PNG";
import Logo from "./HomeImg/companyLogo.jpg";
import Logo2 from "./HomeImg/l1.PNG";
import icon1 from "./HomeImg/premium-icon.png";
import icon2 from "./HomeImg/Eco-Friendly.png";
import broshure from "./HomeImg/DALAAN Carpet Tiles.pdf";

const slideImages = [aboutImage1, aboutImage2, aboutImage3, aboutImage4];

const AIDFAboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideImages.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="aidf-about-section"
      style={{ backgroundColor: "#fafafa" }}
    >
      <div className="aidf-about-container">
        {/* Desktop/Large View Image */}
        <div
          className="aidf-about-image large-view-image"
          style={{
            overflow: "hidden",
            borderRadius: "16px",
            position: "relative",
          }}
        >
          {/* l1.PNG image in top left */}
          <img
            src={Logo2}
            alt="n1"
            className="about-logo2"
            style={{
              position: "absolute",
              top: 14,
              left: 14,
              zIndex: 3,
              width: 65,
              height: 60,
              borderRadius: "8px",
              objectFit: "contain",
              background: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              border: "2px solid #FFD600",
              padding: 2,
            }}
          />
          {/* Get Catalogue Button */}
          <a
            href={broshure}
            download
            className="aidf-get-catalogue-btn"
            style={{
              position: "absolute",
              bottom: 18,
              right: 18,
              zIndex: 4,
              background: "#d12626ff",
              color: "#fffefeff",
              fontWeight: 700,
              fontSize: "1rem",
              padding: "8px 20px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              border: "2px solid #6B9071",
              textDecoration: "none",
              transition: "background 0.2s",
              display: "inline-block",
            }}
          >
            Get Catalogue
          </a>
          {/* Newly Launched Badge (styled like Carpet/Dalaan) */}
          <div
            className="about-newly-launched"
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              zIndex: 2,
              background: "#FFD600",
              color: "#FF1744",
              fontWeight: 700,
              fontSize: "0.65rem",
              padding: "4px 14px",
              borderRadius: "6px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              letterSpacing: "1px",
              border: "2px solid #FF1744",
              textTransform: "uppercase",
              display: "inline-block",
            }}
          >
            <span style={{ color: "#FF1744" }}>Newly</span>{" "}
            <span style={{ color: "#FF1744" }}>Launched</span>
          </div>
          <div
            ref={slideRef}
            style={{
              display: "flex",
              width: `${slideImages.length * 100}%`,
              transform: `translateX(-${currentIndex * (100 / slideImages.length)}%)`,
              transition: "transform 0.7s cubic-bezier(.7,.2,.3,1)",
              height: "100%",
            }}
          >
            {slideImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`About AIDF Group Slide ${idx + 1}`}
                style={{
                  width: `${100 / slideImages.length}%`,
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "16px",
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
          <div
            className="aidf-image-overlay"
            style={{
              backgroundColor: "rgba(15, 42, 29, 0.1)",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: "16px",
            }}
          ></div>
        </div>

        {/* Mobile View Image */}
        <div className="aidf-about-image mobile-about-image" style={{ position: "relative" }}>
          {/* Show logo2 and badge on mobile as well */}
          <img
            src={Logo2}
            alt="n1"
            className="about-logo2-mobile"
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              zIndex: 3,
              width: 48,
              height: 44,
              borderRadius: "8px",
              objectFit: "contain",
              background: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              border: "2px solid #FFD600",
              padding: 2,
              display: "block",
            }}
          />
          {/* Get Catalogue Button for mobile */}
          <a
            href={broshure}
            download
            className="aidf-get-catalogue-btn-mobile"
            style={{
              position: "absolute",
              bottom: 12,
              right: 12,
              zIndex: 4,
              background: "#c92e2eff",
              color: "#ffffffff",
              fontWeight: 700,
              fontSize: "0.95rem",
              padding: "7px 16px",
              borderRadius: "7px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              border: "2px solid #6B9071",
              textDecoration: "none",
              transition: "background 0.2s",
              display: "inline-block",
            }}
          >
            Get Catalogue
          </a>
          <div
            className="about-newly-launched-mobile"
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 2,
              background: "#FFD600",
              color: "#FF1744",
              fontWeight: 700,
              fontSize: "0.6rem",
              padding: "3px 10px",
              borderRadius: "6px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              letterSpacing: "1px",
              border: "2px solid #FF1744",
              textTransform: "uppercase",
              display: "inline-block",
            }}
          >
            <span style={{ color: "#FF1744" }}>Newly</span>{" "}
            <span style={{ color: "#FF1744" }}>Launched</span>
          </div>
          <img
            src={slideImages[currentIndex]}
            alt={`About AIDF Group Slide ${currentIndex + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "16px",
            }}
          />
        </div>

        <div className="aidf-about-content">
          <div className="aidf-section-title">
            <h2 style={{ color: "#2a2a2a" }}>About AIDF</h2>
            <div className="aidf-about-powered">
              <h6 style={{ fontSize: "16px" }}>Powered by Advant</h6>
              <img
                style={{ height: "40px" }}
                src={Logo}
                alt="About AIDF Group"
              />
            </div>
            <div
              className="aidf-title-decoration"
              style={{ backgroundColor: "#6B9071" }}
            ></div>
          </div>
          <p className="aidf-about-text" style={{ color: "#375534" }}>
            Since our inception the aidf brand has made a commendable mark in
            the industry through its state of the art interior products range.
            Our products are manufactured using the most advanced machinery and
            technology to provide great durability and quality by which we aim
            to reach distinguishing levels of success through our constant
            dedication and diligence.
          </p>
          <div className="aidf-about-features">
            <div className="aidf-feature">
              <div
                className="aidf-feature-icon"
                style={{ backgroundColor: "#fff" }}
              >
                <img
                  style={{ height: "40px" }}
                  src={icon1}
                  alt="Premium Icon"
                />
                <i className="fas fa-medal" style={{ color: "#E3EED4" }}></i>
              </div>
              <div className="aidf-feature-content">
                <h3 style={{ color: "#2a2a2a" }}>Premium Quality</h3>
                <p style={{ color: "#2a2a2a" }}>
                  Manufactured with the highest grade materials and precision
                  engineering
                </p>
              </div>
            </div>
            <div className="aidf-feature">
              <div
                className="aidf-feature-icon"
                style={{ backgroundColor: "#fff" }}
              >
                <img
                  style={{ height: "40px" }}
                  src={icon2}
                  alt="Eco-friendly"
                />
                <i className="fas fa-leaf" style={{ color: "#E3EED4" }}></i>
              </div>
              <div className="aidf-feature-content">
                <h3 style={{ color: "#2a2a2a" }}>Eco-Friendly</h3>
                <p style={{ color: "#2a2a2a" }}>
                  Energy-efficient solutions that reduce your carbon footprint
                </p>
              </div>
            </div>
          </div>
          <a
            href="/about-us"
            className="aidf-about-button"
            style={{ backgroundColor: "red", color: "white" }}
          >
            Learn More
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AIDFAboutSection;
