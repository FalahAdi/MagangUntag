var bulan = document.getElementById("bulan");
var sampaiDengan = document.getElementById("sampaiDengan");
var refreshButton = document.getElementById("refreshButton");
var divisi_pelapor = document.getElementById("divisi_pelapor");



if (bulan && sampaiDengan) {
var tanggal_akhirOutput = new Date().toISOString().split("T")[0];
bulan.value = tanggal_akhirOutput;
sampaiDengan.value = tanggal_akhirOutput;

var currentDateTime = new Date();
var hours = currentDateTime.getHours().toString().padStart(2, '0');
var minutes = currentDateTime.getMinutes().toString().padStart(2, '0');
var timeString = hours + ':' + minutes;

}




// $(document).ready(function () {


//     var timeRenderer = function (data, type, full, meta) {
//         var date = new Date(data);
//         var hours = date.getHours().toString().padStart(2, "0");
//         var minutes = date.getMinutes().toString().padStart(2, "0");
//         return hours + ":" + minutes;
//     };

//     var dataTable = $("#tabel_gambar_project").DataTable({
//         processing: true,
//         serverSide: true,
//         responsive: true,
//         ajax: {
//             url: "/getData",
//             type: "GET",
//             data: function (d) {
//                 d.tanggal1 = $("#tanggal").val();
//                 d.tanggal2 = $("#sampaiDengan").val();
//                 d.divisi = $("#divisi_pelapor").val();

//             },
//         },

//         columns: [

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


//             // { data: "L_div_pelapor" },
//             // { data: "Nama_pelapor" },
//             // { data: "Penerima_laporan" },
//             // { data: "Jam_lapor", render: timeRenderer },
//             // { data: "jam_pelaksanan", render: timeRenderer },
//             // { data: "Jam_selesai", render: timeRenderer },
//             // { data: "Type_gangguan" },
//             // { data: "Penyebab" },
//             // { data: "Penyelesaian" },
//             // { data: "Keterangan" },
//             // { data: "Teknisi" },
//         ],
//     });

//     $("#refreshButton").click(function () {
//         dataTable.ajax.reload();
//         //console.log(dataTable);
//     });


// });
