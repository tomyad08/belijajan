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
      harga: value.harga,
    };
    setPilihan(data);
    setKondisi(true);
  };

  return (
    <div>
      <div
        className="row justify-content-between p-3"
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
            className="border btn btn-light border-2 rounded-5 py-1"
            placeholder="Silahkan ketik di sini..."
          />
        </div>
        <div className="col-2">
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
                  className="col-lg-2 col-6 "
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
                    <img src={value.foto} alt=" " width="100%" id="gambar" />
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
