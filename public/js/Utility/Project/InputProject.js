let inputButton = document.getElementById("inputButton");
let koreksiButton = document.getElementById("koreksiButton");
let hapusButton = document.getElementById("hapusButton");
let prosesButton = document.getElementById("prosesButton");
let batalButton = document.getElementById("batalButton");
let refreshButton = document.getElementById("refreshButton");

let tanggal_mulai = document.getElementById("tanggal_mulai");
let tanggal_selesai = document.getElementById("tanggal_selesai");
let nama_project = document.getElementById("nama_project");
let nama_mesin = document.getElementById("nama_mesin");
let merk_mesin = document.getElementById("merk_mesin");
let lokasi_mesin = document.getElementById("lokasi_mesin");
let tahun_pembuatan = document.getElementById("tahun_pembuatan");
let keterangan_kerusakan = document.getElementById("keterangan_kerusakan");
let perbaikan = document.getElementById("perbaikan");
let progress = document.getElementById("progress");
let selesai = document.getElementById("selesai");
let gambar1 = document.getElementById("gambar1");
let ket_gambar1 = document.getElementById("ket_gambar1");
let gambar2 = document.getElementById("gambar2");
let ket_gambar2 = document.getElementById("ket_gambar2");
let user_input = document.getElementById("user_input");
let keterangan1 = document.getElementById("keterangan1");
let keterangan2 = document.getElementById("keterangan2");

tanggal_mulai.disabled = true;
tanggal_selesai.disabled = true;
nama_project.disabled = true;
nama_mesin.disabled = true;
merk_mesin.disabled = true;
lokasi_mesin.disabled = true;
tahun_pembuatan.disabled = true;
keterangan_kerusakan.disabled = true;
perbaikan.disabled = true;
gambar1.disabled = true;
ket_gambar1.disabled = true;
ket_gambar2.disabled = true;
gambar2.disabled = true;
keterangan1.disabled = true;
keterangan2.disabled = true;
prosesButton.disabled = true;

$(document).ready(function () {
    $("#koreksiButton").click(function (e) {
        console.log("koreksi Button Clicked");
        // inputButton.disabled = true;
        // hapusButton.disabled = true;
        tanggal_mulai.disabled = false;
        tanggal_selesai.disabled = false;
        nama_project.disabled = false;
        nama_mesin.disabled = false;
        merk_mesin.disabled = false;
        lokasi_mesin.disabled = false;
        tahun_pembuatan.disabled = false;
        keterangan_kerusakan.disabled = false;
        perbaikan.disabled = false;
        gambar1.disabled = false;
        gambar2.disabled = false;
        ket_gambar2.disabled = false;
        ket_gambar1.disabled = false;
        keterangan1.disabled = false;
        keterangan2.disabled = false;

        var checkedCheckboxes = $(".checkbox_project:checked");

        if (checkedCheckboxes.length === 0) {
            // inputButton.disabled = true;
            // hapusButton.disabled = true;
            tanggal_mulai.disabled = true;
            tanggal_selesai.disabled = true;
            nama_project.disabled = true;
            nama_mesin.disabled = true;
            merk_mesin.disabled = true;
            lokasi_mesin.disabled = true;
            tahun_pembuatan.disabled = true;
            keterangan_kerusakan.disabled = true;
            perbaikan.disabled = true;
            gambar1.disabled = true;
            gambar2.disabled = true;
            ket_gambar2.disabled = true;
            ket_gambar1.disabled = true;
            keterangan1.disabled = true;
            keterangan2.disabled = true;
            Swal.fire(
                "Pilih data yang akan dikoreksi terlebih dahulu",
                "",
                "warning"
            );
            return; // Stop the function execution
        }
    });
});

function checkAllFieldsFilled() {
    return (
        tanggal_mulai.value.trim() !== "" &&
        tanggal_selesai.value.trim() !== "" &&
        nama_project.value.trim() !== "" &&
        nama_mesin.value.trim() !== "" &&
        merk_mesin.value.trim() !== "" &&
        lokasi_mesin.value.trim() !== "" &&
        tahun_pembuatan.value.trim() !== "" &&
        keterangan_kerusakan.value.trim() !== "" &&
        perbaikan.value.trim() !== ""
    );
}

// Add event listeners to enable/disable prosesButton based on input field values
[
    tanggal_mulai,
    tanggal_selesai,
    nama_project,
    nama_mesin,
    merk_mesin,
    lokasi_mesin,
    tahun_pembuatan,
    keterangan_kerusakan,
    perbaikan,
].forEach(function (inputField) {
    inputField.addEventListener("input", function () {
        prosesButton.disabled = !checkAllFieldsFilled();
    });
});

