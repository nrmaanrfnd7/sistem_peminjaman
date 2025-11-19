import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const products = [
    { id: 1, name: 'Buku IPA', image: 'https://api.builder.io/api/v1/image/assets/TEMP/dd5a2904aebc61aa4ced525c025db1da4e6d9e7a?width=328', category: 'Buku' },
    { id: 2, name: 'Buku BTA', image: null, category: 'Buku' },
    { id: 3, name: 'Buku Agama', image: null, category: 'Buku' },
    { id: 4, name: 'Buku IPS', image: 'https://api.builder.io/api/v1/image/assets/TEMP/6a3bf931e3fa4b56d2dc6f77e34d0b78f0286cec?width=328', category: 'Buku' },
    { id: 5, name: 'PROYEKTOR', image: 'https://api.builder.io/api/v1/image/assets/TEMP/2e46ae26b22420f55b5938bc8adf57adf3815e7e?width=328', category: 'Alat' },
    { id: 6, name: 'Buku PPKn', image: null, category: 'Buku' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="products-container">
      <h1 className="products-title">Daftar Produk</h1>
      
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Memuat produk...</p>
        </div>
      ) : (
        <div className="product-grid">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {product.image ? (
                <img src={product.image} alt={product.name} className="product-image" />
              ) : (
                <div className="product-placeholder">
                  <span className="placeholder-icon">📦</span>
                </div>
              )}
              <p className="product-name">{product.name}</p>
              <span className="product-category">{product.category}</span>
            </div>
          ))}
        </div>
      )}

      <button className="add-data-button" onClick={() => navigate('/add-data')}>
        <span className="button-icon">+</span> TAMBAH DATA
      </button>

      <button className="back-button" onClick={() => navigate('/')}>
        ← Back
      </button>
    </div>
  );
};

export default Products;
