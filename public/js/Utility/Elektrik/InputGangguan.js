//button
let inputButton = document.getElementById("inputButton")
let koreksiButton = document.getElementById("koreksiButton")
let hapusinputButton = document.getElementById("hapusButton")
let prosesButton = document.getElementById("prosesButton")
let batalButton = document.getElementById("batalButton")

//form
let tanggal = document.getElementById("tanggal")
let divisi_pelapor1 = document.getElementById("divisi_pelapor1")
let nama_pelapor = document.getElementById("nama_pelapor")
let penerima_laporan = document.getElementById("penerima_laporan")
let jam_lapor = document.getElementById("jam_lapor")
let jam_perbaikan = document.getElementById("jam_perbaikan")
let jam_selesai = document.getElementById("jam_selesai")
let tipe_gangguan = document.getElementById("tipe_gangguan")
let penyebab = document.getElementById("penyebab")
let penyelesaian = document.getElementById("penyelesaian")
let keterangan = document.getElementById("keterangan")
let teknisi = document.getElementById("teknisi")
let gambar1 = document.getElementById("gambar1")
let ket_gambar1 = document.getElementById("ket_gambar1")
let hasil_gambar1 = document.getElementById("hasil_gambar1")
let gambar2 = document.getElementById("gambar2")
let ket_gambar2 = document.getElementById("ket_gambar2")
let hasil_gambar2 = document.getElementById("hasil_gambar2")
let bulan = document.getElementById("bulan")
let sampaiDengan = document.getElementById("sampaiDengan")
let divisi_pelapor2 = document.getElementById("divisi_pelapor2")
let refreshButton = document.getElementById("refreshButton")

// Initially disable all form elements
enableFormElements(false);

// Event listener for Input Button
inputButton.addEventListener('click', function() {
    // Enable all input fields and buttons
    enableFormElements(true);
});

batalButton.addEventListener('click', function() {
    // Disable all input fields and buttons
    enableFormElements(false);
});

// Function to enable/disable form elements
function enableFormElements(enable) {
    var inputElements = document.querySelectorAll('input, select, button');
    inputElements.forEach(function(element) {
        if (element !== inputButton) {
            element.disabled = !enable;
        }
    }
);
}


 // Event listener untuk Gambar 1
 document.getElementById('fileInput1').addEventListener('change', function() {
    var fileInput = this;
    var fileName = fileInput.value.split('\\').pop();

    // Menampilkan nama file yang dipilih di label
    document.querySelector('.btn-link').textContent = fileName;

    // Membaca file gambar yang dipilih
    var reader = new FileReader();
    reader.onload = function(e) {
        var imagePreview = document.getElementById('imagePreview1');
        // Menetapkan sumber gambar saat file berhasil dibaca
        imagePreview.src = e.target.result;
        imagePreview.style.display = 'block'; // Menampilkan elemen gambar
    };
    reader.readAsDataURL(fileInput.files[0]); // Membaca file sebagai URL data
});

// Event listener untuk Gambar 2
document.getElementById('fileInput2').addEventListener('change', function() {
    var fileInput = this;
    var fileName = fileInput.value.split('\\').pop();

    // Menampilkan nama file yang dipilih di label
    document.querySelector('.btn-link').textContent = fileName;

    // Membaca file gambar yang dipilih
    var reader = new FileReader();
    reader.onload = function(e) {
        var imagePreview = document.getElementById('imagePreview2');
        // Menetapkan sumber gambar saat file berhasil dibaca
        imagePreview.src = e.target.result;
        imagePreview.style.display = 'block'; // Menampilkan elemen gambar
    };
    reader.readAsDataURL(fileInput.files[0]); // Membaca file sebagai URL data
});


document.addEventListener('DOMContentLoaded', function () {
    // Event listener for Input Button
    document.getElementById('inputButton').addEventListener('click', function () {
        // Mendapatkan nilai dari input dan elemen formulir lainnya
        var tanggal = document.getElementById('tanggal').value;
        var divisi_pelapor = document.getElementById('divisi_pelapor1').value;
        var nama_pelapor = document.getElementById('nama_pelapor').value;
        var penerima_laporan = document.getElementById('penerima_laporan').value;
        var jam_lapor = document.getElementById('jam_lapor').value;
        var jam_perbaikan = document.getElementById('jam_perbaikan').value;
        var jam_selesai = document.getElementById('jam_selesai').value;
        var tipe_gangguan = document.getElementById('tipe_gangguan').value;
        var penyebab = document.getElementById('penyebab').value;
        var penyelesaian = document.getElementById('penyelesaian').value;
        var keterangan = document.getElementById('keterangan').value;
        var teknisi = document.getElementById('teknisi').value;
        var agree = document.getElementById('agree').checked;

        // Membuat objek FormData dan menambahkan data formulir
        var formData = new FormData();
        formData.append('tanggal', tanggal);
        formData.append('divisi_pelapor', divisi_pelapor);
        formData.append('nama_pelapor', nama_pelapor);
        formData.append('penerima_laporan', penerima_laporan);
        formData.append('jam_lapor', jam_lapor);
        formData.append('jam_perbaikan', jam_perbaikan);
        formData.append('jam_selesai', jam_selesai);
        formData.append('tipe_gangguan', tipe_gangguan);
        formData.append('penyebab', penyebab);
        formData.append('penyelesaian', penyelesaian);
        formData.append('keterangan', keterangan);
        formData.append('teknisi', teknisi);
        formData.append('agree', agree);

        // Membuat objek XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // Menentukan metode, URL, dan apakah request bersifat asynchronous
        xhr.open('POST', '/path/ke/server', true);

        // Menangani event ketika permintaan selesai
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                // Permintaan sukses, lakukan sesuatu jika diperlukan
                console.log('Berhasil mengirim data');
            } else {
                // Permintaan gagal
                console.error('Gagal mengirim data');
            }
        };

        // Mengirim permintaan dengan menggunakan objek FormData
        xhr.send(formData);
    });
});

