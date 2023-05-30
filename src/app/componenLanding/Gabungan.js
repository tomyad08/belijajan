import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";

const Gabungan = () => {
  return (
    <div
      className="container-fluid"
      style={{
        background: "linear-gradient(#B1001B, #D9071C 50%)",
      }}
    >
      <NavBar />
      <Banner />
    </div>
  );
};
export default Gabungan;
