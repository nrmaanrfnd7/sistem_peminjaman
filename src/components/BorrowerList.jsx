import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BorrowerList.css';

const BorrowerList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const borrowers = [
    {
      id: 1,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/c588eb8f5751e7da18b1ec0aeeae2c8a098cf16a?width=150',
      nama: 'Harsono',
      barang: 'Proyektor',
      tanggalPinjam: '21 Oktober 2025',
      tanggalKembali: '23 Oktober 2025',
      status: 'active'
    },
    {
      id: 2,
      image: null,
      nama: 'Ahmad Fajrul',
      barang: 'Buku IPA',
      tanggalPinjam: '15 November 2025',
      tanggalKembali: '20 November 2025',
      status: 'active'
    },
    {
      id: 3,
      image: null,
      nama: 'Siti Nurhaliza',
      barang: 'Buku Agama',
      tanggalPinjam: '10 November 2025',
      tanggalKembali: '17 November 2025',
      status: 'active'
    },
    {
      id: 4,
      image: null,
      nama: 'Budi Santoso',
      barang: 'Buku IPS',
      tanggalPinjam: '22 Oktober 2025',
      tanggalKembali: '29 Oktober 2025',
      status: 'active'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredBorrowers = borrowers.filter(borrower =>
    borrower.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
    borrower.barang.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="borrower-list-container">
      <div className="yellow-top"></div>
      
      <h1 className="page-title">Daftar Peminjam</h1>

      <div className="search-container">
        <input
          type="text"
          className="search-input-list"
          placeholder="🔍 Cari peminjam atau barang..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Memuat data...</p>
        </div>
      ) : (
        <div className="borrower-cards">
          {filteredBorrowers.length > 0 ? (
            filteredBorrowers.map((borrower, index) => (
              <div 
                key={borrower.id} 
                className="borrower-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {borrower.image ? (
                  <img src={borrower.image} alt={borrower.nama} className="borrower-image" />
                ) : (
                  <div className="borrower-image-placeholder">
                    <span className="placeholder-icon">👤</span>
                  </div>
                )}
                <div className="borrower-info">
                  <div className="info-row">
                    <div className="info-item">
                      <span className="info-label">Nama:</span>
                      <span className="info-value">{borrower.nama}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Tanggal Pinjam:</span>
                      <span className="info-value">{borrower.tanggalPinjam}</span>
                    </div>
                  </div>
                  <div className="info-row">
                    <div className="info-item">
                      <span className="info-label">Barang:</span>
                      <span className="info-value">{borrower.barang}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Tanggal Kembali:</span>
                      <span className="info-value">{borrower.tanggalKembali}</span>
                    </div>
                  </div>
                  <span className="status-badge">{borrower.status === 'active' ? '✓ Aktif' : '✗ Selesai'}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>📭 Tidak ada data yang ditemukan</p>
            </div>
          )}
        </div>
      )}

      <button className="back-button" onClick={() => navigate('/')}>
        ← Back
      </button>
    </div>
  );
};

export default BorrowerList;