document.getElementById("gambar2").addEventListener("change", function () {
    var fileInput = this;
    var fileName = fileInput.value.split("\\").pop();

    // Menampilkan nama file yang dipilih di label
    document.querySelector(".btn-link").textContent = fileName;

    // Membaca file gambar yang dipilih
    var reader = new FileReader();
    reader.onload = function (e) {
        var imagePreview = document.getElementById("hasil_gambar2");
        // Menetapkan sumber gambar saat file berhasil dibaca
        imagePreview.src = e.target.result;
        imagePreview.style.display = "block"; // Menampilkan elemen gambar
    };
    reader.readAsDataURL(fileInput.files[0]); // Membaca file sebagai URL data
});

// Event listener untuk Gambar 2
document.getElementById("gambar1").addEventListener("change", function () {
    var fileInput = this;
    var fileName = fileInput.value.split("\\").pop();

    // Menampilkan nama file yang dipilih di label
    document.querySelector(".btn-link").textContent = fileName;

    // Membaca file gambar yang dipilih
    var reader = new FileReader();
    reader.onload = function (e) {
        var imagePreview = document.getElementById("hasil_gambar1");
        // Menetapkan sumber gambar saat file berhasil dibaca
        imagePreview.src = e.target.result;
        imagePreview.style.display = "block"; // Menampilkan elemen gambar
    };
    reader.readAsDataURL(fileInput.files[0]); // Membaca file sebagai URL data
});

if (tanggal_mulai && tanggal_selesai) {
    var tanggal_akhirOutput = new Date().toISOString().split("T")[0];
    tanggal_mulai.value = tanggal_akhirOutput;
    tanggal_selesai.value = tanggal_akhirOutput;

    var currentDateTime = new Date();
    var hours = currentDateTime.getHours().toString().padStart(2, "0");
    var minutes = currentDateTime.getMinutes().toString().padStart(2, "0");
    var timeString = hours + ":" + minutes;
}

$(document).ready(function () {
    $("#prosesButton").click(function (e) {
        e.preventDefault();
        //var Kode = Kode.value;
        var nama_projectValue = nama_project.value;
        var nama_mesinValue = nama_mesin.value;
        var tanggal_mulaiValue = tanggal_mulai.value;
        var tanggal_selesaiValue = tanggal_selesai.value;
        // var Keterangan = keterangan.value;
        //var user_input = user_input.value;
        var keterangan_kerusakanValue = keterangan_kerusakan.value;
        var merk_mesinValue = merk_mesin.value;
        var lokasi_mesinValue = lokasi_mesin.value;
        var tahun_pembuatanValue = tahun_pembuatan.value;
        var perbaikanValue = perbaikan.value;
        var keteranganValue = $("input[name='keterangan']:checked").val();
        var requestData = {
            //Kode: Kode.value,
            nama_project: nama_projectValue,
            nama_mesin: nama_mesinValue,
            tanggal_mulai: tanggal_mulaiValue,
            tanggal_selesai: tanggal_selesaiValue,
            //Keterangan: Keterangan,
            //user_input: user_input,
            keterangan_kerusakan: keterangan_kerusakanValue,
            merk_mesin: merk_mesinValue,
            lokasi_mesin: lokasi_mesinValue,
            tahun_pembuatan: tahun_pembuatanValue,
            perbaikan: perbaikanValue,
            keterangan: keteranganValue,
        };
        // console.log(requestData);
        $.ajax({
            url: "/postDataProject",
            method: "POST",
            data: requestData,
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
            // dataType: "json",
            success: function (response) {
                console.log(requestData);
                console.log(response);
                Swal.fire({
                    icon: "success",
                    title: "Data berhasil disimpan",
                    showConfirmButton: false,
                    timer: 1500,
                });
            },
        });
    });
    var timeRenderer = function (data, type, full, meta) {
        var date = new Date(data);
        var hours = date.getHours().toString().padStart(2, "0");
        var minutes = date.getMinutes().toString().padStart(2, "0");
        return hours + ":" + minutes;
    };

    var dataTable = $("#tabel_input_project").DataTable({
        //var Token = $('meta[name="csrf-Token"]').attr("content"),
        processing: true,
        serverSide: true,
        responsive: true,
        ajax: {
            url: "/getDataProject",
            type: "GET",
            data: function (d) {
                // d.kode = ;
                d.bulan = $("#bulan").val();
                d.tahun = $("#tahun").val();
            },
        },
        columns: [
            {
                data: "Id",
                render: function (data, type, full, meta) {
                    return (
                        '<input type="checkbox" class="checkbox_project" value="' +
                        data +
                        '">'
                    );
                },
            },
            { data: "NamaProject" },
            { data: "NamaMesin" },
            {
                data: "TglMulai",
                render: function (data, type, full, meta) {
                    // Assuming data is in UTC format, adjust it to the local timezone
                    var date = new Date(data + "Z").toLocaleDateString();
                    return date;
                },
            },
            {
                data: "TglSelesai",
                render: function (data, type, full, meta) {
                    // Assuming data is in UTC format, adjust it to the local timezone
                    var date = new Date(data + "Z").toLocaleDateString();
                    return date;
                },
            },
            { data: "KeteranganKerja" },
            { data: "Keterangan" },
            { data: "UserId" },
        ],
    });
    $("#refreshButton").click(function () {
        dataTable.ajax.reload();
        console.log(dataTable);
    });

    batalButton.addEventListener("click", function () {
        koreksiButton.disabled = false;
        inputButton.disabled = false;
        hapusButton.disabled = false;
        tanggal_mulai.disabled = true;
        tanggal_selesai.disabled = true;
        nama_project.disabled = true;
        nama_mesin.disabled = true;
        merk_mesin.disabled = true;
        lokasi_mesin.disabled = true;
        tahun_pembuatan.disabled = true;
        keterangan_kerusakan.disabled = true;
        perbaikan.disabled = true;
        gambar1.disabled = true;
        ket_gambar1.disabled = true;
        gambar2.disabled = true;
        ket_gambar2.disabled = true;
        keterangan1.disabled = true;
        keterangan2.disabled = true;
        dataTable.clear().draw();
        //$("#tanggal_mulai").val("");
        //$("#tanggal_selesai").val("");
        $("#nama_project").val("");
        $("#nama_mesin").val("");
        $("#merk_mesin").val("");
        $("#lokasi_mesin").val("");
        $("#tahun_pembuatan").val("");
        $("#keterangan_kerusakan").val("");
        $("#perbaikan").val("");
        $("#keterangan1").val("");
        $("#keterangan2").val("");
    });

    inputButton.addEventListener("click", function () {
        console.log("Input Button Clicked");
        koreksiButton.disabled = true;
        hapusButton.disabled = true;
        tanggal_mulai.disabled = false;
        tanggal_selesai.disabled = false;
        nama_project.disabled = false;
        nama_mesin.disabled = false;
        merk_mesin.disabled = false;
        lokasi_mesin.disabled = false;
        tahun_pembuatan.disabled = false;
        keterangan_kerusakan.disabled = false;
        perbaikan.disabled = false;
        gambar1.disabled = false;
        gambar2.disabled = false;
        ket_gambar2.disabled = false;
        ket_gambar1.disabled = false;
        keterangan1.disabled = false;
        keterangan2.disabled = false;
        dataTable.clear().draw();

        // $("#tanggal_mulai").val("");
        // $("#tanggal_selesai").val("");
        $("#nama_project").val("");
        $("#nama_mesin").val("");
        $("#merk_mesin").val("");
        $("#lokasi_mesin").val("");
        $("#tahun_pembuatan").val("");
        $("#keterangan_kerusakan").val("");
        $("#perbaikan").val("");
    });
});

