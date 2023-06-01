import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../componenLanding/Footer";
const Informasi = () => {
  return (
    <div className="py-3" style={{ backgroundColor: "red" }}>
      <div
        className="border border-1 border-dark rounded-3 p-3 mx-3 "
        style={{ backgroundColor: "white", textAlign: "justify" }}
      >
        <h1 className="text-center">Informasi</h1>
        <h6 className="mb-2">
          <strong>
            1. Emang perbedaan pengiriman reguler dan express apa sih?
          </strong>
        </h6>
        <p>
          <strong>Pengiriman reguler</strong> adalah produk yang dikirim secara
          periode. <br />
          a. Untuk pembelian 21.00 - 06.00 WIB, produk akan dikirimkan pada
          pukul 07.00 WIB <br />
          b. Untuk pembelian 06.01 - 09.00 WIB, produk akan dikirimkan pada
          pukul 10.00 WIB <br />
          c. Untuk pembelian 09.01 - 11.30 WIB, produk akan dikirimkan pada
          pukul 12.00 WIB <br />
          d. Untuk pembelian 11.31 - 14.00 WIB, produk akan dikirimkan pada
          pukul 15.00 WIB <br />
          e. Untuk pembelian 15.01 - 17.00 WIB, produk akan dikirimkan pada
          pukul 17.00 WIB <br />
          f. Untuk pembelian 17.01 - 19.00 WIB, produk akan dikirimkan pada
          pukul 20.00 WIB
        </p>
        <p>
          Sedangkan <strong>pengiriman express</strong> adalah produk yang
          dikirim saat itu juga
        </p>
        <h6 className="mb-2">
          <strong>
            2. Bapak atau ibu memiliki produk yang ingin di jual di sini?
          </strong>
        </h6>
        <p>
          Gampang, bapak atau ibu bisa hubungi kontak kami (08xxx), nanti tim
          kami akan survey ke tempat usaha bapak atau ibu.
        </p>

        <Link href="/">
          <button className="btn btn-primary">Balik ke halaman utama</button>{" "}
        </Link>
      </div>
      <div style={{ color: "white" }}>
        <Footer />
      </div>
    </div>
  );
};
export default Informasi;
