//button
let inputButton = document.getElementById("inputButton");
let koreksiButton = document.getElementById("koreksiButton");
let hapusinputButton = document.getElementById("hapusButton");
let prosesButton = document.getElementById("prosesButton");
let batalButton = document.getElementById("batalButton");
let refreshButton = document.getElementById("refreshButton");

//form
let tanggal = document.getElementById("tanggal");
let divisi_pelapor1 = document.getElementById("divisi_pelapor1");
let nama_pelapor = document.getElementById("nama_pelapor");
let penerima_laporan = document.getElementById("penerima_laporan");
let jam_lapor = document.getElementById("jam_lapor");
let jam_perbaikan = document.getElementById("jam_perbaikan");
let jam_selesai = document.getElementById("jam_selesai");
let tipe_gangguan = document.getElementById("tipe_gangguan");
let penyebab = document.getElementById("penyebab");
let penyelesaian = document.getElementById("penyelesaian");
let keterangan = document.getElementById("keterangan");
let teknisi = document.getElementById("teknisi");
let gambar1 = document.getElementById("gambar1");
let ket_gambar1 = document.getElementById("ket_gambar1");
let hasil_gambar1 = document.getElementById("hasil_gambar1");
let gambar2 = document.getElementById("gambar2");
let ket_gambar2 = document.getElementById("ket_gambar2");
let hasil_gambar2 = document.getElementById("hasil_gambar2");
let bulan = document.getElementById("bulan");
let sampaiDengan = document.getElementById("sampaiDengan");
let divisi_pelapor2 = document.getElementById("divisi_pelapor2");
let imagePreviewContainer1 = document.getElementById("imagePreviewContainer1");
let imagePreviewContainer2 = document.getElementById("imagePreviewContainer2");
let agree = document.getElementById("agree");

var bulanInput = document.getElementById("bulan");
var sampaiDenganInput = document.getElementById("sampaiDengan");
var tanggalInput = document.getElementById("tanggal");
var JamLapor = document.getElementById("jam_lapor");

if (bulanInput && tanggalInput && JamLapor && sampaiDenganInput) {
    var tanggal_akhirOutput = new Date().toISOString().split("T")[0];
    bulanInput.value = tanggal_akhirOutput;
    tanggalInput.value = tanggal_akhirOutput;
    sampaiDengan.value = tanggal_akhirOutput;

    var currentDateTime = new Date();
    var hours = currentDateTime.getHours().toString().padStart(2, "0");
    var minutes = currentDateTime.getMinutes().toString().padStart(2, "0");
    var timeString = hours + ":" + minutes;

    JamLapor.value = timeString;
}

// Initially disable all form elements
tanggal.disabled = true;
divisi_pelapor1.disabled = true;
nama_pelapor.disabled = true;
penerima_laporan.disabled = true;
jam_lapor.disabled = true;
jam_perbaikan.disabled = true;
jam_selesai.disabled = true;
tipe_gangguan.disabled = true;
penyebab.disabled = true;
penyelesaian.disabled = true;
keterangan.disabled = true;
teknisi.disabled = true;
gambar1.disabled = true;
ket_gambar1.disabled = true;
hasil_gambar1.disabled = true;
gambar2.disabled = true;
ket_gambar2.disabled = true;
hasil_gambar2.disabled = true;
prosesButton.disabled = true;

// Event listener for Input Button
inputButton.addEventListener("click", function () {
    // Enable all input fields and buttons
    // enableFormElements(t);
    koreksiButton.disabled = true;
    hapusinputButton.disabled = true;
    tanggal.disabled = false;
    divisi_pelapor1.disabled = false;
    nama_pelapor.disabled = false;
    penerima_laporan.disabled = false;
    jam_lapor.disabled = false;
    jam_perbaikan.disabled = false;
    jam_selesai.disabled = false;
    tipe_gangguan.disabled = false;
    penyebab.disabled = false;
    penyelesaian.disabled = false;
    keterangan.disabled = false;
    teknisi.disabled = false;
    gambar1.disabled = false;
    ket_gambar1.disabled = false;
    hasil_gambar1.disabled = false;
    gambar2.disabled = false;
    ket_gambar2.disabled = false;
    hasil_gambar2.disabled = false;
});

batalButton.addEventListener("click", function () {
    // Disable all input fields and buttons
    koreksiButton.disabled = false;
    hapusinputButton.disabled = false;
    tanggal.disabled = true;
    divisi_pelapor1.disabled = true;
    nama_pelapor.disabled = true;
    penerima_laporan.disabled = true;
    jam_lapor.disabled = true;
    jam_perbaikan.disabled = true;
    jam_selesai.disabled = true;
    tipe_gangguan.disabled = true;
    penyebab.disabled = true;
    penyelesaian.disabled = true;
    keterangan.disabled = true;
    teknisi.disabled = true;
    gambar1.disabled = true;
    ket_gambar1.disabled = true;
    hasil_gambar1.disabled = true;
    gambar2.disabled = true;
    ket_gambar2.disabled = true;
    hasil_gambar2.disabled = true;
});

agree.addEventListener("click", function () {
    prosesButton.disabled = !agree.checked;
});

// Event listener untuk Gambar 1
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

// Event listener untuk Gambar 2
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

