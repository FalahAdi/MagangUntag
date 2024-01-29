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

    $(document).on("change", ".checkbox_project", function () {
        var selectedData = [];
        $(".checkbox_project:checked").each(function () {
            var rowData = dataTable.row($(this).closest("tr")).data();
            selectedData.push(rowData);
        });

        // Tampilkan preview data dan tautan untuk mengunduh PDF
        if (selectedData.length > 0) {
            var previewHtml = "<h3>Preview Data</h3><ul>";
            selectedData.forEach(function (data) {
                previewHtml +=
                    "<li>Nama Mesin :  " + data.NamaProject + "</li>";
                "<li>Merk Mesin :  " + data.NamaProject + "</li>";
                "<li>Lokasi Mesin :  " + data.NamaProject + "</li>";
                "<li>Tahun Pembuatan :  " + data.NamaProject + "</li>";
                // Tambahkan data lain yang ingin Anda tampilkan
            });
            previewHtml += "</ul>";

            $("#previewContainer").html(previewHtml);

            // Tambahkan tautan untuk mengunduh PDF
            $("#downloadPdfLink").attr("href", "javascript:downloadPDF()");
            $("#downloadPdfContainer").show();
        } else {
            // Sembunyikan preview dan tautan PDF jika tidak ada data yang dipilih
            $("#previewContainer").html("");
            $("#downloadPdfContainer").hide();
        }
    });

    function downloadPDF() {
        var pdf = new jsPDF();

        $(".checkbox_project:checked").each(function () {
            var rowData = dataTable.row($(this).closest("tr")).data();
            pdf.text(20, yPosition, "Nama Project: " + rowData.NamaProject);
            // Tambahkan data lain yang ingin Anda sertakan di PDF
        });

        pdf.save("preview_data.pdf");
    }
});
