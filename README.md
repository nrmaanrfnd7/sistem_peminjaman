# 📚 Sistem Peminjaman Barang

Aplikasi web modern untuk mengelola peminjaman barang seperti buku dan peralatan sekolah/kantor.

## ✨ Fitur Utama

- 🏠 **Dashboard**: Halaman utama dengan menu navigasi
- 📦 **Daftar Produk**: Melihat semua barang yang tersedia
- ➕ **Tambah Data**: Form untuk menambah barang baru dengan validasi
- 📝 **Form Peminjaman**: Mengajukan peminjaman barang
- 👥 **Daftar Peminjam**: Melihat daftar peminjaman aktif
- 🔍 **Pencarian**: Fitur search pada daftar peminjam
- ✅ **Validasi Form**: Validasi lengkap pada semua input
- 📱 **Responsive Design**: Tampilan optimal di berbagai ukuran layar
- 🎨 **Modern UI**: Desain modern dengan animasi smooth

## 🚀 Teknologi

- **React 18.2** - Library UI
- **React Router DOM 6.20** - Routing
- **Vite 5.0** - Build tool & dev server
- **CSS3** - Styling dengan animasi modern

## 📦 Instalasi

1. Clone repository atau extract file

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka browser di `http://localhost:5173`

## 🏗️ Struktur Project

```
sistem-peminjaman/
├── src/
│   ├── components/
│   │   ├── Home.jsx          # Halaman utama
│   │   ├── Home.css
│   │   ├── Products.jsx      # Daftar produk
│   │   ├── Products.css
│   │   ├── AddData.jsx       # Form tambah data
│   │   ├── AddData.css
│   │   ├── BorrowForm.jsx    # Form peminjaman
│   │   ├── BorrowForm.css
│   │   ├── BorrowerList.jsx  # Daftar peminjam
│   │   └── BorrowerList.css
│   ├── App.jsx               # Main app component
│   ├── App.css               # Global styles
│   └── main.jsx              # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 📱 Halaman & Fitur

### 1. Home (`/`)
- Menampilkan greeting user
- Search bar untuk mencari barang
- 4 tombol navigasi menu utama
- Animasi smooth pada load

### 2. Daftar Produk (`/products`)
- Grid layout untuk menampilkan produk
- Loading state dengan spinner
- Kategori produk
- Hover effect pada card
- Tombol tambah data

### 3. Tambah Data (`/add-data`)
- Form dengan 5 field input:
  - Nama Barang (min 3 karakter)
  - Kategori (dropdown)
  - Stok (angka, min 0)
  - Kondisi (dropdown)
  - Deskripsi (min 10 karakter)
- Validasi real-time
- Error messages
- Loading state saat submit

### 4. Form Peminjaman (`/borrow-form`)
- Preview gambar barang
- Form dengan 5 field:
  - Peminjam (min 3 karakter)
  - Barang Dipinjam
  - Jumlah (min 1)
  - Tanggal Pinjam
  - Tanggal Kembali (harus > tanggal pinjam)
- Validasi lengkap
- Loading state

### 5. Daftar Peminjam (`/borrower-list`)
- Search functionality
- Card list peminjam
- Status badge (Aktif/Selesai)
- Loading state
- Empty state jika tidak ada data

## ✅ Validasi Form

### Tambah Data:
- ✓ Nama Barang: wajib, minimal 3 karakter
- ✓ Kategori: wajib, pilih dari dropdown
- ✓ Stok: wajib, angka non-negatif
- ✓ Kondisi: wajib, pilih dari dropdown
- ✓ Deskripsi: wajib, minimal 10 karakter

### Form Peminjaman:
- ✓ Peminjam: wajib, minimal 3 karakter
- ✓ Barang Dipinjam: wajib
- ✓ Jumlah: wajib, minimal 1
- ✓ Tanggal Pinjam: wajib
- ✓ Tanggal Kembali: wajib, harus setelah tanggal pinjam

## 🎨 Desain Modern

- **Gradient Backgrounds**: Background gradien yang smooth
- **Box Shadows**: Shadow dengan depth untuk card
- **Smooth Animations**: Fade in, slide up, hover effects
- **Responsive Layout**: Auto-adjust untuk mobile & desktop
- **Loading States**: Spinner dan feedback visual
- **Error States**: Pesan error yang jelas dengan animasi
- **Hover Effects**: Interactive feedback pada button & card
- **Custom Scrollbar**: Scrollbar dengan warna brand

## 📱 Responsive Breakpoints

- Desktop: `> 420px` - Full layout
- Mobile: `≤ 420px` - Stack layout, full width buttons

## 🎯 Best Practices

- ✅ Form validation dengan feedback real-time
- ✅ Loading states untuk UX yang lebih baik
- ✅ Error handling dengan pesan yang jelas
- ✅ Semantic HTML
- ✅ Accessible forms dengan labels
- ✅ Smooth transitions & animations
- ✅ Responsive design
- ✅ Clean code structure
- ✅ Reusable CSS patterns

## 🔧 Build untuk Production

```bash
npm run build
```

File hasil build akan ada di folder `dist/`

## 🌐 Preview Production Build

```bash
npm run preview
```

## 📝 Catatan Developer

- Data saat ini masih static (mock data)
- Untuk production, integrasikan dengan backend API
- Tambahkan state management (Redux/Context) jika diperlukan
- Implementasi authentication jika diperlukan
- Tambahkan database untuk persist data

## 🤝 Kontribusi

Jika ingin berkontribusi:
1. Fork repository
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

MIT License - bebas digunakan untuk project pribadi maupun komersial.

## 👨‍💻 Author

Dibuat dengan ❤️ untuk sistem peminjaman yang lebih baik

---

**Selamat menggunakan! 🎉**