$(document).ready(function () {
    $("#prosesButton").click(function (e) {
        var Token = $('meta[name="csrf-Token"]').attr("content");
        var requestData = {
            tanggal: tanggal.value,
            divisi_pelapor1: divisi_pelapor1.value,
            nama_pelapor: nama_pelapor.value,
            penerima_laporan: penerima_laporan.value,
            jam_lapor: jam_lapor.value,
            jam_perbaikan: jam_perbaikan.value,
            jam_selesai: jam_selesai.value,
            tipe_gangguan: tipe_gangguan.value,
            penyebab: penyebab.value,
            penyelesaian: penyelesaian.value,
            keterangan: keterangan.value,
            teknisi: teknisi.value,
            agree: true,
        };
        console.log(requestData);

        $.ajax({
            url: "/postData",
            method: "POST",
            data: requestData,
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
            // dataType: "json",
            success: function (response) {
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

    var dataTable = $("#tabel_input_gangguan").DataTable({
        processing: true,
        serverSide: true,
        responsive: true,
        ajax: {
            url: "/getData",
            type: "GET",
            data: function (d) {
                d.tanggal1 = $("#bulan").val();
                d.tanggal2 = $("#sampaiDengan").val();
                d.divisi = $("#divisi_pelapor2").val();
                // d.tanggal1 = '2023-12-01';
                // d.tanggal2 = '2024-01-20';
                // d.divisi = null;
            },
        },
        columns: [
            {
                data: "Id_Laporan",
                render: function (data, type, full, meta) {
                    return (
                        '<input type="checkbox" class="checkbox_elektrik" value="' +
                        data +
                        '">'
                    );
                },
            },

            //{ data: "Id_Laporan" },
            {
                data: "tanggal",
                render: function (data, type, full, meta) {
                    var date = new Date(data);
                    var day = date.getDate();
                    var month = date.getMonth() + 1;
                    var year = date.getFullYear();

                    day = day < 10 ? "0" + day : day;
                    month = month < 10 ? "0" + month : month;
                    return day + "-" + month + "-" + year;
                },
            },
            { data: "L_div_pelapor" },
            { data: "Nama_pelapor" },
            { data: "Penerima_laporan" },
            { data: "Jam_lapor", render: timeRenderer },
            { data: "jam_pelaksanan", render: timeRenderer },
            { data: "Jam_selesai", render: timeRenderer },
            { data: "Type_gangguan" },
            { data: "Penyebab" },
            { data: "Penyelesaian" },
            { data: "Keterangan" },
            { data: "Teknisi" },
        ],
        order: [[1, "asc"]],
    });

    $("#refreshButton").click(function () {
        dataTable.ajax.reload();
        console.log(dataTable);
    });
});

$(document).ready(function () {
    // Inisialisasi DataTable
    var dataTable = $("#tabel_input_gangguan").DataTable();

    $("tbody").on("click", ".checkbox_elektrik", function () {
        if ($(this).prop("checked")) {
            hapusButton.disabled = false;
            koreksiButton.disabled = false;

            var selectedRow = $(this).closest("tr");

            // var selectedDate = selectedRow.find("td:eq(1)").text();
            // var selectedJam = selectedRow.find("td:eq(2)").text();
            // var selectedNoMeter = selectedRow.find("td:eq(3)").text();
            // var selectedCounter = selectedRow.find("td:eq(4)").text();
            // var selectedTeknisi = selectedRow.find("td:eq(5)").text();

            var selectedid_laporan = $(this).val();

            $("#id_laporan").val(selectedid_laporan);
            // $("#tanggal").val(selectedDate);
            // $("#jam").val(selectedJam);
            // $("#nometer").val(selectedNoMeter);
            // $("#counter").val(selectedCounter);
            // $("#teknisi").val(selectedTeknisi);

            console.log("Selected id_laporan: ", selectedid_laporan);
            // console.log("Selected Date: ", selectedDate);
            // console.log("Selected Jam: ", selectedJam);
            // console.log("Selected No Meter: ", selectedNoMeter);
            // console.log("Selected Counter: ", selectedCounter);
            // console.log("Selected Teknisi: ", selectedTeknisi);
        }
    });

    // Menangani klik pada checkbox di setiap baris

    // Menangani klik pada tombol hapus
    $("#hapusButton").click(function (e) {
        var Token = $('meta[name="csrf-Token"]').attr("content");
        // Dapatkan checkbox tercentang di dalam baris yang dipilih
        var checkboxValues = $(".checkbox_elektrik:checked")
            .map(function () {
                return this.value;
            })
            .get();
        if (checkboxValues.length > 0) {
            Swal.fire({
                title: "Anda yakin untuk menghapus data?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Ya",
                denyButtonText: "Tidak",
            }).then((result) => {
                if (result.isConfirmed) {
                    var requestData = {
                        id: checkboxValues,
                    };

                    $.ajax({
                        url: "/deleteData",
                        method: "DELETE",
                        data: requestData,
                        headers: {
                            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                                "content"
                            ),
                        },
                        success: function (response) {
                            console.log(response);
                            // Tangani keberhasilan, perbarui UI atau muat ulang DataTable jika diperlukan
                            dataTable.ajax.reload();
                            Swal.fire("Data berhasil dihapus!", "", "success");
                        },
                        error: function (error) {
                            console.error(error);
                        },
                    });
                } else if (result.isDenied) {
                    Swal.fire("Data tidak dihapus", "", "info");
                }
            });
        } else {
            Swal.fire(
                "Pilih data yang akan dihapus terlebih dahulu",
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
