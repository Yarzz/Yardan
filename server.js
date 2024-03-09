// Import modul yang diperlukan
const express = require('express');
const mysql = require('mysql');
const mahasiswaRoutes = require('./project/routes/mahasiswaRoutes');

// Membuat aplikasi Express
const app = express();

// Menggunakan middleware untuk menyajikan berkas statis
app.use(express.static('public'));

// Menggunakan routes untuk mahasiswa
app.use('/mahasiswa', mahasiswaRoutes);

// Mengatur agar Express menggunakan JSON untuk parsing body request
app.use(express.json());

// Konfigurasi koneksi database MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mahasiswa_db'
});

// Menggunakan routes untuk mahasiswa
app.use('/mahasiswa', mahasiswaRoutes);

// Port yang akan digunakan oleh server
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to My Web App');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});