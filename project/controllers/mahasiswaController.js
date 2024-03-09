const db = require('../config/db');

// Contoh fungsi CRUD
// Silakan tambahkan fungsi-fungsi lainnya sesuai kebutuhan aplikasi

// Mendapatkan semua mahasiswa
exports.getAllMahasiswa = (req, res) => {
  db.query('SELECT * FROM mahasiswa', (error, results, fields) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).send('Error querying database');
      return;
    }
    res.json(results);
  });
};

// Menambahkan mahasiswa baru
exports.addMahasiswa = (req, res) => {
  // Ambil data mahasiswa dari body request
  const { nama, jenis_kelamin, tanggal_lahir, alamat, jurusan } = req.body;

  // Query untuk menambahkan mahasiswa baru
  db.query('INSERT INTO Mahasiswa (nama, jenis_kelamin, tanggal_lahir, alamat, jurusan) VALUES (?, ?, ?, ?, ?)', 
    [nama, jenis_kelamin, tanggal_lahir, alamat, jurusan],
    (error, results, fields) => {
      if (error) {
        console.error('Error inserting into database:', error);
        res.status(500).send('Error inserting into database');
        return;
      }
      res.send('Mahasiswa added successfully');
    });
};
