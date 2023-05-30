import React from "react";

const TentangKami = () => {
  return (
    <div
      className="container mt-5"
      id="tentangkami"
      style={{ fontFamily: "Signika Negative', sans-serif" }}
    >
      <div
        className=" border border-0 rounded-2 p-5 text-center"
        style={{ backgroundColor: "#B1001B", color: "white" }}
      >
        <h1 style={{ fontFamily: "'Pangolin', cursive", color: "#FFCF34" }}>
          Tentang Kami
        </h1>
        <p className="justify">
          <strong>belijajan.com</strong>, tempat terbaik untuk para foodies
          cirebon timur yang pengen jajan, tapi gak sempet keluar rumah. Di
          sini, kamu bebas pilih makanan dan minuman yang kamu suka. Tinggal
          klik, beres deh. Jadi, tunggu apalagi? buruan jajan di belijajan.com.
        </p>
        <p>~ belijajan.com</p>
      </div>
    </div>
  );
};
export default TentangKami;
