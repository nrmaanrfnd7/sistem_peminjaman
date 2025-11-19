import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import AddData from './components/AddData';
import BorrowForm from './components/BorrowForm';
import BorrowerList from './components/BorrowerList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/add-data" element={<AddData />} />
          <Route path="/borrow-form" element={<BorrowForm />} />
          <Route path="/borrower-list" element={<BorrowerList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
