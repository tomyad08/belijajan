import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import gambar from "./assets/aset-bakso.png";
const Banner = () => {
  return (
    <div className="container-fluid mt-2">
      <div className="row">
        <div className="col-md text-center py-5">
          <h1
            style={{
              fontFamily: "'Pangolin', cursive",
              color: "#FFCF34",
            }}
            id="jaburan"
          >
            <strong>Mau jajan, tapi gak sempet keluar?</strong>
          </h1>

          <h6
            style={{
              fontFamily: "'Pangolin', cursive",
              lineHeight: "20px",
              color: "white",
            }}
            id="solusi"
          >
            Gampang, coba deh klik tombol explore!
          </h6>
          <a href="#produk" style={{ textDecoration: "none" }}>
            <button
              className="btn border border-2 rounded-4 border-dark rounded-1 py-2 px-5 mt-2"
              style={{
                backgroundColor: "#09B123",
              }}
            >
              <h5
                style={{
                  color: "white",
                  textShadow: "4px 2px black",
                }}
                id="explore"
              >
                <strong>Explore</strong>
              </h5>
            </button>
          </a>
        </div>
        <div className="col-md text-center mb-5 ">
          <Image src={gambar} alt="bakso" width="350" height="350" />
        </div>
      </div>
    </div>
  );
};
export default Banner;