$(document).ready(function () {
    // Inisialisasi DataTable
    var dataTable = $("#tabel_input_project").DataTable();

    $("tbody").on("click", ".checkbox_project", function () {
        if ($(this).prop("checked")) {
            hapusButton.disabled = false;
            koreksiButton.disabled = false;
            var id = $(this).val();

            $.ajax({
                url: "/getDataProjectId",
                type: "GET",
                data: { id: id },
                success: function (data) {
                    $("#nama_project").val(data.NamaProject);
                    $("#nama_mesin").val(data.NamaMesin);
                    $("#merk_mesin").val(data.MerkMesin);
                    $("#lokasi_mesin").val(data.LokasiMesin);
                    $("#tahun_pembuatan").val(data.TahunPembuatan);
                    $("#tanggal_mulai").val(data.TglMulai);
                    $("#tanggal_selesai").val(data.TglSelesai);
                    $("#keterangan_kerusakan").val(data.KeteranganKerja);
                    $("#perbaikan").val(data.Perbaikan);
                },
                error: function (xhr, status, error) {
                    console.error("Error fetching data:", error);
                },
            });
        }
    });

    // Menangani klik pada checkbox di setiap baris

    // Menangani klik pada tombol hapus
    $("#hapusButton").click(function (e) {
        var Token = $('meta[name="csrf-Token"]').attr("content");
        // Dapatkan checkbox tercentang di dalam baris yang dipilih
        var checkboxValues = $(".checkbox_project:checked")
            .map(function () {
                return this.value;
            })
            .get();
        if (checkboxValues.length > 0) {
            Swal.fire({
                title: "Maaf Anda Tidak Berhak Menghapus Data Ini!",
                icon: "warning",
                confirmButtonText: "Ok",
            }).then((result) => {
                if (result.isConfirmed) {
                    var requestData = {
                        id: checkboxValues,
                    };
                }
            });
        } else {
            Swal.fire(
                "Maaf Anda Tidak Berhak Menghapus Data Ini!",
                "",
                "warning"
            );
        }

        var requestData = {
            id: checkboxValues,
        };

        // Tangani keberhasilan, perbarui UI atau muat ulang DataTable jika diperlukan
    });
});
