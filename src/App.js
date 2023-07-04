import React, { useState } from 'react';
import axios from 'axios';
import "./App.css"


const App = () => {
  const [name, setNama] = useState('');
  const [nohp, setNohp] = useState('');
  const [nik, setNik] = useState('');
  const [alamat, setAlamat] = useState('');
  const [rt, setRt] = useState('');
  const [rw, setRw] = useState('');
  const [kelurahan, setKelurahan] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const [notps, setNotps] = useState('');
  const [keterangan, setKeterangan] = useState('');
  const [kontributor, setKontributor] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Mengirim data ke backend menggunakan axios
      const response = await axios.post('http://localhost:5000/users', {
        name,
        nohp,
        nik,
        alamat,
        rt,
        rw,
        kelurahan,
        kecamatan,
        notps,
        keterangan,
        kontributor
      });
      if(response.status === 201) {
        console.log('sukses');
        
      } 
      console.log(response);
      
      // Setelah berhasil menyimpan data, reset nilai-nilai input
      setNama('');
      setNohp('');
      setNik('');
      setAlamat('');
      setRt('');
      setRw('');
      setKelurahan('');
      setKecamatan('');
      setNotps('');
      setKeterangan('');
      setKontributor('');

    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-judul">RELASI</h3>
          <h3 className="Auth-form-title">Relawan Ahmad Syukri</h3>
          <div className="tabel-form">
            <label>
              Nama 
            </label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="nama"
                weigth= "700px"
                value={name}
                onChange={(event) => setNama(event.target.value)}
                />
          </div>
          <div className="tabel-form">
            <label>
              No Hp
            </label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="08......"
                value={nohp}
                onChange={(event) => setNohp(event.target.value)}
                />
          </div>
          <div className="tabel-form">
            <label>
              NIK
            </label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="nik"
                value={nik}
                onChange={(event) => setNik(event.target.value)}
                />
          </div>
          <div className="tabel-form">
            <label>
              Alamat
            </label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Jl. juang"
                value={alamat}
                onChange={(event) => setAlamat(event.target.value)}
                />
          </div>
          <div className="tabel-form">
            <label>
              RT
            </label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="003"
                value={rt}
                onChange={(event) => setRt(event.target.value)}
                />                
          </div>
          <div className="tabel-form">
            <label>
              RW
              <input
                type="text"
                className="form-control mt-1"
                placeholder="004"
                value={rw}
                onChange={(event) => setRw(event.target.value)}
              />
            </label>
          </div>
          <div className="tabel-form">
            <label>
              Kelurahan
              <input
                type="text"
                className="form-control mt-1"
                placeholder="condet"
                value={kelurahan}
                onChange={(event) => setKelurahan(event.target.value)}
                />
            </label>
          </div>
          <div className="tabel-form">
            <label>
              Kecamatan
              <input
                type="text"
                className="form-control mt-1"
                placeholder="kramatjati"
                value={kecamatan}
                onChange={(event) => setKecamatan(event.target.value)}
                />
            </label>
          </div>
          <div className="tabel-form">
            <label>
              No TPS
              <input
                type="text"
                className="form-control mt-1"
                placeholder="12"
                value={notps}
                onChange={(event) => setNotps(event.target.value)}
                />
            </label>
          </div>
          <div className="tabel-form">
            <label>
              Keterangan
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Temen/NU/ansor/IPNU"
                value={keterangan}
                onChange={(event) => setKeterangan(event.target.value)}
                />
            </label>
          </div>
          <div className="tabel-form">
            <label>
              Kontributor
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Nama kamu"
                value={kontributor}
                onChange={(event) => setKontributor(event.target.value)}
                />
            </label>
          </div>
          <div >
            <button type="submit" className="button-submit" ><text className="button-text">Tambah Anggota</text></button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;
