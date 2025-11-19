import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BorrowForm.css';

const BorrowForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    peminjam: '',
    barangDipinjam: '',
    jumlah: '',
    tanggalPinjam: '',
    tanggalKembali: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.peminjam.trim()) {
      newErrors.peminjam = 'Nama peminjam wajib diisi';
    } else if (formData.peminjam.length < 3) {
      newErrors.peminjam = 'Nama minimal 3 karakter';
    }

    if (!formData.barangDipinjam.trim()) {
      newErrors.barangDipinjam = 'Barang yang dipinjam wajib diisi';
    }

    if (!formData.jumlah) {
      newErrors.jumlah = 'Jumlah wajib diisi';
    } else if (formData.jumlah < 1) {
      newErrors.jumlah = 'Jumlah minimal 1';
    }

    if (!formData.tanggalPinjam) {
      newErrors.tanggalPinjam = 'Tanggal pinjam wajib diisi';
    }

    if (!formData.tanggalKembali) {
      newErrors.tanggalKembali = 'Tanggal kembali wajib diisi';
    } else if (formData.tanggalPinjam && formData.tanggalKembali <= formData.tanggalPinjam) {
      newErrors.tanggalKembali = 'Tanggal kembali harus setelah tanggal pinjam';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        console.log('Borrow form submitted:', formData);
        alert('✅ Peminjaman berhasil diajukan!');
        navigate('/borrower-list');
      }, 1000);
    } else {
      alert('❌ Mohon lengkapi semua field dengan benar');
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="borrow-form-container">
      <div className="yellow-top"></div>
      
      <h1 className="page-title">Form Peminjaman</h1>

      <form className="borrow-form-content" onSubmit={handleSubmit}>
        <div className="item-preview">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/dd5a2904aebc61aa4ced525c025db1da4e6d9e7a?width=328" 
            alt="Buku IPA" 
            className="preview-image" 
          />
          <p className="preview-name">Buku IPA</p>
        </div>

        <div className="borrow-form-fields">
          <div className="borrow-field">
            <label className="borrow-label">
              Peminjam <span className="required">*</span>
            </label>
            <div className="input-wrapper">
              <input 
                type="text" 
                className={`borrow-input ${errors.peminjam ? 'error' : ''}`}
                value={formData.peminjam}
                onChange={(e) => handleChange('peminjam', e.target.value)}
                placeholder="Nama peminjam"
              />
              {errors.peminjam && <span className="error-message">{errors.peminjam}</span>}
            </div>
          </div>

          <div className="borrow-field">
            <label className="borrow-label">
              Barang Dipinjam <span className="required">*</span>
            </label>
            <div className="input-wrapper">
              <input 
                type="text" 
                className={`borrow-input ${errors.barangDipinjam ? 'error' : ''}`}
                value={formData.barangDipinjam}
                onChange={(e) => handleChange('barangDipinjam', e.target.value)}
                placeholder="Nama barang"
              />
              {errors.barangDipinjam && <span className="error-message">{errors.barangDipinjam}</span>}
            </div>
          </div>

          <div className="borrow-field">
            <label className="borrow-label">
              Jumlah <span className="required">*</span>
            </label>
            <div className="input-wrapper">
              <input 
                type="number" 
                className={`borrow-input ${errors.jumlah ? 'error' : ''}`}
                value={formData.jumlah}
                onChange={(e) => handleChange('jumlah', e.target.value)}
                placeholder="Jumlah"
                min="1"
              />
              {errors.jumlah && <span className="error-message">{errors.jumlah}</span>}
            </div>
          </div>

          <div className="borrow-field">
            <label className="borrow-label">
              Tanggal Pinjam <span className="required">*</span>
            </label>
            <div className="input-wrapper">
              <input 
                type="date" 
                className={`borrow-input ${errors.tanggalPinjam ? 'error' : ''}`}
                value={formData.tanggalPinjam}
                onChange={(e) => handleChange('tanggalPinjam', e.target.value)}
              />
              {errors.tanggalPinjam && <span className="error-message">{errors.tanggalPinjam}</span>}
            </div>
          </div>

          <div className="borrow-field">
            <label className="borrow-label">
              Tanggal Kembali <span className="required">*</span>
            </label>
            <div className="input-wrapper">
              <input 
                type="date" 
                className={`borrow-input ${errors.tanggalKembali ? 'error' : ''}`}
                value={formData.tanggalKembali}
                onChange={(e) => handleChange('tanggalKembali', e.target.value)}
              />
              {errors.tanggalKembali && <span className="error-message">{errors.tanggalKembali}</span>}
            </div>
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner-small"></span> MENGAJUKAN...
              </>
            ) : (
              '📝 AJUKAN'
            )}
          </button>
        </div>
      </form>

      <button className="back-button" type="button" onClick={() => navigate('/')}>
        ← Back
      </button>
    </div>
  );
};

export default BorrowForm;
