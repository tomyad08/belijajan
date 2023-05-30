"use client";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { useState } from "react";
import NumberWithCommas from "./currency";
import Image from "next/image";
import Pesanan from "./pesanan";
import Link from "next/link";

const Fungsi = (props) => {
  const [produk, setProduk] = useState(" ");
  const [nama, setNama] = useState(" ");
  const [loading, setLoading] = useState(true);
  const [kondisi, setKondisi] = useState(false);
  const [pilihan, setPilihan] = useState(" ");

  useEffect(() => {
    handleData();
  }, []);
  const data = props.link;
  const handleData = () => {
    axios
      .get(data)
      .then((res) => {
        setProduk(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  };
  const handleShow = (value) => {
    const data = {
      nama: value.nama,
      foto: value.foto,
    };
    setPilihan(data);
    setKondisi(true);
  };
  return (
    <div>
      <div
        className="row justify-content-between py-3 px-3"
        style={{ background: "linear-gradient(#B1001B, #D9071C 50%)" }}
      >
        <div className="col-2">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="30"
              fill="white"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </Link>
        </div>
        <div className="col-8">
          <input
            onChange={(e) => setNama(e.target.value)}
            style={{ width: "100%" }}
            className="border border-2 rounded-5 py-2 px-3"
            placeholder="Silahkan ketik di sini..."
          />
        </div>
        <div className="col-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="white"
            className="bi bi-cart3"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </div>
      </div>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div>
          {kondisi && (
            <div
              className=" container-fluid d-flex justify-content-center"
              style={{
                position: "fixed",
                bottom: "0",
                zIndex: "2",
                borderRadius: "30px 30px 0 0",
                backgroundColor: " #D9071C",
              }}
            >
              <Pesanan produk={pilihan} />
            </div>
          )}
          <div className="row mx-2 mt-4">
            {produk
              .filter((value) => {
                if (nama === " ") {
                  return value;
                } else if (value.tagging.includes(nama.toLowerCase())) {
                  return value;
                }
              })
              .map((value) => (
                <div
                  className="col-md-2 col-6 "
                  onClick={() => handleShow(value)}
                  key={value.id}
                >
                  <div
                    className="border border-2 rounded-2 mb-2"
                    style={{
                      zIndex: "4",
                      backgroundColor: "white",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={value.foto}
                      alt=" "
                      width="200"
                      height="150"
                      id="gambar"
                    />
                    <figcaption>
                      <h6
                        style={{
                          fontFamily: "'Signika Negative', sans-serif",
                          lineHeight: "25px",
                          textAlign: "center",
                        }}
                        className="mx-2"
                      >
                        {value.nama}
                      </h6>
                      <p
                        style={{
                          fontFamily: "'Signika Negative', sans-serif",
                          lineHeight: "5px",
                          textAlign: "center",
                        }}
                      >
                        <strong>Rp. {NumberWithCommas(value.harga)}/pcs</strong>
                      </p>
                    </figcaption>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn border border-2 border-danger rounded-5 my-2 px-4"
                        style={{
                          fontSize: "13px",

                          color: "black",
                        }}
                      >
                        + Keranjang
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Fungsi;
