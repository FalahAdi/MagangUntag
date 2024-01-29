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

// tanggal_mulai.disabled = true;
// tanggal_selesai.disabled = true;
// nama_project.disabled = true;
// nama_mesin.disabled = true;
// merk_mesin.disabled = true;
// lokasi_mesin.disabled = true;
// tahun_pembuatan.disabled = true;
// keterangan_kerusakan.disabled = true;
// perbaikan.disabled = true;
// progress.disabled = true;
// selesai.disabled = true;
// gambar1.disabled = true;
// ket_gambar1.disabled = true;
// gambar2.disabled = true;
// ket_gambar2.disabled = true;

inputButton.addEventListener("click", function () {
    console.log("Input Button Clicked");
    koreksiButton.disabled = false;
    hapusButton.disabled = false;
    tanggal_mulai.disabled = false;
    tanggal_selesai.disabled = false;
    nama_project.disabled = false;
    nama_mesin.disabled = false;
    merk_mesin.disabled = false;
    lokasi_mesin.disabled = false;
    tahun_pembuatan.disabled = false;
    keterangan_kerusakan.disabled = false;
    perbaikan.disabled = false;
    //progress.disabled = false;
    selesai.disabled = false;
    gambar1.disabled = false;
    gambar2.disabled = false;
    ket_gambar2.disabled = false;
    ket_gambar1.disabled = false;
});

batalButton.addEventListener("click", function () {
    koreksiButton.disabled = true;
    hapusButton.disabled = true;
    tanggal_mulai.disabled = true;
    tanggal_selesai.disabled = true;
    nama_project.disabled = true;
    nama_mesin.disabled = true;
    merk_mesin.disabled = true;
    lokasi_mesin.disabled = true;
    tahun_pembuatan.disabled = true;
    keterangan_kerusakan.disabled = true;
    perbaikan.disabled = true;
    //progress.disabled = true;
    selesai.disabled = true;
    gambar1.disabled = true;
    ket_gambar1.disabled = true;
    gambar2.disabled = true;
    ket_gambar2.disabled = true;
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
        var NamaMesin = nama_mesin.value;
        var NamaProject = nama_project.value;
        var TglMulai = tanggal_mulai.value;
        var TglSelesai = tanggal_selesai.value;
        // var Keterangan = keterangan.value;
        //var user_input = user_input.value;
        var KeteranganKerja = keterangan_kerusakan.value;
        var MerkMesin = merk_mesin.value;
        var LokasiMesin = lokasi_mesin.value;
        var TahunBuat = tahun_pembuatan.value;
        var Perbaikan = perbaikan.value;
        var requestData = {
            //Kode: Kode.value,
            NamaMesin: NamaMesin.value,
            NamaProject: NamaProject.value,
            TglMulai: TglMulai.value,
            TglSelesai: TglSelesai.value,
            //Keterangan: Keterangan.value,
            //user_input: user_input.value,
            KeteranganKerja: KeteranganKerja.value,
            MerkMesin: MerkMesin.value,
            LokasiMesin: LokasiMesin.value,
            TahunBuat: TahunBuat.value,
            Perbaikan: Perbaikan.value,
        };
        console.log(requestData);
        $.ajax({
            url: "/postDataProject",
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
});

$(document).ready(function () {
    // Inisialisasi DataTable
    var dataTable = $("#tabel_input_project").DataTable();

    $("tbody").on("click", ".checkbox_project", function () {
        if ($(this).prop("checked")) {
            hapusButton.disabled = false;
            koreksiButton.disabled = false;
            var selectedRow = $(this).closest("tr");
            var selectedid_laporan = $(this).val();
            selectedData = {
                Id: selectedid_laporan,
                NamaProject: selectedRow.find("td:eq(1)").text(),
                NamaMesin: selectedRow.find("td:eq(2)").text(),
                // MerkMesin: selectedRow.find("td:eq(3)").text(),
                // LokasiMesin: selectedRow.find("td:eq(4)").text(),
                // TahunPembuatan: selectedRow.find("td:eq(5)").text(),
                TglMulai: selectedRow.find("td:eq(3)").text(),
                TglSelesai: selectedRow.find("td:eq(4)").text(),
                KeteranganKerja: selectedRow.find("td:eq(5)").text(),
                //Perbaikan: selectedRow.find("td:eq(9)").text(),
                Keterangan: selectedRow.find("td:eq(6)").text(),
            };
            // Update the form fields with the selectedData
            $("#id").val(selectedData.Id);
            $("#nama_project").val(selectedData.NamaProject);
            $("#nama_mesin").val(selectedData.NamaMesin);
            $("#merk_mesin").val(selectedData.MerkMesin);
            $("#lokasi_mesin").val(selectedData.LokasiMesin);
            $("#tahun_pembuatan").val(selectedData.TahunPembuatan);
            $("#tanggal_mulai").val(selectedData.TglMulai);
            $("#tanggal_selesai").val(selectedData.TglSelesai);
            $("#keterangan_kerusakan").val(selectedData.KeteranganKerja);
            $("#perbaikan").val(selectedData.Perbaikan);
            $("#progress").val(selectedData.TglSelesai);
            console.log(
                "Selected id_laporan: ",
                selectedData.Id,
                selectedData.NamaProject,
                selectedData.NamaMesin,
                selectedData.MerkMesin,
                selectedData.LokasiMesin,
                selectedData.TahunPembuatan,
                selectedData.TglMulai,
                selectedData.TglSelesai,
                selectedData.KeteranganKerja,
                selectedData.Perbaikan,
                selectedData.Keterangan
            );
        } else {
            // Clear the form fields when the checkbox is unchecked
            $("#id_laporan").val("");
            $("#tanggal").val("");
            $("#divisi_pelapor1").val("");
            $("#nama_pelapor").val("");
            $("#penerima_laporan").val("");
            $("#jam_lapor").val("");
            $("#jam_perbaikan").val("");
            $("#jam_selesai").val("");
            $("#tipe_gangguan").val("");
            $("#penyebab").val("");
            $("#penyelesaian").val("");
            $("#keterangan").val("");
            $("#teknisi").val("");
            console.log("Checkbox is unchecked. Form cleared.");
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
