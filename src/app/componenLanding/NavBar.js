"use client";
import React, { useState } from "react";
import "./LandingCSS.css";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";

const NavBar = () => {
  const [kondisi, setKondisi] = useState(false);

  const data = [
    {
      id: 1,
      nama: "Produk",
      link: "#produk",
    },
    {
      id: 2,
      nama: "Tentang Kami",
      link: "#tentangKami",
    },
    {
      id: 3,
      nama: "Kontak",
      link: "#kontak",
    },
  ];
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
            {data.map((value) => (
              <a
                href={value.link}
                style={{ textDecoration: "none", color: "white" }}
                key={value.id}
              >
                <span
                  className="mx-3 fs-4"
                  id="menu"
                  style={{ fontFamily: "'Signika Negative', sans-serif" }}
                >
                  {value.nama}
                </span>
              </a>
            ))}
            <span>
              <Link href="/informasi" style={{ textDecoration: "none" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="white"
                  className="bi bi-question-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                </svg>
              </Link>
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
          {data.map((value) => (
            <a
              href={value.link}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                id="menuSandwich"
                style={{ fontFamily: "'Signika Negative', sans-serif" }}
              >
                {value.nama}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
export default NavBar;
