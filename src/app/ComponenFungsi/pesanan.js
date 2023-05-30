import { useState } from "react";

const Pesanan = (props) => {
  const data = {
    nama: props.produk.nama,
    foto: props.produk.foto,
  };

  const [pengeriman, setPengiriman] = useState(" ");
  const [pesanan, setPesanan] = useState(" ");
  const [keterangan, setKeterangan] = useState(" ");
  const [nama, setNama] = useState(" ");
  const [alamat, setAlamat] = useState(" ");
  const [kondisi, setKondisi] = useState(true);

  return (
    <div className="py-3" style={{ width: "400px" }}>
      <div className="float-end me-2 mb-2" onClick={() => setKondisi(!kondisi)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="white"
          className="bi bi-arrow-down-up"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
          />
        </svg>
      </div>
      <div>
        <h1
          className="ms-4 py-2"
          style={{ fontFamily: "'Pangolin', cursive", color: "white" }}
        >
          <strong>{data.nama}</strong>
        </h1>
      </div>
      {kondisi && (
        <div>
          <div className="row justify-content-around">
            <input
              className="py-1 px-2 border border-1 rounded-2"
              type="number"
              style={{ width: "150px", height: "35px" }}
              placeholder="Jumlah pesanan"
              onChange={(e) => setPesanan(e.target.value)}
            />
            <select
              style={{ width: "150px", height: "35px" }}
              className="py-1 px-1 border border-1 rounded-2"
              onChange={(e) => setPengiriman(e.target.value)}
            >
              <option value=" ">Jenis Pengiriman</option>
              <option value="regular">Regular (Rp. 2.000)</option>
              <option value="express">Express (Rp. 6.000)</option>
            </select>

            <input
              className="py-1 px-2 border border-1 rounded-2 mt-3"
              type="text"
              style={{ width: "360px", height: "35px" }}
              placeholder="Keterangan: Mie nya pedes"
              onChange={(e) => setKeterangan(e.target.value)}
            />
            <input
              className="py-1 px-2 border border-1 rounded-2 mt-3"
              type="text"
              style={{ width: "360px", height: "35px" }}
              placeholder="Nama"
              onChange={(e) => setNama(e.target.value)}
            />
            <input
              className="py-1 px-2 border border-1 rounded-2 mt-3"
              type="text"
              style={{ width: "360px", height: "35px" }}
              placeholder="Alamat/Patokan rumah"
              onChange={(e) => setAlamat(e.target.value)}
            />
            <a
              href={`https://wa.me/6285861731880?text= Hallo Admin, saya *${nama}* dari *${alamat}*. Saya mau pesan   
              *${data.nama}* sebanyak *${pesanan}* pcs dan jenis Pengiriman yang saya pilih adalah *${pengeriman}*. Keterangan tambahan: *${keterangan}*.
              || belanja lagi --> belijajan.com`}
              style={{ textDecoration: "none" }}
            >
              <div className="d-flex justify-content-center">
                <button
                  className="btn border border-dark mt-3"
                  style={{
                    backgroundColor: "#19E20F",
                    height: "40px",
                    width: "360px",
                  }}
                >
                  <strong>Pesan</strong>
                </button>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
export default Pesanan;
