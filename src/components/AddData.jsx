import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddData.css';

const AddData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    namaBarang: '',
    kategori: '',
    stok: '',
    kondisi: '',
    deskripsi: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.namaBarang.trim()) {
      newErrors.namaBarang = 'Nama barang wajib diisi';
    } else if (formData.namaBarang.length < 3) {
      newErrors.namaBarang = 'Nama barang minimal 3 karakter';
    }

    if (!formData.kategori.trim()) {
      newErrors.kategori = 'Kategori wajib diisi';
    }

    if (!formData.stok) {
      newErrors.stok = 'Stok wajib diisi';
    } else if (formData.stok < 0) {
      newErrors.stok = 'Stok tidak boleh negatif';
    }

    if (!formData.kondisi.trim()) {
      newErrors.kondisi = 'Kondisi wajib diisi';
    }

    if (!formData.deskripsi.trim()) {
      newErrors.deskripsi = 'Deskripsi wajib diisi';
    } else if (formData.deskripsi.length < 10) {
      newErrors.deskripsi = 'Deskripsi minimal 10 karakter';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        console.log('Form submitted:', formData);
        alert('✅ Data berhasil ditambahkan!');
        navigate('/products');
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
    <div className="add-data-container">
      <div className="yellow-top"></div>
      
      <h1 className="page-title">Tambah Data</h1>

      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-field">
          <label className="field-label">
            Nama Barang <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <input 
              type="text" 
              className={`field-input ${errors.namaBarang ? 'error' : ''}`}
              value={formData.namaBarang}
              onChange={(e) => handleChange('namaBarang', e.target.value)}
              placeholder="Masukkan nama barang"
            />
            {errors.namaBarang && <span className="error-message">{errors.namaBarang}</span>}
          </div>
        </div>

        <div className="form-field">
          <label className="field-label">
            Kategori <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <select 
              className={`field-input ${errors.kategori ? 'error' : ''}`}
              value={formData.kategori}
              onChange={(e) => handleChange('kategori', e.target.value)}
            >
              <option value="">Pilih kategori</option>
              <option value="Buku">Buku</option>
              <option value="Alat">Alat</option>
              <option value="Elektronik">Elektronik</option>
              <option value="Lainnya">Lainnya</option>
            </select>
            {errors.kategori && <span className="error-message">{errors.kategori}</span>}
          </div>
        </div>

        <div className="form-field">
          <label className="field-label">
            Stok <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <input 
              type="number" 
              className={`field-input ${errors.stok ? 'error' : ''}`}
              value={formData.stok}
              onChange={(e) => handleChange('stok', e.target.value)}
              placeholder="Jumlah stok"
              min="0"
            />
            {errors.stok && <span className="error-message">{errors.stok}</span>}
          </div>
        </div>

        <div className="form-field">
          <label className="field-label">
            Kondisi <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <select 
              className={`field-input ${errors.kondisi ? 'error' : ''}`}
              value={formData.kondisi}
              onChange={(e) => handleChange('kondisi', e.target.value)}
            >
              <option value="">Pilih kondisi</option>
              <option value="Baik">Baik</option>
              <option value="Rusak Ringan">Rusak Ringan</option>
              <option value="Rusak Berat">Rusak Berat</option>
            </select>
            {errors.kondisi && <span className="error-message">{errors.kondisi}</span>}
          </div>
        </div>

        <div className="form-field">
          <label className="field-label">
            Deskripsi <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <textarea 
              className={`field-input field-textarea ${errors.deskripsi ? 'error' : ''}`}
              value={formData.deskripsi}
              onChange={(e) => handleChange('deskripsi', e.target.value)}
              placeholder="Deskripsi detail barang"
              rows="3"
            />
            {errors.deskripsi && <span className="error-message">{errors.deskripsi}</span>}
          </div>
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner-small"></span> MENYIMPAN...
            </>
          ) : (
            '+ TAMBAH'
          )}
        </button>
      </form>

      <button className="back-button" onClick={() => navigate('/')}>
        ← Back
      </button>
    </div>
  );
};

export default AddData;
