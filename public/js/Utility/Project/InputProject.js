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

tanggal_mulai.disabled = true;
tanggal_selesai.disabled = true;
nama_project.disabled = true;
nama_mesin.disabled = true;
merk_mesin.disabled = true;
lokasi_mesin.disabled = true;
tahun_pembuatan.disabled = true;
keterangan_kerusakan.disabled = true;
perbaikan.disabled = true;
progress.disabled = true;
selesai.disabled = true;
gambar1.disabled = true;
ket_gambar1.disabled = true;
gambar2.disabled = true;
ket_gambar2.disabled = true;

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
    progress.disabled = false;
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
    progress.disabled = true;
    selesai.disabled = true;
    gambar1.disabled = true;
    ket_gambar1.disabled = true;
    gambar2.disabled = true;
    ket_gambar2.disabled = true;
});

// $(document).ready(function () {
//     $("#prosesButton").click(function (e) {

//         // var Token = $('meta[name="csrf-Token"]').attr("content");
//         // var requestData = {
//         //     tanggal : tanggal.value,
//         //     divisi_pelapor1 : divisi_pelapor1.value,
//         //     nama_pelapor : nama_pelapor.value,
//         //     penerima_laporan : penerima_laporan.value,
//         //     jam_lapor : jam_lapor.value,
//         //     jam_perbaikan : jam_perbaikan.value,
//         //     jam_selesai : jam_selesai.value,
//         //     tipe_gangguan : tipe_gangguan.value,
//         //     penyebab : penyebab.value,
//         //     penyelesaian : penyelesaian.value,
//         //     keterangan : keterangan.value,
//         //     teknisi : teknisi.value,
//         //     agree : true,
//         //     IdLaporan : idLaporan.value,
//         //     gambar1 : gambar1.value,
//         //     ket_gambar1 : ket_gambar1.value,
//         //     gambar2 : gambar2.value,
//         //     ket_gambar2 : ket_gambar2.value,
//         // };

//         // console.log(requestData);
//         // $.ajax({
//         //     url: "/postData",
//         //     method: "POST",
//         //     data: requestData,
//         //     headers:{
//         //         "X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr('content'),
//         //     },
//         //     // dataType: "json",
//         //     success: function (response) {
//         //         console.log(response);

//         //         Swal.fire({
//         //             icon: 'success',
//         //             title: 'Data berhasil disimpan',
//         //             showConfirmButton: false,
//         //             timer: 1500
//         //         });
//         //     }
//         // });
//         // $.ajax({
//         //     url: "/postDataGambar",
//         //     method: "POST",
//         //     data: requestData,
//         //     headers:{
//         //         "X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr('content'),
//         //     },
//         //     // dataType: "json",
//         //     success: function (response) {
//         //         console.log(response);

//         //         Swal.fire({
//         //             icon: 'success',
//         //             title: 'Data berhasil disimpan',
//         //             showConfirmButton: false,
//         //             timer: 1500
//         //         });
//         //     }
//         // });

//     });

//     var dataTable = $("#tabel_input_project").DataTable({
//         processing: true,
//         serverSide: true,
//         responsive: true,
//         ajax: {
//             url: "/getData",
//             type: "GET",
//             data: function (d) {
//                 d.tanggal1 = $("#bulan").val();
//                 d.tanggal2 = $("#tahun").val();

//             },
//         },

//         columns: [

//             // {
//             //     data: null,
//             //     render: function (data, type, full, meta) {
//             //         return '<input type="checkbox" class="checkbox" value="' + full.id + '">';
//             //     }
//             // },

//             { data: "NamaProject" },

//             // {
//             //     data: "tanggal",
//             //     render: function (data, type, full, meta) {
//             //         var date = new Date(data);
//             //         var day = date.getDate();
//             //         var month = date.getMonth() + 1;
//             //         var year = date.getFullYear();

//             //         day = day < 10 ? "0" + day : day;
//             //         month = month < 10 ? "0" + month : month;
//             //         return day + "-" + month + "-" + year;
//             //     },
//             // },

//             { data: "NamaMesin" },
//             { data: "TglMulai" },
//             { data: "TglSelesai" },
//             { data: "Keterangan" },
//             { data: "KeteranganKerja" },
//             { data: "Penyelesaian" },

//         ],
//     });

//     $("#refreshButton").click(function () {
//         dataTable.ajax.reload();
//         console.log(dataTable);
//     });

// });
