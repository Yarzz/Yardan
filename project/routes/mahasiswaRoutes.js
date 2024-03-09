const express = require('express');
const router = express.Router();
const mahasiswaController = require('../controllers/mahasiswaController');

// Rute untuk mendapatkan semua mahasiswa
router.get('/', mahasiswaController.getAllMahasiswa);

// Rute untuk menambahkan mahasiswa baru
router.post('/', mahasiswaController.addMahasiswa);

module.exports = router;
