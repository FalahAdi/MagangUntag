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
