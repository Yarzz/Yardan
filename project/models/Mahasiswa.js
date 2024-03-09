const db = require('../config/db');

// Mendefinisikan model Mahasiswa
const Mahasiswa = {};

// Mendapatkan semua mahasiswa
Mahasiswa.getAll = (callback) => {
  db.query('SELECT * FROM Mahasiswa', (error, results, fields) => {
    if (error) {
      console.error('Error querying database:', error);
      return callback(error, null);
    }
    callback(null, results);
  });
};

// Menambahkan mahasiswa baru
Mahasiswa.create = (mahasiswaData, callback) => {
  const { nama, jenis_kelamin, tanggal_lahir, alamat, jurusan } = mahasiswaData;

  db.query('INSERT INTO Mahasiswa (nama, jenis_kelamin, tanggal_lahir, alamat, jurusan) VALUES (?, ?, ?, ?, ?)', 
    [nama, jenis_kelamin, tanggal_lahir, alamat, jurusan],
    (error, results, fields) => {
      if (error) {
        console.error('Error inserting into database:', error);
        return callback(error, null);
      }
      callback(null, results);
    });
};

// Memperbarui informasi mahasiswa
Mahasiswa.update = (id, mahasiswaData, callback) => {
  const { nama, jenis_kelamin, tanggal_lahir, alamat, jurusan } = mahasiswaData;

  db.query('UPDATE Mahasiswa SET nama = ?, jenis_kelamin = ?, tanggal_lahir = ?, alamat = ?, jurusan = ? WHERE id = ?', 
    [nama, jenis_kelamin, tanggal_lahir, alamat, jurusan, id],
    (error, results, fields) => {
      if (error) {
        console.error('Error updating database:', error);
        return callback(error, null);
      }
      callback(null, results);
    });
};

// Menghapus mahasiswa berdasarkan ID
Mahasiswa.delete = (id, callback) => {
  db.query('DELETE FROM Mahasiswa WHERE id = ?', [id], (error, results, fields) => {
    if (error) {
      console.error('Error deleting from database:', error);
      return callback(error, null);
    }
    callback(null, results);
  });
};

module.exports = Mahasiswa;
