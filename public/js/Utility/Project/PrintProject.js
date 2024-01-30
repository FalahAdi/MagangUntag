var bulan = document.getElementById("bulan");
var tahun = document.getElementById("tahun");

$(document).ready(function () {
    var timeRenderer = function (data, type, full, meta) {
        var date = new Date(data);
        return date.toLocaleString(); // Menggunakan waktu lengkap bersamaan dengan tanggal
    };

    var dataTable = $("#tabel_print_project").DataTable({
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

    // Event listener for checkbox changes
    $("tbody").on("click", ".checkbox_project", function () {
        if ($(this).prop("checked")) {
            var id = $(this).val();

            $.ajax({
                url: "/getDataProjectId",
                type: "GET",
                data: { id: id },
                success: function (data) {
                    // $("#previewData").empty();
                    $("#previewData").append(
                        '<div class="preview-item border p-4 mb-4 rounded">' +
                            '<h1 class="mb-4 text-center">Serah Terima Permintaan Jasa Teknik</h1>' +
                            '<h1 class="mb-4 text-center">PT. KERTARAJASA RAYA</h1>' +
                            '<h3 class="mb-4 text-center">JL. Raya Tropodo No.1 Waru - SIDOARJO</h3>' +
                            '<div class="row">' +
                            '<div class="col-md-6">' +
                            "<p><strong>ID:</strong> " +
                            data.Id +
                            "</p>" +
                            "<p><strong>Nama Mesin:</strong> " +
                            data.NamaMesin +
                            "</p>" +
                            "<p><strong>Nama Mesin:</strong> " +
                            data.MerkMesin +
                            "</p>" +
                            "</div>" +
                            '<div class="col-md-6">' +
                            "<p><strong>Tanggal Mulai:</strong> " +
                            data.TglMulai +
                            "</p>" +
                            "<p><strong>Tanggal Selesai:</strong> " +
                            data.TglSelesai +
                            "</p>" +
                            "<p><strong>User ID:</strong> " +
                            data.UserId +
                            "</p>" +
                            "</div>" +
                            "</div>" +
                            '<div class="row">' +
                            '<div class="col-md-12">' +
                            "<p><strong>Keterangan Kerja:</strong> " +
                            data.KeteranganKerja +
                            "</p>" +
                            "<p><strong>Keterangan:</strong> " +
                            data.Keterangan +
                            "</p>" +
                            "</div>" +
                            "</div>" +
                            "</div>"
                    );
                },
                error: function (xhr, status, error) {
                    console.error("Error fetching data:", error);
                },
            });
        } else {
            $("#previewData").empty();
        }
    });
});
