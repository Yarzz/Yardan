// script.js
document.addEventListener('DOMContentLoaded', function() {
    const mainTitle = document.getElementById('mainTitle');
    mainTitle.style.color = '#333';
    mainTitle.style.textAlign = 'center';

    const mahasiswaTable = document.getElementById('mahasiswaTable');
    mahasiswaTable.style.width = '100%';
    mahasiswaTable.style.borderCollapse = 'collapse';
    mahasiswaTable.style.margin = '20px 0';

    const fetchDataBtn = document.getElementById('fetchDataBtn');
    fetchDataBtn.style.backgroundColor = '#007bff';
    fetchDataBtn.style.color = '#fff';
    fetchDataBtn.style.border = 'none';
    fetchDataBtn.style.padding = '10px 20px';
    fetchDataBtn.style.cursor = 'pointer';
    fetchDataBtn.style.borderRadius = '4px';

    fetchDataBtn.addEventListener('click', function() {
        // Ajax request to fetch data and populate the table
        fetchDataAndPopulateTable();
    });
});

function fetchDataAndPopulateTable() {
    // Example of fetching data using fetch API
   // script.js

fetch('http://localhost:3000/mahasiswa')
.then(response => response.json())
.then(data => {
    const mahasiswaList = document.getElementById('mahasiswa-list');
    
    // Buat sebuah tabel untuk menampilkan data
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    // Iterasi melalui data dan buat baris baru untuk setiap mahasiswa
    data.forEach(mahasiswa => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${mahasiswa.id}</td>
            <td>${mahasiswa.nama}</td>
            <td>${mahasiswa.jenis_kelamin}</td>
            <td>${mahasiswa.tanggal_lahir}</td>
            <td>${mahasiswa.alamat}</td>
            <td>${mahasiswa.jurusan}</td>
        `;
        tbody.appendChild(row);
    });

    // Masukkan tbody ke dalam tabel
    table.appendChild(tbody);

    // Masukkan tabel ke dalam div dengan id mahasiswa-list
    mahasiswaList.appendChild(table);
})
.catch(error => console.error('Error fetching data:', error));

}
