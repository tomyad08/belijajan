"use client";
import React, { useState } from "react";
import "./LandingCSS.css";
import "bootstrap/dist/css/bootstrap.css";

const NavBar = () => {
  const [kondisi, setKondisi] = useState(false);
  return (
    <div
      style={{
        color: "white",
      }}
    >
      <div className="row">
        <div className=" col pt-3" id="sandwich">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-filter-left"
            viewBox="0 0 16 16"
            onClick={() => setKondisi(!kondisi)}
          >
            <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
          </svg>
        </div>
        <div className="col-7 pt-3">
          <h2
            style={{
              fontFamily: "'Signika Negative', sans-serif",
              fontSize: "20px",
              marginLeft: "45px",
              paddingTop: "10px",
            }}
          >
            <strong>belijajan.com</strong>
          </h2>
        </div>
        <div className="col py-3">
          <div className="float-end">
            <a
              href="#produk"
              style={{ textDecoration: "none", color: "white" }}
            >
              <span
                className="mx-3 fs-4"
                id="menu"
                style={{ fontFamily: "'Signika Negative', sans-serif" }}
              >
                Produk
              </span>
            </a>
            <a href="#faq" style={{ textDecoration: "none", color: "white" }}>
              <span
                className="mx-3 fs-4"
                id="menu"
                style={{
                  fontFamily: "'Signika Negative', sans-serif",
                }}
              >
                FAQ
              </span>
            </a>
            <a
              href="#lokasi"
              style={{ textDecoration: "none", color: "white" }}
            >
              <span
                className="mx-3 fs-4"
                id="menu"
                style={{
                  fontFamily: "'Signika Negative', sans-serif",
                }}
              >
                Lokasi
              </span>
            </a>
            <a
              href="#kontak"
              style={{ textDecoration: "none", color: "white" }}
            >
              <span
                className="mx-3 fs-4"
                id="menu"
                style={{
                  fontFamily: "'Signika Negative', sans-serif",
                }}
              >
                Kontak
              </span>
            </a>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      {kondisi && (
        <div
          style={{
            backgroundColor: "#FFCF34",
            width: "100%",
          }}
          className="px-1 py-2 border border-0 rounded-3 d-flex justify-content-around"
        >
          <a href="#produk" style={{ textDecoration: "none", color: "black" }}>
            <div
              id="menuSandwich"
              style={{ fontFamily: "'Signika Negative', sans-serif" }}
            >
              Produk
            </div>
          </a>
          <a href="#FAQ" style={{ textDecoration: "none", color: "black" }}>
            <div
              id="menuSandwich"
              style={{ fontFamily: "'Signika Negative', sans-serif" }}
            >
              FAQ
            </div>
          </a>
          <a href="#lokasi" style={{ textDecoration: "none", color: "black" }}>
            <div
              id="menuSandwich"
              style={{ fontFamily: "'Signika Negative', sans-serif" }}
            >
              Lokasi
            </div>
          </a>
          <a href="#kontak" style={{ textDecoration: "none", color: "black" }}>
            <div
              id="menuSandwich"
              style={{ fontFamily: "'Signika Negative', sans-serif" }}
            >
              Kontak
            </div>
          </a>
        </div>
      )}
    </div>
  );
};
export default NavBar;
