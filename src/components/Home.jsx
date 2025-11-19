import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="home-container">
      <div className="yellow-header"></div>
      
      <div className="greeting-section">
        <div className="avatar"></div>
        <div className="greeting-text">
          <span className="greeting-name">Hallo, Nourman Ganteng</span>
          <span className="greeting-role">mahasiswa</span>
        </div>
      </div>

      <div className="search-section">
        <p className="search-label">selamat datang, mau cari apa hari ini?</p>
        <input
          type="text"
          className="search-input"
          placeholder="Cari barang..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <button className="action-button" onClick={() => navigate('/products')}>
        Lihat Produk
      </button>

      <button className="action-button" onClick={() => navigate('/add-data')}>
        Tambah Data
      </button>

      <button className="action-button" onClick={() => navigate('/borrow-form')}>
        Ajukan Peminjaman
      </button>

      <button className="action-button" onClick={() => navigate('/borrower-list')}>
        Daftar Peminjam
      </button>
    </div>
  );
};

export default Home;
