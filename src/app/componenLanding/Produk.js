import Image from "next/image";
import Link from "next/link";
import gambar from "./assets/kueLapis.jpg";
import minuman from "./assets/esCoklat.jpg";
import gorengan from "./assets/tahuBulat.jpg";
import makanan from "./assets/Bakso.jpg";

const Produk = () => {
  const data = [
    {
      id: 1,
      nama: "Kue",
      gambar: gambar,
      link: "/kue",
    },
    {
      id: 2,
      nama: "Makanan",
      gambar: makanan,
      link: "/makanan",
    },
    {
      id: 3,
      nama: "Gorengan",
      gambar: gorengan,
      link: "/gorengan",
    },
    {
      id: 4,
      nama: "Minuman",
      gambar: minuman,
      link: "/minuman",
    },
  ];
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
        {data.map((value) => (
          <div
            className="col-md-2 col-4 mx-1 px-2 pt-2 pb-1"
            style={{
              backgroundColor: "white",
              fontFamily: "'Pangolin', cursive",
            }}
            key={value.id}
          >
            <Link href={value.link}>
              <div className="d-flex justify-content-center">
                <Image
                  src={value.gambar}
                  alt=" "
                  className="border border-2 border-dark rounded-2"
                  id="gambarProduk"
                />
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
              {value.nama}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Produk;
