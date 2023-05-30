import Image from "next/image";
import Link from "next/link";
import gambar from "./assets/aset-bakso.png";
import minuman from "./assets/Boba_1_.webp";
import gorengan from "./assets/gorengan_1_.webp";
import makanan from "./assets/Hotplate_1_.webp";

const Produk = () => {
  return (
    <div className="container-fluid" id="produk">
      <h1
        className="text-center pt-4"
        style={{ fontFamily: "'Pangolin', cursive" }}
      >
        <strong>Produk</strong>
      </h1>
      <p
        className="text-center"
        style={{ fontFamily: "Signika Negative', sans-serif" }}
      >
        Mau pilih yang mana nih?
      </p>
      <div className="row justify-content-center">
        <div
          className="col-md-2 col-4 mx-1 my-1 border border-2 border-dark rounded-2 px-2 pt-2 pb-1"
          style={{
            backgroundColor: "white",
            fontFamily: "'Pangolin', cursive",
          }}
        >
          <Link href="/kue">
            <div className="d-flex justify-content-center">
              <Image src={gambar} alt=" " width="100" height="100" />
            </div>
          </Link>
          <h6
            className="text-center mt-1"
            style={{
              fontFamily: "Signika Negative', sans-serif",
              textDecoration: "none",
              color: "black",
            }}
          >
            Kue
          </h6>
        </div>

        <div
          className="col-md-2 col-4 mx-1 my-1 border rounded-2 border-dark border-2 px-2 pt-2 pb-1"
          style={{
            backgroundColor: "white",
            fontFamily: "'Pangolin', cursive",
          }}
        >
          <Link href="/gorengan">
            <div className="d-flex justify-content-center">
              <Image src={gorengan} alt=" " width="100" height="100" />
            </div>
          </Link>
          <h6
            className="text-center mt-1"
            style={{ fontFamily: "Signika Negative', sans-serif" }}
          >
            Gorengan
          </h6>
        </div>
        <div
          className="col-md-2 col-4 mx-1 my-1 border border-dark rounded-2 border-2 px-2 pt-2 pb-1"
          style={{
            backgroundColor: "white",
            fontFamily: "'Pangolin', cursive",
          }}
        >
          <Link href="/makanan">
            <div className="d-flex justify-content-center">
              <Image src={makanan} alt=" " width="100" height="100" />
            </div>
          </Link>
          <h6
            className="text-center mt-1"
            style={{ fontFamily: "Signika Negative', sans-serif" }}
          >
            Makanan
          </h6>
        </div>
        <div
          className="col-md-2 col-4 mx-1 my-1 border border-dark rounded-2 border-2 px-2 pt-2 pb-1"
          style={{
            backgroundColor: "white",
            fontFamily: "'Pangolin', cursive",
          }}
        >
          <Link href="/minuman">
            <div className="d-flex justify-content-center">
              <Image src={minuman} alt=" " width="100" height="100" />
            </div>
          </Link>
          <h6
            className="text-center mt-1"
            style={{ fontFamily: "Signika Negative', sans-serif" }}
          >
            Minuman
          </h6>
        </div>
      </div>
    </div>
  );
};
export default Produk;
