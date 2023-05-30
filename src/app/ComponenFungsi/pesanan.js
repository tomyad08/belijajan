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

  return (
    <div className="py-3" style={{ width: "400px" }}>
      <h5
        className="text-center"
        style={{ fontFamily: "'Pangolin', cursive", color: "white" }}
      >
        {data.nama}
      </h5>

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
        <a
          href={`https://wa.me/6285861731880?text= Terima kasih ${nama} telah berbelanja di belijajan.com.  Berikut rincian pesanan kamu: 
            Nama Produk: ${data.nama}
            Jumlah Pesanan: ${pesanan}
            Jenis Pengiriman: ${pengeriman}
            Keterangan: ${keterangan}
            Buat kamu yang pengen jajan, tapi gak sempet keluar? belijajan.com aja`}
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
  );
};
export default Pesanan;
